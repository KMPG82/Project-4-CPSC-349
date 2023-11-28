import React from 'react';

export default function Footer() {
    return (
        <footer class="footer">
        <div class="footer-group"><img class="footer-logo"
            src={require("../assets//imgs/jameboyyy_pokemon_logo_for_pokemon_photo_website._sprite_style._3207e6bf-a902-4630-a04f-411f0dc55454.png")}
            alt=""/>
          <p class="copyright">Copyright © 2023</p>
          <ul class="footer-ul">
            <li class="footer-link"><a class="footer__link" href="/#introduction"> Home</a></li>
            <li class="footer-last-link"><a class="footer__link" href="about-us">About</a></li>
          </ul>
        </div>
    
            <img class="pokeball" src={require("../assets/imgs/pokeball.png")} alt=""/>
    
    
      </footer>
  )
}
