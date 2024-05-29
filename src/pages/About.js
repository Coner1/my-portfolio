import React from 'react';
import resume from '../assets/resume.pdf';

const About = () => (
  <div>
    <h1>About Me</h1>
    <img src="path/to/your/photo.jpg" alt="Your Name" />
    <p>Short bio about you...</p>
    <a href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
  </div>
);

export default About;
