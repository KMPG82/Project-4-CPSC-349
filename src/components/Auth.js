import React, { useState } from "react";
import pb from "../lib/pocketbase";
import { useForm } from "react-hook-form"

export default function Auth() {
    const { register, handleSubmit } = useForm();
    const [isLoading, setLoading] = useState(false);

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

    return (
        <>
            {isLoading && <p>Loading...</p>}

            <h1>logged in: {pb.authStore.isValid.toString()}</h1>

            <form onSubmit={handleSubmit(login)}>
                <input type="text" placeholder="email" {...register("email")} />
                <input type="password" placeholder="password" {...register("password")}/>

                <button type="submit" disabled={isLoading}>{isLoading ? "loading" : "login"}</button>
            </form>
        </>
  )
}
