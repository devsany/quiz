import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

const BoxClass1 = () => {
  return (
    <div>
      <h2
        style={{
          borderLeft: "5px solid orange",
          marginLeft: "20px",
          paddingLeft: "10px",
          color: "green",
        }}
      >
        Class 1 (Section A)
      </h2>
      <div className="box_subject_class">
        <div className="box">
          <NavLink to="/class1/english">
            <img
              className="subject_image"
              src="english.png"
              alt="English"
              title="english"
            />
            <span className="subject_name"> English</span>
          </NavLink>
        </div>

        {/* second */}

        <div className="box">
          <NavLink to="/class1/science">
            <img
              className="subject_image"
              src="science.png"
              alt="Science"
              title="science"
            />
            <span className="subject_name"> Science</span>
          </NavLink>
        </div>

        {/* third */}
        <div className="box">
          <NavLink to="/class1/math">
            <img
              className="subject_image"
              src="math.png"
              alt="Mathematics"
              title="mathematics"
            />
            <span className="subject_name"> Mathematics</span>
          </NavLink>
        </div>
      </div>

      {/* second */}
    </div>
  );
};

export default BoxClass1;
