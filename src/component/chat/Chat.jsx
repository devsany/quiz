import React from "react";
import { NavLink } from "react-router-dom";

const Chat = () => {
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
        <div className="chat_template">
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: 250 }}
              src="https://img.freepik.com/premium-vector/vector-illustration-cute-kids-chatting_723224-3295.jpg"
              alt="chat img"
            />
            <h1 style={{ color: "purple" }}>Let's Go Start Chat</h1>
            <h3>Select a Quiz to test yourself</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
