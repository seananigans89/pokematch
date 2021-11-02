import React, {useEffect, useState} from 'react'

const Deck = (props) => {



const pokemonArr = props.pokemonArr
console.log(pokemonArr)
let pokeDeck1 = [...pokemonArr]
let pokeDeck2 = [...pokemonArr]
let pokeDeck = pokeDeck1.concat(pokeDeck2);
console.log(pokeDeck)


    const tempDeck = pokeDeck.map((pokemon, index) => {
        return(
            <div key={index}>
                <img src={pokemon} alt='pokemon'/>
                {/* <img src={pokemon} alt='pokemon'/> */}

            </div>
        )
    })






    console.log(pokeDeck, 'ID')




    return (
        <div>
            {tempDeck}
        </div>
    )
}

export default Deck
