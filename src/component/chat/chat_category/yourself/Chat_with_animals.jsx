import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Chat_animal from "./Chat_animal";

const Chat_with_animals = () => {
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
          <NavLink to="/chat_quiz/bird">
            <div className="chat_nav_link">Chat with Birds</div>
          </NavLink>
          <NavLink to="/chat_quiz/body">
            <div className="chat_nav_link">Chat with Body</div>
          </NavLink>
          <NavLink to="/chat_quiz/fruit">
            <div className="chat_nav_link">Chat with Fruit</div>
          </NavLink>
          <NavLink to="/chat_quiz/vegetable">
            <div className="chat_nav_link">Chat with vegetable</div>
          </NavLink>
          <NavLink to="/chat_quiz/math">
            <div className="chat_nav_link">Chat with Numbers</div>
          </NavLink>
        </div>

        <div className="chat_area">
          <button className="button-4" onClick={() => nav("/chat_quiz")}>
            Back
          </button>
          <Chat_animal />
        </div>
      </div>
    </div>
  );
};

export default Chat_with_animals;
