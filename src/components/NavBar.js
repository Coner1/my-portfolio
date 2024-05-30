import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Your custom logo

const NavBar = () => (
  <nav>
      <img src={logo} alt="Logo" />
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact Me</Link>
  </nav>
);

export default NavBar;
