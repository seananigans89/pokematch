import React, {useEffect, useState} from 'react'


const Deck = (props) => {



const pokemonArr = props.pokemonArr
console.log(pokemonArr)
let pokeDeck1 = [...pokemonArr]
let pokeDeck2 = [...pokemonArr]
let pokeDeck = pokeDeck1.concat(pokeDeck2);
console.log(pokeDeck)






    // const tempDeck = pokeDeck.map((pokemon, index) => {
        // return(
            
        //     // <div key={index}>
        //     //     <img src={pokemon} alt='pokemon'/>
        //     // </div>
        // )

    // })    
        
        
        
       const shuffledCards = pokeDeck.sort(() => Math.random() - 0.5) 
       .map((card) => ({card, id: Math.random()}))
    
    
       console.log(shuffledCards)







    return (
        <div>
            {shuffledCards.map(card => (
                <div className='card' key={card.id}>
                    <img src={card.card} alt='card'/>
                    <img src='./Poke_Ball.png' alt='pokeback'/>
                   
                </div>
            )
                )}
        </div>
    )
}

export default Deck
