import React, {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Form from '../components/CardForm';
import Display from '../components/InventoryDisplay'
import pb from '../lib/pocketbase';
import { Navigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';

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
            const loadedPokemon = await pb.collection('pokemon').getFullList({ filter: `field="${userId}"`, requestKey: null });
            userPokemon = loadedPokemon;
            console.log(userPokemon);
        } catch (e) {
            alert(e);
        }

    }

    // Update Cards from pulled data
    function updateCards() {
        let newCards = [];
        for (let i = 0; i < userPokemon.length; i++) {
            let data = userPokemon[i];
            newCards.push(
                <Card 
                    key={data.id} 
                    data={data} 
                    removePokemon={removePokemon} 
                    handleListForTrade={handleListForTrade} // Pass the function as a prop
                />
            );
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
        try {
            const loadedPokemon = await pb.collection('pokemon').getFullList({
                filter: `field="${userId}" && (name~"${e.target.value}" || type~"${e.target.value}" || level="${e.target.value}" ||
                price="${e.target.value}" || hp="${e.target.value}" || moves~"${e.target.value}")`, requestKey: null
            });
    
            console.log(loadedPokemon);
            userPokemon = loadedPokemon;
            updateCards();
        } catch (error) {
            alert(error);
        }    
    }

    async function sort(e) {
        try {
            const choice = e.target.value.toLowerCase();
        
            const loadedPokemon = await pb.collection('pokemon').getFullList({
                filter: `field="${userId}"`,
                sort: `${choice}`,
            });

            console.log(loadedPokemon);
            userPokemon = loadedPokemon;
            updateCards();
        } catch (error) {
            alert(error);
        }
    }

    const handleListForTrade = async (pokemonId, isListed) => {

        try {
            await pb.records.update('pokemon', pokemonId, { isListedForTrade: isListed });
            refresh();
        } catch (error) {
            console.error("Error updating Pokémon listing status", error);
        }
    };
    

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
                        <div className='services'>
                            <SearchBar handleSearch={search} />
                            <Filter handleSort={sort} />
                        </div>
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
