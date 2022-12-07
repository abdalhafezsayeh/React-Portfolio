import React from "react";
// import UseAnimations
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import facebook from "react-useanimations/lib/facebook";
import codepen from "react-useanimations/lib/codepen";
// Style
import "./header.css";


function Social() {
  return (
    <div className="h_social">
      {/* linkedIn */}
      <a href="http://linkedin.com" target="_blank">
        <UseAnimations
          strokeColor="#4db5ff"
          animation={linkedin}
          size={30}
          style={{ cursor: "pointer", padding: 100, color: "#999" }}
        />
      </a>
      {/* github */}
      <a href="http://githup.com" target="_blank">
        <UseAnimations
        strokeColor="#4db5ff"
          animation={github}
          size={40}
          style={{ cursor: "pointer", padding: 100 }}
        />
      </a>
      {/* facebook */}
      <a href="http://facebook.com" target="_blank">
        <UseAnimations
        strokeColor="#4db5ff"
          animation={facebook}
          size={40}
          style={{ cursor: "pointer", padding: 100 }}
        />
      </a>
      {/* facebook */}
      <a href="http://codepen.com" target="_blank">
        <UseAnimations
        strokeColor="#4db5ff"
          animation={codepen}
          size={40}
          style={{ cursor: "pointer", padding: 100 }}
        />
      </a>
    </div>
  );
}

export default Social;
