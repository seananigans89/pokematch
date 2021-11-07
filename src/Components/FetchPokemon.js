import React, { useEffect, useState } from "react";
import Footer from "./Footer";

import PlayerChoice from "./PlayerChoice";

const FetchPokemon = () => {
  const [cards, setCards] = useState([]);

  const fetchPokemon = async () => {
    let tempPokemonArr = [];
    for (let i = 0; i < 8; i++) {
      let pokeIndex = Math.floor(Math.random() * (151 - 1 + 1)) + 1;
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`
      );
      const json = await pokemon.json();

      tempPokemonArr.push(json.sprites.other["official-artwork"].front_default);

      let pokeDeck = [...tempPokemonArr, ...tempPokemonArr];

      const shuffledCards = pokeDeck
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ card, matched: false, id: Math.random() }));

      setCards(shuffledCards);
    }
  };


  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      <PlayerChoice cards={cards} setCards={setCards}/>
      <Footer fetchPokemon={fetchPokemon}/>
    </div>
  );
};

export default FetchPokemon;
