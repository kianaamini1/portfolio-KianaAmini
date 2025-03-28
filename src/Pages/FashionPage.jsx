import React from 'react';
import { useNavigate } from 'react-router-dom';
import Photo1 from '../assets/images/photo1.jpg';  
import Photo5 from '../assets/images/photo5.jpg';  
import Photo10 from '../assets/images/photo10.jpg'; 
import Header from '../components/Header';  
import './FashionPage.css';

export default function FashionPage() {
  const navigate = useNavigate();

  return (
    <div className="fashion-page">
      <Header />  

      <h1 className="fashion-title">Fashion Photography</h1>
      <p className="fashion-description">
        Directed and executed a photoshoot to highlight a designer’s (<strong>Isabella Hill</strong>) portfolio, capturing 
        designs with precision and creativity. Edited and composed shots to effectively communicate the designer's vision and 
        brand identity using Photoshop.
      </p>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/kianaamini" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/kianaamini" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="fashion-gallery">
        <img src={Photo1} alt="Fashion Shot 1" className="fashion-image" />
        <img src={Photo5} alt="Fashion Shot 2" className="fashion-image" />
        <img src={Photo10} alt="Fashion Shot 3" className="fashion-image" />
        <img src={Photo1} alt="Fashion Shot 4" className="fashion-image" />
        <img src={Photo1} alt="Fashion Shot 5" className="fashion-image" />
        <img src={Photo1} alt="Fashion Shot 6" className="fashion-image" />
        <img src={Photo1} alt="Fashion Shot 7" className="fashion-image" />
        <img src={Photo1} alt="Fashion Shot 8" className="fashion-image" />
        <img src={Photo1} alt="Fashion Shot 9" className="fashion-image" />
      </div>
    </div>
  );
}
