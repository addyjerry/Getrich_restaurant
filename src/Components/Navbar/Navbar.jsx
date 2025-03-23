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
    <>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Pages</li>
          <li>Contact us</li>
          <li>Blog</li>
          <li>Landing</li>
        </ul>
      </div>
      <div className="menu">
        {menu ? (
          <div className="shortcut">
            <X onClick={handleMenu} id="close" />
            <ul>
              <li onClick={handleMenu}>Home</li>
              <li onClick={handleMenu}>Pages</li>
              <li onClick={handleMenu}>Contact us</li>
              <li onClick={handleMenu}>Blog</li>
              <li onClick={handleMenu}>Landing</li>
            </ul>
          </div>
        ) : (
          <AlignJustify onClick={handleMenu} />
        )}
      </div>
    </>
  );
};

export default Navbar;
