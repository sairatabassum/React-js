import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>Welcome to website</h2>
      <nav>
        <a href="/Home">Home</a>
        <a href="/Shop">Shop</a>
        <a href="About">About Us</a>
      </nav>
    </div>
  );
};

export default Header;
