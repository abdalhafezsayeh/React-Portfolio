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
          strokeColor="red"
          animation={linkedin}
          size={50}
          style={{ cursor: "pointer", padding: 100, color: "#999" }}
        />
      </a>
      {/* github */}
      <a href="http://githup.com" target="_blank">
        <UseAnimations
          animation={github}
          size={50}
          style={{ cursor: "pointer", padding: 100 }}
        />
      </a>
      {/* facebook */}
      <a href="http://facebook.com" target="_blank">
        <UseAnimations
          animation={facebook}
          size={50}
          style={{ cursor: "pointer", padding: 100 }}
        />
      </a>
      {/* facebook */}
      <a href="http://codepen.com" target="_blank">
        <UseAnimations
          animation={codepen}
          size={50}
          style={{ cursor: "pointer", padding: 100 }}
        />
      </a>
    </div>
  );
}

export default Social;
