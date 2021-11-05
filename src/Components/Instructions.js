import React from "react";
import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <div className="landing-page">
      <h3 className="welcome">Welcome!</h3>
      <p className="message">
        This is a classic matching memory game. Do your best to remember the
        position of each Pokémon as you try to find matching pairs by clicking
        on the cards to flip them over. Once all the cards have been flipped,
        you win!
      </p>
      <Link to="/CardGrid" className="play">
        Let's Play!
      </Link>
    </div>
  );
};

export default Instructions;
