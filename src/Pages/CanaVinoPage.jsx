import React from 'react';
import './CanaVinoPage.css'; 

// Import images
import mainCanImage from '../assets/images/main-can.png';
import redCanImage from '../assets/images/red.png';
import whiteCanImage from '../assets/images/white.png';
import roseCanImage from '../assets/images/rose.png';
import Header from '../components/Header'; // Import Header

// New images for the bottom section (cans and labels)
import redDesign from '../assets/images/red-design.png';  // Red Wine Can design
import roseDesign from '../assets/images/rose-design.png';  // Rosé Wine Can design
import whiteDesign from '../assets/images/white-design.png';  // White Wine Can design

const CanaVinoPage = () => {
  return (
    <div className="canavino-page">
      {/* Include the Header */}
      <Header />

      {/* Title and Description Section */}
      <h1 className="canavino-title">CanaVino: Canned Label</h1>
      <p className="canavino-description">
        Designed a beverage can label series that highlights the sophistication of canned wine. Developed three variations—red, white, and rosé—each featuring a clean, cohesive aesthetic that reflects the elegance of wine while maintaining a modern appeal. Balanced minimalism and refinement to create a strong brand identity and impactful shelf presence.
      </p>

      {/* Image Section */}
      <div className="canavino-image-container">
        <img src={mainCanImage} alt="CanaVino Red Wine Can" className="canavino-main-image" />
      </div>

      {/* Label Display Section */}
      <div className="can-label-display">
        <img src={redCanImage} alt="CanaVino Red Wine Can" className="can-label-image" />
        <img src={whiteCanImage} alt="CanaVino White Wine Can" className="can-label-image" />
        <img src={roseCanImage} alt="CanaVino Rosé Wine Can" className="can-label-image" />
      </div>

      {/* New Section for Bottom Images */}
      <div className="bottom-can-images">
        <div className="additional-can-images">
          <img src={redDesign} alt="Red Wine Can Design" className="bottom-can-image" />
          <img src={roseDesign} alt="Rosé Wine Can Design" className="bottom-can-image" />
          <img src={whiteDesign} alt="White Wine Can Design" className="bottom-can-image" />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>Email: Kianaamini.design@gmail.com</p>
      </footer>
    </div>
  );
};

export default CanaVinoPage;
