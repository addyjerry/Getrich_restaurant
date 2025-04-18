import React from "react";
import "./Aboutus.css";
import golf from "../../assets/images/G.webp";
import knife from "../../assets/images/knife.webp";
import key from "../../assets/images/spoon.webp";
import Button from "../Button/Button";

export const Aboutus = () => {
  return (
    <section className="about__us" id="about_us">
      <div className="features__about">
        <div id="golf">
          <img src={golf} alt="backletter" />
        </div>
        <div className="on__top">
          <div className="left">
            <h2>About Us</h2>
            <img src={key} alt="spoon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum at
              dolore temporibus, eligendi nulla obcaecati .
            </p>
            <Button>Know More</Button>
          </div>
          <div className="center">
            <img src={knife} alt="knife" />
          </div>
          <div className="right">
            <h2>Our history</h2>
            <img src={key} alt="spoon" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              rem praesentium unde accusantium nemo dignissimos{" "}
            </p>
            <Button>Know More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
