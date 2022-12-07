import React from 'react'
import CV from '../../assets/abdalhafez sayeh mohmed ali.pdf'
// import UseAnimations
import UseAnimations from "react-useanimations";
import download from "react-useanimations/lib/download";
// Style
import "./header.css";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn" style={{display:'flex', alignItems:'center'}}>
        <span style={{marginRight:'8px'}}>
          <UseAnimations
            strokeColor="#4db5ff"
            animation={download}
            size={25}
            style={{ cursor: "pointer", padding: 100, color: "#999" }}
          />
        </span>
        <span>Download CV</span>
      </a>

      <a href="#" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA