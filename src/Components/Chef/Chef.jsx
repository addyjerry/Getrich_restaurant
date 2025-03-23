import React from "react";
import "./Chef.css";
import chef from "../../assets/images/chef.png";
import key from "../../assets/images/spoon.png";

const Chef = () => {
  return (
    <div className="chef">
      <div className="chef__image">
        <img src={chef} alt="chef" />
      </div>
      <div className="chef__text">
        <h2>Jery's Word</h2>
        <img src={key} alt="spoon" />
        <h1>What We Believe In</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum culpa
          animi a quod rerum vero odit veritatis harum neque? Temporibus nisi
          voluptates cupiditate accusantium accusamus atque ea dicta exp
        </p>
      </div>
    </div>
  );
};

export default Chef;
