import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";


function App() {
  const [pokemonArr, setPokemonArr] = useState([]);
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null)
  const [secondChoice, setSecondChoice] = useState(null)

  const fetchPokemon = async () => {
    let tempPokemonArr = [];
    for (let i = 0; i < 8; i++) {
      let pokeIndex = Math.floor(Math.random() * 151) + 1;
      const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`);
      const json = await pokemon.json();
      tempPokemonArr.push(json.sprites.other["official-artwork"].front_default);
      setPokemonArr(tempPokemonArr);

      let pokeDeck1 = [...pokemonArr];
      let pokeDeck2 = [...pokemonArr];
      let pokeDeck = pokeDeck1.concat(pokeDeck2);

      
      const shuffledCards = pokeDeck
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ card, id: Math.random() }));
        
        setCards(shuffledCards);
    }
  };
  
  useEffect(() => {
    fetchPokemon();
  }, []);
  
  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card)
  }
  return (
    <div className="App">
      <div className="wrapper">
        <h1>PokéMatch!</h1>
        <button onClick={fetchPokemon}>New Game</button>

          <div className="grid">
            {cards.map((card) => (
             <Card key={card.id} card={card} handleChoice={handleChoice}/>
            ))}
          </div>
      </div>
    </div>
  );
}

export default App;
