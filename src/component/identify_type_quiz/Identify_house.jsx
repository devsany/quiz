import React from "react";
import Fun1 from "../learn_with_fun/fun/Fun1";
import { NavLink } from "react-router-dom";

const Identify_house = () => {
  return (
    <div>
      <NavLink to="/learn_with_fun" className="button-23">
        Back
      </NavLink>
      <div className="quiz_box">
        <Fun1
          question="Identify the picture"
          option1="Kaccha House"
          option2="Pucca House"
          option3="Building"
          option4="small house"
          image="https://i.pinimg.com/474x/81/64/8e/81648e1d8ff0c4789b88d2cf66faaf43.jpg"
          alt="house type pic"
          correct="Kaccha House"
        />
        <Fun1
          question="Identify the picture"
          option1="Kaccha House"
          option2="Pucca House"
          option3="Building"
          option4="small house"
          image="https://miro.medium.com/v2/resize:fit:800/0*li0LhmulDX-arSY-.jpeg"
          alt="house type pic"
          correct="Pucca House"
        />
      </div>
    </div>
  );
};

export default Identify_house;
