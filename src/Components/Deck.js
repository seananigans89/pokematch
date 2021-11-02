import React, {useEffect, useState} from 'react'

const Deck = (props) => {

const [pokedex, setPokedex] = useState([])

const pokemonArr = props.pokemonArr

// let pokeDeck = [...pokemonArr, ...pokemonArr]
const doubleArr = () => {
    const tempDeck = pokemonArr.map((pokemon, index) => {
        return(
            <div key={index}>
                <img src={pokemon} alt='pokemon'/>
                <img src={pokemon} alt='pokemon'/>

            </div>
        )
    })
    setPokedex(tempDeck)

}

useEffect(() => {
doubleArr()
    console.log(pokedex, 'ID')
},[])



    return (
        <div>
            {pokedex}
        </div>
    )
}

export default Deck
