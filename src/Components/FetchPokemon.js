import React, {useState} from "react";
import { useEffect } from "react/cjs/react.development";
import Deck from "./Deck";

const FetchPokemon = () => {
const [pokemonArr, setPokemonArr] = useState([])
console.log('fetch hit')
const getPokemon = () =>{
let tempPokemonArr = []
    for (let i = 0; i < 8; i++) {
        let pokeIndex = Math.floor(Math.random() * 151) + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`)
        .then((res) => res.json())
        .then((res) => tempPokemonArr.push(res.sprites.front_default))  
    }

setPokemonArr(tempPokemonArr)
    }

    useEffect(() => {
        getPokemon()
    }, [])

  return <div>
      <Deck pokemonArr={pokemonArr}/>
  </div>;
};

export default FetchPokemon;
