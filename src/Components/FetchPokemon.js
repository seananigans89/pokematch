// import React from "react";
// import { useState, useEffect } from "react";
// import Card from "./Card";

// const FetchPokemon = async ({cards, firstChoice, secondChoice}) => {
// //   const [cards, setCards] = useState([]);
// //   const [firstChoice, setFirstChoice] = useState(null);
// //   const [secondChoice, setSecondChoice] = useState(null);

//   let tempPokemonArr = [];
//   for (let i = 0; i < 8; i++) {
//     let pokeIndex = Math.floor(Math.random() * (151 - 1 + 1)) + 1;
//     const pokemon = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokeIndex}`
//     );
//     const json = await pokemon.json();

//     tempPokemonArr.push(json.sprites.other["official-artwork"].front_default);

//     let pokeDeck = [...tempPokemonArr, ...tempPokemonArr];

//     const shuffledCards = pokeDeck
//       .sort(() => Math.random() - 0.5)
//       .map((card) => ({ card, matched: false, id: Math.random() }));

//     setCards(shuffledCards);
//   }
//   // useEffect(() => {
//   //     FetchPokemon();
//   //   }, []);

//   const handleChoice = (card) => {
//     firstChoice ? setSecondChoice(card) : setFirstChoice(card);
//   };
//   //   useEffect(() => {
//   //     if (firstChoice && secondChoice) {
//   //       if (firstChoice.card === secondChoice.card) {
//   //         console.log("match");
//   //         setCards((prevCards) => {
//   //           return prevCards.map((card) => {
//   //             if (card.card === firstChoice.card) {
//   //               return { ...card, matched: true };
//   //             } else {
//   //               return card;
//   //             }
//   //           });
//   //         });
//   //         resetChoices();
//   //       } else {

//   //         setTimeout(() => resetChoices(), 1000)
//   //       }
//   //     }
//   //   }, [firstChoice, secondChoice]);
//   //   console.log(cards);
//   //   const resetChoices = () => {
//   //     setFirstChoice(null);
//   //     setSecondChoice(null);
//   //   };

//   return (
//     <div>
//       <div className="wrapper">
//         <div className="grid">
//           {/* {cards.map((card) => (
//             <Card
//               key={card.id}
//               card={card}
//               handleChoice={handleChoice}
//               flipped={
//                 card === firstChoice || card === secondChoice || card.matched
//               }
//             />
//           ))} */}

//           <div className="newgame">
//             <button onClick={FetchPokemon}>New Game</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FetchPokemon;
