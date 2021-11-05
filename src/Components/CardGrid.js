import React from 'react'

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
          </div>
      
    )
}

export default CardGrid


