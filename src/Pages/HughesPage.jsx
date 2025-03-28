import React from 'react';
import HughesImage from '../assets/images/Hughes.jpg'; 
import HughesMockImage from '../assets/images/hughes-mock.png'; 
import AdImage from '../assets/images/ad.jpg';
import Header from '../components/Header';  
import './HughesPage.css'; 

export default function HughesPage() {
  return (
    <div className="hughes-page">
      
      <Header />

      <h1 className="hughes-title">Our Captain: Quinn Hughes</h1>
      <p className="hughes-description">
        A digital artwork celebrating Quinn Hughes, captain of the Vancouver Canucks. This piece captures Hughes' leadership, talent, and impact through a modern collage blending photography, typography, and graphic elements.
      </p>

      <div className="hughes-image-container">
        <img src={HughesImage} alt="Quinn Hughes Poster" className="hughes-main-image" />
      </div>

      <h2 className="section-title">Poster Displays</h2>
      <div className="poster-display">
        <img src={HughesMockImage} alt="Poster Frame" className="poster-image" />
        <img src={AdImage} alt="Outdoor Display" className="poster-image" />
      </div>

      <footer className="footer">
        <p>Email: Kianaamini.design@gmail.com</p>
      </footer>
    </div>
  );
}
