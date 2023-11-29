import React from 'react';
import pb from '../lib/pocketbase';

export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer-group"><img className="footer-logo"
            src={require("../assets//imgs/jameboyyy_pokemon_logo_for_pokemon_photo_website._sprite_style._3207e6bf-a902-4630-a04f-411f0dc55454.png")}
            alt=""/>
          <p className="copyright">Copyright © 2023</p>
          <ul className="footer-ul">
            <li className="footer-link"><a className="footer__link" href="/#introduction"> Home</a></li>
            <li className="footer-last-link"><a className="footer__link" href="about-us">About</a></li>
          </ul>
        </div>
    
            <img className="pokeball" src={require("../assets/imgs/pokeball.png")} alt=""/>
    
    
      </footer>
  )
}
