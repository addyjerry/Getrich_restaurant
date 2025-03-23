import React from "react";

const AwardCard = ({ title, image, description, isAward }) => {
  return (
    <div>
      {isAward || (
        <div className="laurel__group">
          <img src={image} alt="number" />
          <div className="main__laurel">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AwardCard;
