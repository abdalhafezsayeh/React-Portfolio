import React from "react";
// import UseAnimations  
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
// Style
import "./header.css";
// Component
import CTA from "./CTA";
// Image
import me from '../../assets/me1.png'



function Header() {

  return (
    <header>
      <div className="container h_container">
        <h5>Hello I'm</h5>
        <h1>Abdalhafez Sayeh</h1>
        <h5 className="text-light">Front-End Developer</h5>

        {/* Buttons */}
        <CTA />

        {/* Image  */}
        <div className="me">
          <img src={me} alt="me" />
        </div>

        {/* Text Down */}
        <a href="contact" className="h_scroll">
          Scroll Down
        </a>
        
      </div>
    </header>
  );
}

export default Header;
