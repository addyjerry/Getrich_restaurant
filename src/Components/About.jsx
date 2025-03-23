import React from "react";
import "./About.css";
import key from "../assets/images/spoon.png";
import Button from "./Button";
import jollof from "../assets/images/Food.png";

export const About = () => {
  const name = "Explore Menu";
  return (
    <div className="hero__section">
      <div className="ad">
        <p>#Bar #Getrich</p>
      </div>
      <div className="about__card">
        <div className="text__area">
          <h2>Chase the new flavour</h2>
          <img src={key} alt="spoon" />
          <h1>The Key To Fine Dining</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            sunt praesen
          </p>
          <Button chidren={name} />
        </div>
        <div className="image__area">
          <img src={jollof} alt="food" />
        </div>
      </div>
    </div>
  );
};
