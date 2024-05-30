import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container">
    <div className="banner">
      <h1>Welcome to My Portfolio</h1>
      <p>Mission Statement: Crafting elegant and efficient solutions with passion and precision.</p>
    </div>
    <div className="introduction">
      <p>
        Hi, I'm [Your Name], a dedicated web developer with a knack for creating stunning web applications. 
        Explore my projects, learn more about me, and feel free to reach out for collaborations.
      </p>
    </div>
    <div className="buttons">
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact Me</Link>
    </div>
  </div>
);

export default Home;
