import React, { useState, useEffect } from "react";
import Card from "./Card";

const PlayerChoice = ({cards, setCards}) => {


  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  useEffect(() => {
    if (firstChoice && secondChoice) {
      if (firstChoice.card === secondChoice.card) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.card === firstChoice.card) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetChoices();
      } else {
        setTimeout(() => resetChoices(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  const resetChoices = () => {
    setFirstChoice(null);
    setSecondChoice(null);
  };

  return (
    <div className='wrapper'> 
      <div className="grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={
              card === firstChoice ||
              card === secondChoice ||
              card.matched
            }
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerChoice;
