import React from 'react'
import Footer from './Footer'

const CardGrid = (props) => {


    return (
       
            <div className="grid">
            {props.cards.map((card) => (
              <props.Card
              key={card.id}
              card={card}
              handleChoice={props.handleChoice}
              flipped={
                card === props.firstChoice || card === props.secondChoice || card.matched
              }
              />
              ))}
             

              <Footer fetchPokemon={props.fetchPokemon}/>
          </div>
      
    )
}

export default CardGrid


