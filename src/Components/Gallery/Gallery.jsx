import React from "react";
import key from "../../assets/images/spoon.webp";
import Button from "../Button/Button";
import "./Gallery.css";
import pack1 from "../../assets/images/pack1.webp";
import pack2 from "../../assets/images/pack2.webp";
import pack3 from "../../assets/images/pack3.webp";
import pack4 from "../../assets/images/pack4.webp";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__text">
        <h2>Instagram</h2>
        <img src={key} alt="spoon" />
        <h1>Photo Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sunt
          praesen
        </p>
        <Button>View More</Button>
      </div>
      <div className="gallery__images">
        <img src={pack1} alt="pack" />
        <img src={pack2} alt="pack" />
        <img src={pack3} alt="pack" />
        <img src={pack4} alt="pack" />
      </div>
    </div>
  );
};

export default Gallery;
