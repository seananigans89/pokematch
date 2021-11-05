import React from "react";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
          <button>Instructions</button>
        <div className="dropdown">
          <button onclick="myFunction()" class="dropbtn">
            Generation
          </button>
          <div id="myDropdown" className="dropdown-content">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
      {/* <div className='footerimg'>

                <img  src='https://i.imgur.com/b3ZC0ix.png' alt='oops'/>

            </div> */}
    </div>
  );
};

export default Footer;
