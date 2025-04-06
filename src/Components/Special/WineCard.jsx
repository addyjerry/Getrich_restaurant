import React from "react";

const WineCard = ({ name, price, origin, quantity, isWine }) => {
  return (
    <div>
      {!isWine && (
        <>
          <span>
            <h3 id="letters">{name}</h3>
            <div id="line"></div> <h3 id="mon">${price}</h3>
          </span>
          <br />
          <span className="under">
            <p>{origin}</p>
            <p>|</p>
            <p>{quantity}</p>
          </span>
          <br />
        </>
      )}
    </div>
  );
};

export default WineCard;
