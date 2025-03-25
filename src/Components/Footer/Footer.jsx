import React from "react";
import "./Footer.css";
import key from "../../assets/images/spoon.png";
import Button from "../Button/Button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer" id="Contact">
      <div className="newsletter">
        <h2>Newsletter</h2>
        <img src={key} alt="spoon" />
        <h1>Subscribe To Our Newsletter</h1>
        <p>And never miss latest Update</p>
        <input type="text" width={100} placeholder="Email Address" />
        <Button>Subscribe</Button>
      </div>
      <div className="below">
        <div className="contact__us">
          <h2>Contact Us</h2>
          <p>9 W 56th Sr.New York,NY 10019,USA</p>
          <p>+1 231-234-1234</p>
          <p>+1 231-234-1234</p>
        </div>
        <div className="social">
          <h1>GETRICHT</h1>
          <p>
            'The best way to find yourself is to lose yourself in the service of
            others
          </p>
          <img src={key} alt="spoon" />
          <br />
          <span>
            <Facebook />
            <Twitter />
            <Instagram />
          </span>
        </div>
        <div className="time">
          <h2>Working Hours</h2>
          <p>Moday-Friday</p>
          <p>8:00am - 2:00pm</p>
          <p>Saturday-Sunday</p>
          <p>10:00am -3:00pm</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
