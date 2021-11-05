import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div id="newgame">
        <button onClick={props.fetchPokemon}>New Game</button>
      </div>

      <Link to="/Instructions" id="instructions">
        Instructions
      </Link>

      <button>Generation</button>
    </footer>
  );
};

export default Footer;
