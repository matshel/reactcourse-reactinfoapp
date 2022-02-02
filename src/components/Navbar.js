import React from "react";
import logo from "../images/logo.svg";

function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} className="nav__icon" alt="logo" />
      <h3 className="nav__logo-text">ReactFacts</h3>
      <h4 className="nav__title">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
