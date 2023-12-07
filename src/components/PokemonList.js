import React, { useState, useEffect } from 'react';
import pb from "../lib/pocketbase";
import Card from './Card';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await pb.records.getList("pokemon", 1, 50); // Adjust as needed
                setPokemons(response.items);
            } catch (error) {
                console.error("Error fetching Pokémon data", error);
            }
        };

        fetchPokemons();
    }, []);

    return (
        <div>
            {pokemons.map(pokemon => (
                <Card key={pokemon.id} data={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList;
