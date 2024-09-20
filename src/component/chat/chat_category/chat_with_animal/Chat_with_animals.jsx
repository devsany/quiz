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
            <div className="chat_nav_link">Chat with Animal</div>
          </NavLink>
        </div>

        <div className="chat_area">
          <button onClick={() => nav("/chat_quiz")}>Back</button>
          <Chat_animal />
        </div>
      </div>
    </div>
  );
};

export default Chat_with_animals;
