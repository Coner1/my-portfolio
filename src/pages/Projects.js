import React from 'react';

const projects = [
  { title: 'Project 1', description: 'Description of project 1', img: 'path/to/image1.jpg' },
  { title: 'Project 2', description: 'Description of project 2', img: 'path/to/image2.jpg' },
  { title: 'Project 3', description: 'Description of project 3', img: 'path/to/image3.jpg' },
];

const Projects = () => (
  <div className="container">
    <h1>Projects</h1>
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2>{project.title}</h2>
          <img src={project.img} alt={project.title} />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
