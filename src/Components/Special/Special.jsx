import React from "react";
import "./Special.css";
import bottle from "../../assets/images/bottle.png";
import Button from "../Button/Button";
import { Wines, cocktails } from "../data/index";
import CocktailCard from "./CocktailCard";
import WineCard from "./WineCard";

const Special = () => {
  return (
    <div className="Special">
      <h2>Menu That Fits Your Palatte </h2>
      <h1>Today's Special</h1>
      <div className="main__special">
        <div className="special__side">
          <h2>Wine & Beer</h2>
          {Wines.map((wine) => (
            <WineCard
              key={wine.id}
              name={wine.name}
              quantity={wine.quantity}
              origin={wine.origin}
              price={wine.price}
              isWine={false}
            />
          ))}
        </div>

        <div className="special__center">
          <img src={bottle} alt="wine glass" />
        </div>
        <div className="special__side">
          <h2>Cocktails</h2>
          {cocktails.map((cocktail) => (
            <CocktailCard
              key={cocktail.id}
              name={cocktail.name}
              price={cocktail.price}
              origin={cocktail.origin}
              isCocktail={false}
            />
          ))}
        </div>
      </div>
      <div id="special__button">
        <Button>Know More</Button>
      </div>
    </div>
  );
};

export default Special;
