import React, {useState} from 'react';
import pb from '../lib/pocketbase';

export default function Header() {
    const isLoggedIn = pb.authStore.isValid;
    const [loggedOut, setLoggedOut] = useState(false)

    function logout() {
        pb.authStore.clear();
        setLoggedOut(!loggedOut)
    }

    if (isLoggedIn) {
        return (
            <nav className="navbar">
                <div className="nav__container">
                    <div className="nav__left">
                        <img
                            src={require("../assets//imgs/jameboyyy_pokemon_logo_for_pokemon_photo_website._sprite_style._3207e6bf-a902-4630-a04f-411f0dc55454.png")}
                            alt="" className="nav__logo" />
                        <ul className="nav__lists">
                            <li className="nav__list">
                                <a className="nav__button" href="/Home">Home</a>
                            </li>
                            <li className="nav__list">
                                <a className="nav__button" href="about-us">Trade</a>
                            </li>
                            <li className="nav__list">
                                <a className="nav__button" href="about-us">About</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__right">
                        <ul className="nav__lists">
                            <li class="nav__list">
                                <a onClick={logout} class="nav__button" href="/user/logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
    else {
        return (
            <nav className="navbar">
                <div className="nav__container">
                    <div className="nav__left">
                        <img
                            src={require("../assets//imgs/jameboyyy_pokemon_logo_for_pokemon_photo_website._sprite_style._3207e6bf-a902-4630-a04f-411f0dc55454.png")}
                            alt="" className="nav__logo" />
                        <ul className="nav__lists">
                            <li className="nav__list">
                                <a className="nav__button" href="/#introduction">Home</a>
                            </li>
                            <li className="nav__list">
                                <a className="nav__button" href="about-us">About</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__right">
                        <ul className="nav__lists">
                            <li className="nav__list">
                                <a className="nav__button" href="/user/signup">Sign up</a>
                            </li>
                            <li className="nav__list">
                                <a className="nav__button" href="/user/login">Log in</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
