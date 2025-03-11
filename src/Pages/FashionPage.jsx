import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FashionPage.css';

export default function FashionPage() {
  const navigate = useNavigate();

  return (
    <div className="fashion-page">
      <button className="back-button" onClick={() => navigate('/')}>← Back to Projects</button>

      <h1 className="fashion-title">Fashion Photography</h1>
      <p className="fashion-description">
        Directed and executed a photoshoot to highlight a designer’s (<strong>Isabella Hill</strong>) portfolio, capturing 
        designs with precision and creativity. Edited and composed shots to effectively communicate the designer's vision and 
        brand identity using Photoshop.
      </p>

      {/* Social Links */}
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/kianaamini" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/kianaamini" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Photography Grid */}
      <div className="fashion-gallery">
        <img src="/images/photo1.jpg" alt="Fashion Shot 1" className="fashion-image" />
        <img src="/images/photo5.jpg" alt="Fashion Shot 2" className="fashion-image" />
        <img src="/images/photo10.jpg" alt="Fashion Shot 3" className="fashion-image" />
        <img src="/images/photo1.jpg" alt="Fashion Shot 4" className="fashion-image" />
        <img src="/images/photo1.jpg" alt="Fashion Shot 4" className="fashion-image" />
        <img src="/images/photo1.jpg" alt="Fashion Shot 4" className="fashion-image" />
        <img src="/images/photo1.jpg" alt="Fashion Shot 4" className="fashion-image" />
        <img src="/images/photo1.jpg" alt="Fashion Shot 4" className="fashion-image" />
        <img src="/images/photo1.jpg" alt="Fashion Shot 4" className="fashion-image" />
      </div>

      {/* <footer className="footer">
        <p>Email: <a href="mailto:kianaamini.design@gmail.com">kianaamini.design@gmail.com</a></p>
      </footer> */}
    </div>
  );
}
