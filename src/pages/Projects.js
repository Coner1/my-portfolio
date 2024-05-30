// Project.js - Kang Wang - 301345391 -2024/5/29
import React from 'react';

const projects = [
  { title: 'Crowdfunding Project', description: 'It’s a crowdfund system in the entertainment industry. People can invest some money in an entertaining project, like a movie. They will get payback after profiting from the market.', img: 'path/to/image1.jpg' },
  { title: 'An IDEA Plugin for our team', description: 'This is a JetBrains IDEA plugin that provides a GUI for a customized Mybatis generator.', img: 'path/to/image2.jpg' },
  { title: 'Wechat QR Code Beautifier', description: 'This is a Wechat QR Code beautifier project using the ability of AI.', img: 'path/to/image3.jpg' },
];

const Projects = () => (
  <div className="container">
    <h1>Projects</h1>
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2>{project.title}</h2>
          {/* <img src={project.img} alt={project.title} /> */}
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
