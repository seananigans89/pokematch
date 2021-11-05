import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  // const [pokemonArr, setPokemonArr] = useState([]);
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  
  const fetchPokemon = async () => {
    let tempPokemonArr = [];
    for (let i = 0; i < 8; i++) {
      let pokeIndex = Math.floor(Math.random() * (151 - 1 + 1)) + 1;
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`
        );
        const json = await pokemon.json();
        console.log(json, 'test string')
        tempPokemonArr.push(json.sprites.other["official-artwork"].front_default);
        // setPokemonArr(tempPokemonArr);
        

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
    
  const handleChoice = (card) => {


    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };
  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.card === secondChoice.card) {
        console.log("match");
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.card === firstChoice.card) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetChoices();
      } else {

        setTimeout(() => resetChoices(), 1000)
      }
    }
  }, [firstChoice, secondChoice]);
  console.log(cards);
  const resetChoices = () => {
    setFirstChoice(null);
    setSecondChoice(null);
  };
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="grid">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={
                card === firstChoice || card === secondChoice || card.matched
              }
            />
          ))}
        </div>
      </div>
      <div className="newgame">
        <button onClick={fetchPokemon}>New Game</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
