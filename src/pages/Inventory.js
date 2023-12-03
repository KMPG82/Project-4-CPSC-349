import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Form from '../components/CardForm';
import Display from '../components/InventoryDisplay'
import pb from '../lib/pocketbase';
import { Navigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function Inventory() {
    const isLoggedIn = pb.authStore.isValid;
    const [cards, setCards] = useState([]);
    const [formOpen, setFormStatus] = useState(false);
    let userPokemon = [];
    const userId = pb.authStore.model.id;



    // Show and hide form function
    function openForm() {
      setFormStatus(!formOpen);
    }

    async function refresh() {
        await fetchPokemon();
        updateCards();
    }

    useEffect(() => {
        refresh();
    console.log('hello')}, [])

    // Pulls pokemon from pocketbase based on userId
    async function fetchPokemon() {
        try {
            const loadedPokemon = await pb.collection('pokemon').getFullList({ filter: `field="${userId}"` });
            userPokemon = loadedPokemon;
            console.log(userPokemon);
        } catch(e) {
        }

    }

    // Update Cards from pulled data
    function updateCards() {
        let newCards = [];
        for (let i = 0; i < userPokemon.length; i++) {
            let data = userPokemon[i];
            newCards.push(<Card key={data.id} data={data} removePokemon={removePokemon}/>);
        }
        setCards(newCards);
    }

    async function removePokemon(pokemonId) {
        try {
            const updatedPokemon = await pb.collection('pokemon').delete(pokemonId);
            refresh(); 
        } catch (e) {
            alert(e);
        }

    }

    async function search(e) {
        console.log(e.target.value);

        const loadedPokemon = await pb.collection('pokemon').getFullList({
            filter: `field="${userId}" && (name~"${e.target.value}" || type~"${e.target.value}" || level="${e.target.value}" ||
            price="${e.target.value}" || hit_points="${e.target.value}" || moves~"${e.target.value}")`,
        });

        console.log(loadedPokemon);
        userPokemon = loadedPokemon;
        updateCards();
    }

    if (isLoggedIn) {
        return (
            <Layout>
              <section id="main__section">
                  <div className="title__container">
                      <div className="sub__title--container">
                          <h1 className="main__title">Upload Your Pokemon!</h1>
                          <a className="main__sub--title" href="https://www.pokemon.com/us/pokedex">Find your pokemon's picture to upload
                              here!</a>
  
                          <button className="card-button" onClick={openForm}>add pokemon</button>
                          <h3>Copy Image Address and Paste it in the Picture Section!</h3>
                      </div>
                  </div>

                  {formOpen ? <Form toggle={openForm} refresh={refresh}/> : null}
                  
                    <div className="main__container">
                        <SearchBar handleSearch={search} />
                        <Display input={cards}/>
                    </div>
              </section>
            </Layout>
        )
    }
    else {
        return (
            <Navigate replace to="/" />
        )
    }
}
