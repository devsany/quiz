import React from "react";
import Chat1 from "./chat_category/chat_with_animal/Chat_with_animals";
import { NavLink } from "react-router-dom";

const Chat = () => {
  return (
    <div>
      <div className="chat_main">
        <div className="chat_nav_main">
          <NavLink to="/chat_quiz/chat_with_animals">
            <div className="chat_nav_link">Chat with Animal</div>
          </NavLink>
        </div>
        <div>hii one start chat</div>
      </div>
    </div>
  );
};

export default Chat;
