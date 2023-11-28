import React from 'react';

export default function Header() {
    return (
        <nav class="navbar">
            <div class="nav__container">
                <div class="nav__left">
                    <img
                        src={require("../assets//imgs/jameboyyy_pokemon_logo_for_pokemon_photo_website._sprite_style._3207e6bf-a902-4630-a04f-411f0dc55454.png")}
                        alt="" class="nav__logo" />
                    <ul class="nav__lists">
                        <li class="nav__list">
                            <a class="nav__button" href="/#introduction">Home</a>
                        </li>
                        <li class="nav__list">
                            <a class="nav__button" href="about-us">About</a>
                        </li>
                    </ul>
                </div>
                <div class="nav__right">
                    <ul class="nav__lists">
                        <li class="nav__list">
                            <a class="nav__button" href="/user/signup">Sign up</a>
                        </li>
                        <li class="nav__list">
                            <a class="nav__button" href="/user/login">Log in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
  )
}
