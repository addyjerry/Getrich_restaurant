import React from "react";
import "./Chef.css";
import chef from "../../assets/images/chef.webp";
import key from "../../assets/images/spoon.webp";
import sign from "../../assets/images/sign.webp";
import quotes from "../../assets/images/quotes.webp";

const Chef = () => {
  return (
    <section className="chef" id="chef">
      <div className="ontop">
        <div className="chef__image">
          <img src={chef} alt="chef" />
        </div>
        <div className="chef__text">
          <h2>Jery's Word</h2>
          <img src={key} alt="spoon" />
          <h1>What We Believe In</h1>
          <p>
            <img src={quotes} alt="quotes" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum culpa
            animi a quod rerum vero odit veritatis harum neque? Temporibus nisi
            voluptates cupiditate accusantium accusamus atque ea dicta exp
          </p>
          <h2>Kevin Luo</h2>
          <p id="title">CEO & Founder</p>
          <img src={sign} alt="signature" id="sign" />
        </div>
      </div>
    </section>
  );
};

export default Chef;
