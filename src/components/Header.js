import React, {useState} from 'react';
import pb from '../lib/pocketbase';
import { Link } from 'react-router-dom';

export default function Header() {
    const isLoggedIn = pb.authStore.isValid;
    const [loggedOut, setLoggedOut] = useState(false)

    function logout() {
        pb.authStore.clear();
        setLoggedOut(!loggedOut);
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
                                <Link className="nav__button" to="/">Home</Link>
                            </li>
                            <li className="nav__list">
                                <Link className="nav__button" to="/inventory">Inventory</Link>
                            </li>
                            <li className="nav__list">
                                <Link className="nav__button" to="/trade">Trade</Link>
                            </li>
                            <li className="nav__list">
                                <Link className="nav__button" to="/about">About</Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="nav__right">
                        <ul className="nav__lists">
                            <li className="nav__list">
                                <Link onClick={logout} to='/' className="nav__button" >Logout</Link>
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
                                <Link className="nav__button" to="/">Home</Link>
                            </li>
                            <li className="nav__list">
                                <Link className="nav__button" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__right">
                        <ul className="nav__lists">
                            <li className="nav__list">
                                <Link className="nav__button" to="/signup">Sign up</Link>
                            </li>
                            <li className="nav__list">
                                <Link className="nav__button" to="/login">Log in</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
