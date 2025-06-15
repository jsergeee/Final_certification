import React from "react";

const Hero = () => {
  return (
    <div className="Hero">
      <div class="hero">
        <div class="img_hero">
        </div>

        <div class="text_hero">
          <h1 style={{ margininset-inline-start: "8px", flexwrap: "nowrap" }}>THE BRAND</h1>
  
          <p
            style={{
              margininset-inline-start: "10px",
              display: "inline",
              whiteSpace: "nowrap",
            }}
          >
            OF LUXERIOUS
          </p>
          <p
            style={{
              color: "rgb(241, 109, 127)",
              display: "inline",
              margininset-inline-start: "10px",
              whitespace: "nowrap",
            }}
          >
            FASHION
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
