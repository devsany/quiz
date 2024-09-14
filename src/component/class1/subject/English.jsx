import React from "react";
import { useNavigate } from "react-router-dom";

const English = () => {
  const nav = useNavigate();

  return (
    <div>
      <div className="quiz_button">
        <button
          onClick={() => nav("/class1/english/english_level1")}
          className="button_level_1"
        >
          Level 1
        </button>
        <button className="button_level_1">Level 2</button>
        <button className="button_level_1">Level 3</button>
        <button className="button_level_1">Level 4</button>
      </div>
    </div>
  );
};

export default English;
