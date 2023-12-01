import React, { useState } from "react";
import pb from "../lib/pocketbase";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function Login() {
    const { register, handleSubmit } = useForm();
    const [isLoading, setLoading] = useState(false);
    const isLoggedIn = pb.authStore.isValid;

    async function login(data) {
        setLoading(true);
        try {
            const authData = await pb
                .collection("users")
                .authWithPassword(data.username, data.password);            
        } catch (e) {
            alert(e);
        }
        setLoading(false);
    }

    if (isLoggedIn) {
        return (
            <Navigate replace to="/inventory" />
        )
    }
    else {
        return (
            <Layout>
                <section id="log--in__section">
                <div className="log--in__container">
                    <div className="form__left">
                        <form className="log--in__form" onSubmit={handleSubmit(login)}>
                        <h1 className="log--in__title">Log In</h1>
                        <div className="input__container">
                            <label className="input__text" >Username</label>
                            <input className="input__login" type="text" name="username" placeholder="Username" {...register("username")} required/>
                            <label className="input__text" >Password</label>
                                <input className="input__login" type="password" name="password" placeholder="Password" {...register("password")} required/>
                            <button className="input__button" type="submit">Log In</button>
                        </div>
                        <div className="account__info">
                            <a className="forgot__p" href="">Forgot your password?</a>
                            <div className="account__right">
                            <p className="account__quest">Don't have an account?</p>
                            <Link className="toggle__link right" to="/signup">Sign Up</Link>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="form__right">
                        <div className="content__form">
                        <img className="form__img"
                            src={require("../assets/imgs/jameboyyy_pokemon_logo_for_pokemon_photo_website._sprite_style._3207e6bf-a902-4630-a04f-411f0dc55454.png") }
                            alt=""/>
                        <h3 className="content__title">PokeTrade</h3>
                        <h5 className="content__sub--title">CSUF's first Pokemon Trading Business</h5>
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        )
    }
}
