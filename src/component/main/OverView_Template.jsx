import React from "react";
import { NavLink } from "react-router-dom";

const OverView_Template = (props) => {
  return (
    <div>
      <div className="overview_box">
        <img src={props.img} alt={props.class} />
        <NavLink to={`/${props.class_number}`}>{props.class}</NavLink>
      </div>
    </div>
  );
};

export default OverView_Template;
