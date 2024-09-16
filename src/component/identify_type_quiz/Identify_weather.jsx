import React from "react";
import Fun1 from "../learn_with_fun/fun/Fun1";
import { NavLink } from "react-router-dom";

const Identify_weather = () => {
  return (
    <div>
      <NavLink to="/learn_with_fun" className="button-23">
        Back
      </NavLink>
      <div className="quiz_box">
        <Fun1
          question="Identify the Weather"
          option1="Summer"
          option2="Rainy"
          option3="Winter"
          option4="Spring"
          image="https://img.freepik.com/premium-vector/too-hot-summer-character-heat-stroke-high-temperature-warning-hot-summer-day-vector_432516-2737.jpg"
          alt="Weather of india pic"
          correct="Summer"
        />
        <Fun1
          question="Identify the Weather"
          option1="Summer"
          option2="Rainy"
          option3="Winter"
          option4="Spring"
          image="https://img.freepik.com/premium-vector/cartoon-cute-little-boy-hiding-umbrella-rain-weather_338059-30.jpg"
          alt="Weather of india pic"
          correct="Rainy"
        />
        <Fun1
          question="Identify the Weather"
          option1="Summer"
          option2="Rainy"
          option3="Winter"
          option4="Spring"
          image="https://us.123rf.com/450wm/cteconsulting/cteconsulting1012/cteconsulting101200028/8525367-an-image-of-a-man-walking-in-a-blizzard.jpg?ver=6"
          alt="Weather of india pic"
          correct="Winter"
        />
        <Fun1
          question="Identify the Weather"
          option1="Summer"
          option2="Rainy"
          option3="Winter"
          option4="Spring"
          image="https://static.vecteezy.com/system/resources/previews/006/902/252/non_2x/rain-in-the-garden-free-vector.jpg"
          alt="Weather of india pic"
          correct="Spring"
        />
      </div>
    </div>
  );
};

export default Identify_weather;
