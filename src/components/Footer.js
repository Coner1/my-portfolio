import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <div className="links">
      <Link to="/my-portfolio/about">About Me</Link>
      <Link to="/my-portfolio/projects">Projects</Link>
      <Link to="/my-portfolio/services">Services</Link>
      <Link to="/my-portfolio/contact">Contact Me</Link>
    </div>
  </div>
);

export default Footer;
