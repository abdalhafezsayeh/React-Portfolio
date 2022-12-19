import React from "react";
// Style
import "./header.css";
// Component
import CTA from "./CTA";
// Image
import ME from '../../assets/me1.png'
// Component Icons
import Social from "./Social";



function Header() {

  return (
    <header>
      <div className="h_container">
        {/* Description Com */}
        <h5>Hello I'm</h5>
        <h1>Abdalhafez Sayeh</h1>
        <h5 className="text-light">Front-End Developer</h5>

        {/* Buttons */}
        <CTA />

        {/* Social */}
        <Social />

        {/* Image  */}
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        
      </div>
    </header>
  );
}

export default Header;
