import React from 'react';
import pb from '../lib/pocketbase';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Home() {
  const isLoggedIn = pb.authStore.isValid;

  if (isLoggedIn) {
    return (
      <Layout>
        <div id="main">
          <section id="introduction">
            <article>
              <h1>Welcome to PokeTrade!</h1>
              <b>PokeTrade is a fun and interactive way to trade and collect pokemon with other users</b>
              <p>Join other trainers arou1d the world and begin collecting and trading pokemon in order to fill out your
                pokedex, collect your favorite pokemon, or even "Catch them all!"
              </p>
              <ul>
                <li><Link to="/inventory">Go to your dashboard!</Link></li>
              </ul>
            </article>
            
            <img className="main__img"
              src={require("../assets/imgs/welcome poke.png")}
              alt=''
            />
          </section>
            
          <section id="track">
            <article>
              <h1>Track</h1>
              <p>After collecting some pokemon input their information and watch your collection grow!</p>
            </article>
            <img className="main__img"
              src={require("../assets/imgs/track pokemon.png")}
              alt=''
            />
          </section>
            
          <section id="trade">
            <article>
              <h1>Trade</h1>
              <p>Looking for a certain pokemon you just can't seem to find? Have too many of one pokemon? With PokeTrade you are
                able to trade with other trainers and obtain new pokemon!
              </p>
            </article>
            <img className="main__img"
              src={require("../assets/imgs/trade poke.png")}
              alt='' />
          </section>
        </div>
      </Layout>
    )
  }
  else {
    return (
      <Layout>
        <div id="main">
        <section id="introduction">
          <article>
            <h1>Welcome to PokeTrade!</h1>
            <b>PokeTrade is a fun and interactive way to trade and collect pokemon with other users</b>
            <p>Join other trainers arou1d the world and begin collecting and trading pokemon in order to fill out your
              pokedex, collect your favorite pokemon, or even "Catch them all!"
            </p>
            <ul>
              <li><Link to="/signup">Start trading!</Link></li>
            </ul>
          </article>
          
          <img className="main__img"
            src={require("../assets/imgs/welcome poke.png")}
            alt=''
          />
        </section>
          
        <section id="track">
          <article>
            <h1>Track</h1>
            <p>After collecting some pokemon input their information and watch your collection grow!</p>
          </article>
          <img className="main__img"
            src={require("../assets/imgs/track pokemon.png")}
            alt=''
          />
        </section>
          
        <section id="trade">
          <article>
            <h1>Trade</h1>
            <p>Looking for a certain pokemon you just can't seem to find? Have too many of one pokemon? With PokeTrade you are
              able to trade with other trainers and obtain new pokemon!
            </p>
          </article>
          <img className="main__img"
            src={require("../assets/imgs/trade poke.png")}
            alt='' />
        </section>
      </div>
      </Layout>
  )
  }
}



