import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HughesPage.css'; 

export default function HughesPage() {
  const navigate = useNavigate();

  return (
    <div className="hughes-page">
  
      <button className="back-button" onClick={() => navigate('/')}>← Back to Projects</button>

      <h1 className="hughes-title">Our Captain: Quinn Hughes</h1>
      <p className="hughes-description">
        A digital artwork celebrating Quinn Hughes, captain of the Vancouver Canucks. This piece captures Hughes' leadership, talent, and impact through a modern collage blending photography, typography, and graphic elements.
      </p>

      
      <div className="hughes-image-container">
        <img src="/images/Hughes.jpg" alt="Quinn Hughes Poster" className="hughes-main-image" />
      </div>

      <h2 className="section-title">Poster Displays</h2>
      <div className="poster-display">
        <img src="/images/hughes-mock.png" alt="Poster Frame" className="poster-image" />
        <img src="/images/ad.jpg" alt="Outdoor Display" className="poster-image" />
      </div>

      <footer className="footer">
        <p>Email: Kianaamini.design@gmail.com</p>
      </footer>
    </div>
  );
}
