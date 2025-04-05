import React from "react";

const CocktailCard = ({ name, price, origin, isCocktail }) => {
  return (
    <div>
      {!isCocktail && (
        <>
          <span>
            <h3 id="letters">{name}</h3>
            <div id="line"></div> <h3>${price}</h3>
          </span>
          <br />
          <span className="under">
            <p>{origin}</p>
          </span>
        </>
      )}
    </div>
  );
};

export default CocktailCard;
