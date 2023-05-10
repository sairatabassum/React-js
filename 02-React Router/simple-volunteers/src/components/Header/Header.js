import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/main">Main</Link>
        <Link to="/">Home</Link>
        <Link to="/volunteers">Volunteers</Link>
      </nav>
    </div>
  );
};

export default Header;
