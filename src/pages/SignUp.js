import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import pb from '../lib/pocketbase';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Navigate } from 'react-router-dom';

export default function SignUp() {
    const { register, handleSubmit } = useForm();
    const [isLoading, setLoading] = useState(false);
    const isLoggedIn = pb.authStore.isValid;

    async function signUp(data) {
        setLoading(true);
        try {
            const record = await pb.collection('users').create({
                username: data.username,
                email: data.email,
                emailVisibility: true,
                password: data.password,
                passwordConfirm: data.confirmPassword,
            });

            const authData = await pb
            .collection("users")
            .authWithPassword(data.email, data.password);
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
                 <section id="signup__section">
                    <div className="log--in__container">
                        <div className="form__left">
                            <form className="log--in__form" onSubmit={handleSubmit(signUp)} >
                                <h1 className="log--in__title">Sign Up</h1>
                                <div className="input__container">
                                    <label className="input__text" >Username</label>
                                    <input className="input__login" type="text" id="signup-username" name="username" placeholder="Username" {...register("username")} required />
                                    <label className="input__text" >Email</label>
                                    <input className="input__login" type="text" id="signup-email" name="email" placeholder="anemail@email.com" {...register("email")} required />
                                    <label className="input__text" >Password</label>
                                    <input className="input__login" type="password" id="signup-password" name="password" placeholder="Password" {...register("password")} required />
                                    <label className="input__text" >Confirm Password</label>
                                    <input className="input__login" type="password" id="signup-confirm-password" name="confirm-password" placeholder="Re-enter password" {...register("confirmPassword")} required/>
                                    <button className="input__button" type="submit">Sign Up</button>
                                </div>
                                <p className="account__quest">Have an account?</p>
                            <Link to="/login" className="toggle__link" >Log In</Link>
                            </form>
                        </div>
                        <div className="form__right">
                            <div className="content__form">
                                <img className="form__img" src={require("../assets/imgs/jameboyyy_pokemon_logo_for_pokemon_photo_website._sprite_style._3207e6bf-a902-4630-a04f-411f0dc55454.png") } alt=""/>
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
