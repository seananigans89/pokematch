import React, {useEffect, useState} from 'react'


const Deck = (props) => {



const pokemonArr = props.pokemonArr
console.log(pokemonArr)
let pokeDeck1 = [...pokemonArr]
let pokeDeck2 = [...pokemonArr]
let pokeDeck = pokeDeck1.concat(pokeDeck2);
console.log(pokeDeck)

        
        
        
       const shuffledCards = pokeDeck.sort(() => Math.random() - 0.5) 
       .map((card) => ({card, id: Math.random()}))
    
    
       console.log(shuffledCards)







    return (
        <div className='grid'>
            {shuffledCards.map(card => (
                <div className='card' key={card.id}>
                        <img className='front' src={card.card} alt='card'/>
                        {/* <img className='back' src='./Poke_ball.png' alt='pokeback'/> */}
                    <div>

                    </div>
                   
                </div>
            )
                )}
        </div>
    )
}

export default Deck
