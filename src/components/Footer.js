import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <div className="links">
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact Me</Link>
    </div>
  </div>
);

export default Footer;
