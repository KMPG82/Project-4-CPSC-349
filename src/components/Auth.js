import React, { useState } from "react";
import pb from "../lib/pocketbase";
import { useForm } from "react-hook-form";

export default function Auth() {
    const { register, handleSubmit } = useForm();
    const [isLoading, setLoading] = useState(false);
    const [loggedOut, setLoggedOut] = useState(false)
    const isLoggedIn = pb.authStore.isValid;

    console.log(register("email"));

    async function login(data) {
        setLoading(true);
        try {
            const authData = await pb
                .collection("users")
                .authWithPassword(data.email, data.password);
        } catch (e) {
            alert(e);
        }
        setLoading(false);
    }

    function logout() {
        pb.authStore.clear();
        setLoggedOut(!loggedOut)
    }

    if (isLoggedIn) {
        return (
            <>
                <h1>Logged in: {isLoggedIn && pb.authStore.model.email}</h1>
                <button onClick={logout}>Log out</button>
            </>
        )
    }
    else {
        return (
            <>
                {isLoading && <p>Loading...</p>}
    
                <h1>Log in please</h1>
    
                <form onSubmit={handleSubmit(login)}>
                    <input type="text" placeholder="email" {...register("email")} />
                    <input type="password" placeholder="password" {...register("password")}/>
    
                    <button type="submit" disabled={isLoading}>{isLoading ? "loading" : "login"}</button>
                </form>
            </>
      )
    }
}
