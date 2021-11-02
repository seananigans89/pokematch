import React, { useState, useEffect } from "react";
import Deck from "./Deck";


const FetchPokemon = () => {
  const [pokemonArr, setPokemonArr] = useState([]);

  const getPokemon = async () => {
    let tempPokemonArr = [];
    for (let i = 0; i < 8; i++) {
      let pokeIndex = Math.floor(Math.random() * 151) + 1;
      const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`);
      const json = await pokemon.json();
      tempPokemonArr.push(json.sprites.other['official-artwork'].front_default);
    }
    
    setPokemonArr(tempPokemonArr);


   
  };
  console.log(pokemonArr);
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
       <h1>PokéMatch!</h1>
        <button onClick={getPokemon}>New Game</button>
        
        <Deck pokemonArr={pokemonArr} />

       

        
    </div>
  );
};

export default FetchPokemon;
