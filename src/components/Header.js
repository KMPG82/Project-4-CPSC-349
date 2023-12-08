import React, { useState, useEffect } from 'react';
import pb from '../lib/pocketbase'; 
import { Link } from 'react-router-dom';
import { useWallet } from './WalletContext';

export default function Header() {
    const isLoggedIn = pb.authStore.isValid;
    const [loggedOut, setLoggedOut] = useState(false);
    const [currency, setCurrency] = useState(0);

    const { wallet } = useWallet();

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                const userId = pb.authStore.model.id;
                console.log('User ID:', userId); // Debug: Log the User ID
        
                const userRecord = await pb.collection('users').getOne(userId);
                console.log('User record:', userRecord); // Debug: Log the user record
        
                setCurrency(userRecord.wallet); 
            } catch (error) {
                console.error("Error fetching user's currency", error);
                // Handle cases where the user record might not exist
            }
        };
        

        if (isLoggedIn) {
            fetchCurrency();
        }
    }, [isLoggedIn]);

    function logout() {
        pb.authStore.clear();
        setLoggedOut(!loggedOut);
    }

    return (
        <nav className="navbar">
            <div className="nav__container">
                <div className="nav__left">
                    <img
                        src={require("../assets/imgs/jameboyyy_pokemon_logo_for_pokemon_photo_website._sprite_style._3207e6bf-a902-4630-a04f-411f0dc55454.png")}
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
                    {isLoggedIn ? (
                        <>
                            <div className="currency__display">
                                Currency: {wallet}
                            </div>
                            <Link to="/wallet" className="wallet__tab">Wallet</Link>
                            <Link onClick={logout} to="/" className="nav__button">Logout</Link>
                        </>
                    ) : (
                        <ul className="nav__lists">
                            <li className="nav__list">
                                <Link className="nav__button" to="/signup">Sign up</Link>
                            </li>
                            <li className="nav__list">
                                <Link className="nav__button" to="/login">Log in</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}
