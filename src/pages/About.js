import React from 'react';
import resume from '../assets/resume.pdf';
import profilePicture from '../assets/profile-picture.jpg'; // Your profile picture

const About = () => (
  <div className="container">
    <h1>About Me</h1>
    <img src={profilePicture} alt="Your Name" style={{ borderRadius: '50%', width: '150px' }} />
    <p>
      Hi, I'm [Your Name], a passionate web developer with expertise in creating dynamic and responsive web applications. 
      I hold a degree in [Your Degree] from [Your University]. My journey in web development started [X years ago], 
      and since then, I've developed a wide range of skills in JavaScript, React, Node.js, and more.
    </p>
    <p>
      In my spare time, I enjoy [Your Hobbies/Interests]. I'm always eager to learn new technologies and take on new challenges. 
      Feel free to download my resume and get in touch!
    </p>
    <a href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
  </div>
);

export default About;
