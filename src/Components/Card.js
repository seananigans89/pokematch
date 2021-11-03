import React from 'react'

const Card = ({card, handleChoice, flipped}) => {

    const handleClick = () => {
        console.log(handleChoice)
        
    }

    return (
        <div>
             <div className='card' >
                <div className={flipped ? 'flipped' : ''}>
                  <img className="front" src={card.card} alt="card" />
                  <img className="back" src="./Poke_ball.png" onClick={handleClick} alt="pokeback" />
                </div>
              </div>
        </div>
    )
}

export default Card
