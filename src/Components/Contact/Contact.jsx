import React from "react";
import "./Contact.css";
import key from "../../assets/images/spoon.webp";
import drink from "../../assets/images/drink.webp";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <section className="contact">
      <div className="ontop">
        <div className="contact__text">
          <h2>Contact</h2>
          <img src={key} alt="spoon" />
          <h1>Find Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum culpa
            animi a quod rerum vero odit veritatis harum neque? Temporibus nisi
            voluptates cupiditate accusantium accusamus atque ea dicta exp
          </p>
          <h2>Opeining Hours</h2>
          <p>Mon-Fri 10:00am - 02:00pm</p>
          <p>Sat-Sun 10:00am - 03:00pm</p>
          <Button>Visit Us</Button>
        </div>
        <div className="contact__image">
          <img src={drink} alt="chef" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
