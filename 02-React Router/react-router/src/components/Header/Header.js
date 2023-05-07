import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <h1>Welcome to header with routing website</h1>
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/friends">Friend</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>
        <CustomLink to="/countries">Countries</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
