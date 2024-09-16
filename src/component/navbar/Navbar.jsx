import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  const handleHomeThroughImage = () => {
    nav("/");
  };
  return (
    <div>
      <div>
        <div className="navbar_children">
          <span>
            <img
              onClick={handleHomeThroughImage}
              className="quiz_image"
              src="quiz-plugins-for-WordPress-removebg-preview.png"
              alt="Quiz "
            />
          </span>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/learn_with_fun">Learn with fun</NavLink>
          <NavLink to="/class1">Class 1</NavLink>
          <NavLink to="/class2">Class 2</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
