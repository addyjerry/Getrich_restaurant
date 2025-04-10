import React from "react";
import "./About.css";
import key from "../../assets/images/spoon.webp";
import Button from "../Button/Button";
import jollof from "../../assets/images/Food.webp";

export const About = () => {
  return (
    <section className="hero__section" id="hero">
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
          <Button>Explore Menu</Button>
        </div>
        <div className="image__area">
          <img src={jollof} alt="food" />
        </div>
        <div className="others">
          <div className="undernum">
            <p>01 - 02 03 05</p>
          </div>
          <div className="scroll">
            <a href="#Contact">
              <h5>|</h5>
            </a>
            <p>Scroll</p>
          </div>
        </div>
      </div>
    </section>
  );
};
