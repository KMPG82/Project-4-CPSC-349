import React from 'react';
import Layout from '../components/Layout';

export default function LoginPage() {
    return (
        <Layout>
            <section id="log--in__section">
                <div className="log--in__container">
                    <div className="form__left">
                        <form className="log--in__form" action="/user/login">
                        <h1 className="log--in__title">Log In</h1>
                        <div className="input__container">
                            <label className="input__text" >Username</label>
                            <input className="input__login" type="text" name="username" placeholder="Username" required/>
                            <label className="input__text" >Password</label>
                            <input className="input__login" type="password" name="password" placeholder="Password" required/>
                            <button className="input__button" type="submit">Log In</button>
                        </div>
                        <div className="account__info">
                            <a className="forgot__p" href="/user/forgot">Forgot your password?</a>
                            <div className="account__right">
                            <p className="account__quest">Don't have an account?</p>
                            <a className="toggle__link right" href="/user/signup">Sign Up</a>
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
