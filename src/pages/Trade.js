import React, { useState, useEffect } from 'react';
import pb from '../lib/pocketbase';
import Card from '../components/Card';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';

const Trade = () => {
    const [pokemons, setPokemons] = useState([]);
    const currentUserId = pb.authStore.model.id;
    console.log(pokemons);

    let userPokemon = [];

    useEffect(() => {
        fetchListedPokemons();
    }, []); // Added currentUserId as a dependency for useEffect

    const fetchListedPokemons = async () => {
        try {
            // Using the PocketBase client to fetch data
            const response = await pb.collection('pokemon').getFullList({
                filter: `field!="${currentUserId}" && isListedForTrade=true`
            });
            console.log(response);
            userPokemon = response;
            setPokemons(response);
        } catch (error) {
            console.error("Error fetching listed Pokémon data", error);
        }
    };

    const handleListForTrade = async (pokemonId, isListed) => {
        try {
          await pb.collection('pokemon').update(`${pokemonId}`, { isListedForTrade: isListed });
          // Refresh the data after updating
          const updatedPokemons = [...pokemons]; // Create a copy of the current pokemons
          const updatedPokemonIndex = updatedPokemons.findIndex(pokemon => pokemon.id === pokemonId);
          if (updatedPokemonIndex !== -1) {
            updatedPokemons[updatedPokemonIndex].isListedForTrade = isListed;
            setPokemons(updatedPokemons);
          }
        } catch (error) {
          console.error("Error updating Pokémon listing status", error);
        }
    };

    // Update Cards from pulled data
     function updateCards() {
        setPokemons(userPokemon);
    } 

    async function search(e) {
        try {
            const loadedPokemon = await pb.collection('pokemon').getFullList({
                filter: `(field!="${currentUserId}" && isListedForTrade=true) && (name~"${e.target.value}" || type~"${e.target.value}" || level="${e.target.value}" ||
                price="${e.target.value}" || hp="${e.target.value}" || moves~"${e.target.value}")`, requestKey: null
            });
    
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
                filter: `field!="${currentUserId}" && isListedForTrade=true`,
                sort: `${choice}`,
            });

            userPokemon = loadedPokemon;
            updateCards();
        } catch (error) {
            alert(error);
        }
    }
    return (
        <Layout>
        <div className='services'>
            <SearchBar handleSearch={search} />
            <Filter handleSort={sort} />
        </div>
        <div className="grid-container">
            {pokemons.map(pokemon => (
                <Card key={pokemon.id} data={pokemon} handleListForTrade={handleListForTrade} store={true} refresh={fetchListedPokemons} />
            ))}  
        </div>
        </Layout>
        
    );    
};

export default Trade;
