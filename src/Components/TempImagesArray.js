// import React, { useState } from "react";

// const tempImages = [
//   { 'src': "/src/1.png" },
//   { 'src': "/src/2.png" },
//   { 'src': "/src/3.png" },
//   { 'src': "/src/4.png" },
//   { 'src': "/src/5.png" },
//   { 'src': "/src/6.png" },
//   { 'src': "/src/7.png" },
//   { 'src': "/src/8.png" },
//   { 'src': "/src/1.png" },
//   { 'src': "/src/2.png" },
//   { 'src': "/src/3.png" },
//   { 'src': "/src/4.png" },
//   { 'src': "/src/5.png" },
//   { 'src': "/src/6.png" },
//   { 'src': "/src/7.png" },
//   { 'src': "/src/8.png" }
// ];

// const TempImagesArray = () => {
// const [cards, setCards] = useState ([])  

// const shuffleCards = () => {
// const shuffledCards = tempImages
//     .sort(() => Math.random() - 0.5)
//     .map((card) => ({ ...card, id: Math.random() }));

//     setCards(shuffledCards)

// console.log(cards)
// }
//   return(
// <div className='grid'>
//     {cards.map(card => (
//         <div className="card" key={card.id}>
//             <div>
//                 <img className='front' src={card.src} alt='cardfront' />
//                 <img src="./Poke_Ball.png" alt='cardback'/>

//             </div>   
//         </div>
//     ))} ;
// </div>
//   )
// };

// export default TempImagesArray;
