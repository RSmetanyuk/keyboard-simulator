import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <div className="navBar">
    <NavLink className="navLink" to="/" exact activeStyle={{ color: "blue" }}>
      App
    </NavLink>
    <NavLink className="navLink" to="/about" activeStyle={{ color: "blue" }}>
      About
    </NavLink>
  </div>
);

export default Navigation;
