import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <span className="logo">LOGO</span>
        </div>
        <h1 className="header-title">Kiana Amini | Graphic Designer & Marketer</h1>
        <nav className="nav-menu">
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/work" className="nav-item">Projects</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </nav>
      </div>

  
      <div className="scroll-down">
        <span>See Projects</span>
        <div className="arrow-down">↓</div>
      </div>
    </header>
  );
}
