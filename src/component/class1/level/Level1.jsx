import React from "react";
import { useNavigate } from "react-router-dom";

const Level1 = () => {
  const nav = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => nav("/class1/english")} className="back">
          Back
        </button>
      </div>
      Level 1
    </div>
  );
};

export default Level1;
