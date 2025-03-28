import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/brown.png';
import '../index.css';

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logoImage} alt="Kiana Amini Logo" className="logo-image" />
        </div>
        <h1 className="header-name">Kiana Amini</h1>
        <h1 className="header-title">Graphic Designer & Marketer</h1>
        <nav className="nav-menu">
          <Link to="/About" className="nav-item">About</Link>
          {location.pathname.includes("/projects/") ? (
            <Link to="/" className="nav-item">Projects</Link>  
          ) : location.pathname === "/photography" ? (
            <Link to="/" className="nav-item">Projects</Link>  
          ) : (
            <Link to="/photography" className="nav-item">Photography</Link>  
          )}
          <Link to="/contact" className="nav-item">Contact</Link>
        </nav>
      </div>

      <div className="scroll-down">
        <div className="arrow-down">↓</div>
      </div>
    </header>
  );
}
