import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div id="header">
      <img src={logo} alt="logo" id="logo" />
      <Navbar />
      <div id="log__area">
        <span>Login / Registration </span> <span> |</span>{" "}
        <span>Book Table</span>
      </div>
    </div>
  );
};

export default Header;
