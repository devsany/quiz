import React from "react";
import { NavLink } from "react-router-dom";
import OverView_Template from "./OverView_Template";

const Overview = () => {
  return (
    <div>
      <div className="overview">
        <OverView_Template
          img="class_1_overview.png"
          class="Class 1"
          class_number="class1"
        />

        <OverView_Template
          img="class_1_overview.png"
          class="Class 2"
          class_number="class2"
        />

        <OverView_Template
          img="class_1_overview.png"
          class="Class 3"
          class_number="class3"
        />
      </div>
    </div>
  );
};

export default Overview;
