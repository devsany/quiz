import React from "react";
import { NavLink } from "react-router-dom";

const Learnwithfun = () => {
  return (
    <div>
      <h2
        style={{
          borderLeft: "5px solid orange",
          marginLeft: "20px",
          paddingLeft: "10px",
          color: "gray",
        }}
      >
        Learn for fun (Section A) ✨{" "}
        <span style={{ color: "orange" }}>( Child Section )</span>
      </h2>
      <NavLink className="button-26" to="/learn_with_fun/identify_animal">
        <div className="button-26">
          <span className="text"> Identify Animal 🐕‍🦺 🐱</span>
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

      <NavLink className="button-26" to="/learn_with_fun/math_buz">
        <div className="button-26">
          <span className="text"> Maths Buzz 🌀</span>
        </div>
      </NavLink>
      <NavLink className="button-26" to="/learn_with_fun/identify_vegetable">
        <div className="button-26">
          <span className="text"> Identify Vege... 🍅</span>
        </div>
      </NavLink>
      <NavLink className="button-26" to="/learn_with_fun/identify_weather">
        <div className="button-26">
          <span className="text"> Identify Weather ☁</span>
        </div>
      </NavLink>
      <NavLink className="button-26" to="/learn_with_fun/identify_house">
        <div className="button-26">
          <span className="text"> Identify House 🏡</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Learnwithfun;
