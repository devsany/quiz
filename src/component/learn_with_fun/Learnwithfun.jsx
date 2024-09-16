import React from "react";
import { NavLink } from "react-router-dom";

const Learnwithfun = () => {
  return (
    <div>
      <NavLink className="button-26" to="/learn_with_fun/identify_animal">
        <div className="button-26">
          <span className="text"> Identify Animal 🐕‍🦺</span>
        </div>
      </NavLink>

      <NavLink className="button-26" to="/learn_with_fun/identify_flower">
        <div className="button-26">
          <span className="text"> Identify Flower 🌻</span>
        </div>
      </NavLink>

      <NavLink className="button-26" to="/learn_with_fun/identify_bodypart">
        <div className="button-26">
          <span className="text"> Identify Bodypart 👂🏻</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Learnwithfun;
