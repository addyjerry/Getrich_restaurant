import React from "react";
import "./Awards.css";
import group from "../../assets/images/group.webp";
import key from "../../assets/images/spoon.webp";
import berries from "../../assets/images/berries.webp";
import AwardCard from "./AwardCard";
import { laurels } from "../data/laurels";

const Awards = () => {
  return (
    <section className=" awards">
      <div className="first">
        <img src={group} alt="logo" />
      </div>
      <div className="award__back">
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
    </section>
  );
};

export default Awards;
