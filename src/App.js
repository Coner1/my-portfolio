/* // App.js - Kang Wang - 301345391 -2024/5/29 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './styles/styles.css';

const App = () => (
  <Router>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path="/my-portfolio" element={<Home />} />
        <Route path="/my-portfolio/about" element={<About />} />
        <Route path="/my-portfolio/projects" element={<Projects />} />
        <Route path="/my-portfolio/services" element={<Services />} />
        <Route path="/my-portfolio/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    
  </Router>
);

export default App;
