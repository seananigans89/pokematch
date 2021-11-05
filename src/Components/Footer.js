import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
 
      <footer className="footer">
        <Link to='/Instructions' id='instructions'>Instructions</Link>
        
          <button>Generation</button>
        
      </footer>

  );
};

export default Footer;
