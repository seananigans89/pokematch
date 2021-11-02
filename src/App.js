import { useEffect, useState } from "react";
import "./App.css";
import Images from "./Components/Images";
import FetchPokemon from "./Components/FetchPokemon";

function App() {
 const [isStarted, setIsStarted] = useState(false)
const startGame = (e) => {
e.preventDefault()
setIsStarted(true)

}
if (isStarted) {
  return (
    <div>
      <FetchPokemon/>
    </div>
  )
}else {
  return (
    <div className="App">
        <h1>Pokemon Match 2</h1>
        <button id="new-game" onClick={startGame}>New Game</button>
        <div></div>
  
        <div>
          <img className="front" src="" alt="pokefront" />
          <img className="back" src="./Poke_Ball.png" alt="pokeback" />
        </div>
      </div>
    );

}
}

export default App;

// /?limit=151&offset=0

// const loadImages = () => {
  //   fetch("https://pokeapi.co/api/v2/pokemon")
  //     .then((res) => res.json())
  //     .then((res) => setPokemonSprite(res));
  
  // };
  // useEffect(() => {
    //   loadImages();
    // }, []);
    
    // const [pokemon, setPokemon] = useState([]);
    // const makeApiCall = async (url) => {
    //   const results = await fetch(url)
    //   const jsonResults = await results.json()
    //   const finalResults = jsonResults.results
    //   console.log(finalResults)
    //   // finalResults.forEach(pokemon) => {
    
    //   // }
    
    //   const randNum1 = Math.floor (Math.random() * 151)
    //   const randNum2 = Math.floor (Math.random() * 151)
    //   const randNum3 = Math.floor (Math.random() * 151)
    //   const randNum4 = Math.floor (Math.random() * 151)
    //   const randNum5 = Math.floor (Math.random() * 151)
    //   const randNum6 = Math.floor (Math.random() * 151)
    //   const randNum7 = Math.floor (Math.random() * 151)
    //   const randNum8 = Math.floor (Math.random() * 151)
    
    //   const pokemon1 = finalResults[randNum1]
    //   const pokemon2 = finalResults[randNum2]
    //   const pokemon3 = finalResults[randNum3]
    //   const pokemon4 = finalResults[randNum4]
    //   const pokemon5 = finalResults[randNum5]
    //   const pokemon6 = finalResults[randNum6]
    //   const pokemon7 = finalResults[randNum7]
    //   const pokemon8 = finalResults[randNum8]
    
    //   setPokemon([pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, pokemon7, pokemon8])
    //   console.log(pokemon)