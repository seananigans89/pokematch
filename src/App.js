import React, { useState } from "react";
import "./App.css";
// import Images from "./Components/Images";
import FetchPokemon from "./Components/FetchPokemon";
// import TempImagesArray from "./Components/TempImagesArray";



function App() {
// const [isStarted, setIsStarted] = useState(false)
// const startGame = (e) => {
// e.preventDefault()
// setIsStarted(true)

// }
// if (isStarted) {
//   return (
//     <div>
//       <FetchPokemon/>

//     </div>
//   )
// }else {

  return (
    <div className="App">
        <h1>Pokemon Match 2</h1>
        <button id="new-game">New Game</button>
        <div>
        <FetchPokemon/>
        </div>
  
        <div>
          <img className="front" src="" alt="pokefront" />
          <img className="back" src="./Poke_Ball.png" alt="pokeback" />
        </div>
      </div>
    );


}

export default App;

