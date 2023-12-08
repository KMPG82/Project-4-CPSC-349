import React, { useState, useEffect } from 'react';
import pb from '../lib/pocketbase';
import Card from '../components/Card';

const Trade = () => {
    const [pokemons, setPokemons] = useState([]);
    const currentUserId = pb.authStore.model.id;
    console.log(pokemons);

    useEffect(() => {
        const fetchListedPokemons = async () => {
            try {
                // Using the PocketBase client to fetch data
                const response = await pb.collection('pokemon').getFullList({
                    filter: `field!="${currentUserId}" && isListedForTrade=true`
                });
                console.log(response);
                setPokemons(response);
            } catch (error) {
                console.error("Error fetching listed Pokémon data", error);
            }
        };

        fetchListedPokemons();
    }, []); // Added currentUserId as a dependency for useEffect

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

    return (
        <div>
              {pokemons.map(pokemon => (
                  <Card key={pokemon.id} data={pokemon} handleListForTrade={handleListForTrade} store={true} />
            ))}  
        </div>
    );
};

export default Trade;
