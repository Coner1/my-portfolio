import React from 'react';

const services = [
  { service: 'Web Development', img: 'path/to/webdev.jpg' },
  { service: 'Mobile App Development', img: 'path/to/mobileapp.jpg' },
  { service: 'General Programming', img: 'path/to/programming.jpg' },
];

const Services = () => (
  <div className="container">
    <h1>Services</h1>
    <div className="services">
      {services.map((service, index) => (
        <div key={index} className="service">
          <h2>{service.service}</h2>
          <img src={service.img} alt={service.service} />
        </div>
      ))}
    </div>
  </div>
);

export default Services;
