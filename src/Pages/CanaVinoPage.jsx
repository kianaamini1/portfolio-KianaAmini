import React from 'react';
import './CanaVinoPage.css'; 

// Import images
import mainCanImage from '../assets/images/main-can.png';
import redCanImage from '../assets/images/red.png';
import whiteCanImage from '../assets/images/white.png';
import roseCanImage from '../assets/images/rose.png';
import Header from '../components/Header'; 

const CanaVinoPage = () => {
  return (
    <div className="canavino-page">
   
      <Header />

      
      <h1 className="canavino-title">CanaVino: Canned Label</h1>
      <p className="canavino-description">
        Designed a beverage can label series that highlights the sophistication of canned wine. Developed three variations—red, white, and rosé—each featuring a clean, cohesive aesthetic that reflects the elegance of wine while maintaining a modern appeal. Balanced minimalism and refinement to create a strong brand identity and impactful shelf presence.
      </p>

    
      <div className="canavino-image-container">
        <img src={mainCanImage} alt="CanaVino Red Wine Can" className="canavino-main-image" />
      </div>

      
      <div className="can-label-display">
        <img src={redCanImage} alt="CanaVino Red Wine Can" className="can-label-image" />
        <img src={whiteCanImage} alt="CanaVino White Wine Can" className="can-label-image" />
        <img src={roseCanImage} alt="CanaVino Rosé Wine Can" className="can-label-image" />
      </div>

     
      <footer className="footer">
        <p>Email: Kianaamini.design@gmail.com</p>
      </footer>
    </div>
  );
};

export default CanaVinoPage;
