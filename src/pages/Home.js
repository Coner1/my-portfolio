import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to My Portfolio</h1>
    <p>Mission Statement: [Your Mission Statement]</p>
    <Link to="/about">About Me</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/services">Services</Link>
    <Link to="/contact">Contact Me</Link>
  </div>
);

export default Home;
