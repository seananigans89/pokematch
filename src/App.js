import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Instructions from "./Components/Instructions";
import CardGrid from "./Components/CardGrid";

function App() {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  const fetchPokemon = async () => {
    let tempPokemonArr = [];
    for (let i = 0; i < 8; i++) {
      let pokeIndex = Math.floor(Math.random() * (151 - 1 +1)) + 1
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

  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };
  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.card === secondChoice.card) {

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
        setTimeout(() => resetChoices(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  const resetChoices = () => {
    setFirstChoice(null);
    setSecondChoice(null);
  };
  return (
    <div className="App">
      <Header />

      <Route exact path="/Instructions" render={() => <Instructions />} />

      <div className="wrapper">
        <Route
          exact
          path="/CardGrid"
          render={() => (
            <CardGrid
              cards={cards}
              Card={Card}
              handleChoice={handleChoice}
              firstChoice={firstChoice}
              secondChoice={secondChoice}
              fetchPokemon={fetchPokemon}
            />
          )}
        />
      </div>
    </div>
  );
}

export default App;
