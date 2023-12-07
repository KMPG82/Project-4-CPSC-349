import React, { useState, useEffect } from 'react';
import pb from '../lib/pocketbase';
import Card from '../components/Card';

const Trade = () => {
    const [pokemons, setPokemons] = useState([]);
    const currentUserId = pb.authStore.model.id;

    useEffect(() => {
        const fetchListedPokemons = async () => {
            try {
                const response = await pb.records.getList("pokemon", 1, 50, {
                    filter: `userId!='${currentUserId}' and isListedForTrade=true`
                });
                setPokemons(response.items);
            } catch (error) {
                console.error("Error fetching listed Pokémon data", error);
            }
        };

        fetchListedPokemons();
    }, []);

    // You might want to modify the Card component or create a new one for the trade page
    // to handle trade-specific actions like sending a trade request.

    return (
        <div>
            {pokemons.map(pokemon => (
                <Card key={pokemon.id} data={pokemon} />
            ))}
        </div>
    );
};

export default Trade;
