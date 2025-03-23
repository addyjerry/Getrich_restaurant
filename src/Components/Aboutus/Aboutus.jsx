import React from "react";
import "./Aboutus.css";
import golf from "../../assets/images/G.png";
import knife from "../../assets/images/knife.png";
import Button from "../Button/Button";

export const Aboutus = () => {
  return (
    <div className="about__us">
      <div className="features__about">
        <div id="golf">
          <img src={golf} alt="backletter" />
        </div>
        <div className="on__top">
          <div className="left">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum at
              dolore temporibus, eligendi nulla obcaecati .
            </p>
            <Button>Know More</Button>
          </div>
          <div className="center">
            <img src={knife} alt="knife" />
          </div>
          <div className="left">
            <h2>Our history</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              rem praesentium unde accusantium nemo dignissimos{" "}
            </p>
            <Button>Know More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
