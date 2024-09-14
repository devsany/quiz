import React from "react";

const Header = () => {
  const username = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const standard = localStorage.getItem("standard");
  return (
    <div className="header">
      Hii! <span className="username">{username}</span>
      <span className="standard">{standard}</span>
      <br />
      <span className="email">{email}</span>
    </div>
  );
};

export default Header;
