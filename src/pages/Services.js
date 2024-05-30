// Services.js - Kang Wang - 301345391 -2024/5/29
import React from 'react';
import responsive from "../assets/responsive.png";
import devices from "../assets/devices.png";
import mobile from "../assets/mobile-application.png";
const services = [
  // img create by smalllikeart
  { service: 'Web Development', img: responsive},
  { service: 'Mobile App Development', img: mobile },
  { service: 'General Programming', img: devices },
];

const Services = () => (
  <div className="container">
    <h1>Services</h1>
    <div className="services">
      {services.map((service, index) => (
        <div key={index} className="service">
          <h2>{service.service}</h2>
          <img src={service.img} alt={service.service} width={50}/>
        </div>
        
      ))}
    </div>
  </div>
);

export default Services;
