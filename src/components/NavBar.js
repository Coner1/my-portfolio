// NavBar.js - Kang Wang - 301345391 -2024/5/29
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Your custom logo

const NavBar = () => (
  <nav>
      <img src={logo} alt="Logo" />
      <Link to="/my-portfolio">Home</Link>
      <Link to="/my-portfolio/about">About Me</Link>
      <Link to="/my-portfolio/projects">Projects</Link>
      <Link to="/my-portfolio/services">Services</Link>
      <Link to="/my-portfolio/contact">Contact Me</Link>
  </nav>
);

export default NavBar;
