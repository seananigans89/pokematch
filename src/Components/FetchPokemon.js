import React, {useState} from "react";

const FetchPokemon = () => {
let pokemonArr = []
//   const [pokemonArr, setPokemonArr] = useState([]);
  for (let i = 0; i < 8; i++) {
    let pokeIndex = Math.floor(Math.random() * 151) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`)
      .then((res) => res.json())
      .then((res) => pokemonArr.push(res.sprites.front_default))
    //   .then((setPokemonArr([...pokemonArr, ...pokemonArr])))

    
    
    
    pokemonArr = [...pokemonArr, ...pokemonArr] 

    

    
    
}
console.log(pokemonArr);

  return <div></div>;
};

export default FetchPokemon;
