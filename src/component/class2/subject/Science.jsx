import React from "react";
import { useNavigate } from "react-router-dom";
import Worksheet from "../worksheet/Worksheet";

const Science = () => {
  const nav = useNavigate();

  return (
    <div>
      <h2
        style={{
          margin: "10px",
          color: "#aaa",
          letterSpacing: "2px",
        }}
      >
        Quiz
      </h2>
      <div className="quiz_button">
        <button
          onClick={() => nav("/class1/science/science_level1")}
          className="button_level_1"
        >
          Level 1
        </button>
        <button
          onClick={() => nav("/class1/science/science_level2")}
          className="button_level_1"
        >
          Level 2
        </button>
        <button
          onClick={() => nav("/class1/science/science_level3")}
          className="button_level_1"
        >
          Level 3
        </button>
        <button
          onClick={() => nav("/class1/science/science_level4")}
          className="button_level_1"
        >
          Level 4
        </button>
        <button
          onClick={() => nav("/class1/science/science_level5")}
          className="button_level_1"
        >
          Level 5
        </button>
      </div>
      <div className="WorkSheet">
        <Worksheet />
      </div>
    </div>
  );
};

export default Science;
