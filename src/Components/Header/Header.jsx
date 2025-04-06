import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.webp";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div id="header">
      <a href="/">
        <img src={logo} alt="logo" id="logo" />
      </a>
      <Navbar />
      <div id="log__area">
        <span>Login / Registration </span> <span> |</span>{" "}
        <span>Book Table</span>
      </div>
    </div>
  );
};

export default Header;
