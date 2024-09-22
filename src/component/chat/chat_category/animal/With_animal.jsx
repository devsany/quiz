import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import Chat_animal from "../../chat_with_animal/yourself/Chat_animal";
import Animal from "./Animal";

const With_animal = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="chat_main">
        <div className="chat_nav_main">
          <NavLink to="/chat_quiz/chat_with_animals">
            <div className="chat_nav_link">Test yourself</div>
          </NavLink>
          <NavLink to="/chat_quiz/animal">
            <div className="chat_nav_link">Chat with Animals</div>
          </NavLink>
        </div>

        <div className="chat_area">
          <button className="button-4" onClick={() => nav("/chat_quiz")}>
            Back
          </button>
          <Animal />
        </div>
      </div>
    </div>
  );
};

export default With_animal;
