import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/class1">Class 1</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
