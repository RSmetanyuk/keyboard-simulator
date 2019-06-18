import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div className="navBar">
    <NavLink
      className="navLink"
      to="/keyboard-simulator/"
      exact
      activeStyle={{ color: "blue" }}
    >
      App
    </NavLink>
    <NavLink
      className="navLink"
      to="/keyboard-simulator/about"
      activeStyle={{ color: "blue" }}
    >
      About
    </NavLink>
  </div>
);

export default Navigation;
