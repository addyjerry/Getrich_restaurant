import { useState } from "react";
import React from "react";
import "./Navbar.css";
import { AlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav>
      <div className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#Special">Menu</a>
          </li>
          <li>
            <a href="#Contact">Contact us</a>
          </li>
          <li>
            <a href="#about_us">About</a>
          </li>
          <li>
            <a href="#chef">Chef</a>
          </li>
        </ul>
      </div>
      <div className="menu">
        {menu ? (
          <div className="shortcut">
            <X onClick={handleMenu} id="close" />
            <ul>
              <li onClick={handleMenu}>
                {" "}
                <a href="/">Home</a>
              </li>
              <li onClick={handleMenu}>
                {" "}
                <a href="#Special">Menu</a>
              </li>
              <li onClick={handleMenu}>
                {" "}
                <a href="#Contact">Contact us</a>
              </li>
              <li onClick={handleMenu}>
                <a href="#about_us">About</a>
              </li>
              <li onClick={handleMenu}>
                {" "}
                <a href="#chef">Chef</a>
              </li>
            </ul>
          </div>
        ) : (
          <AlignJustify onClick={handleMenu} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
