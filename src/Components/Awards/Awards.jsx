import React from "react";
import "./Awards.css";
import group from "../../assets/images/group.png";
import key from "../../assets/images/spoon.png";

import berries from "../../assets/images/berries.png";
import AwardCard from "./AwardCard";
import { laurels } from "../data/laurels";

const Awards = () => {
  return (
    <div className=" awards">
      <div className="award__back">
        <div className="first">
          <img src={group} alt="logo" />
        </div>
        <div className="awards__text">
          <h2>Awards & Recognition</h2>
          <img src={key} alt="spoon" />
          <h1>Our Laurels</h1>
          <div className="groups">
            {laurels.map((laurel) => (
              <AwardCard
                key={laurel.id}
                title={laurel.title}
                description={laurel.description}
                image={laurel.image}
                isAward={false}
              />
            ))}
          </div>
        </div>
        <div className="awards__image">
          <img src={berries} alt="berries" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
