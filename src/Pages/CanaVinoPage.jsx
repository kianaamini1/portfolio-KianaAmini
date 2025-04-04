import React, { useState } from 'react';
import './CanaVinoPage.css'; 
import mainCanImage from '../assets/images/main-can.png';
import redCanImage from '../assets/images/red.png';
import whiteCanImage from '../assets/images/white.png';
import roseCanImage from '../assets/images/rose.png';
import Header from '../components/Header'; 

import redDesign from '../assets/images/red-design.png'; 
import roseDesign from '../assets/images/rose-design.png';  
import whiteDesign from '../assets/images/white-design.png';  

const CanaVinoPage = () => {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (image) => {
    setModalImage(image); // Update the modal image state
  };

  const handleCloseModal = () => {
    setModalImage(null); // Close the modal by resetting the state
  };

  return (
    <div className="canavino-page">
      
      <Header />

      <h1 className="canavino-title">CanaVino: Canned Label</h1>
      <p className="canavino-description">
        Designed a beverage can label series that highlights the sophistication of canned wine. Developed three variations—red, white, and rosé—each featuring a clean, cohesive aesthetic that reflects the elegance of wine while maintaining a modern appeal. Balanced minimalism and refinement to create a strong brand identity and impactful shelf presence.
      </p>

      <div className="canavino-image-container">
        <img 
          src={mainCanImage} 
          alt="CanaVino Red Wine Can" 
          className="canavino-main-image"
          onClick={() => handleImageClick(mainCanImage)} 
        />
      </div>

      <div className="can-label-display">
        <img 
          src={redCanImage} 
          alt="CanaVino Red Wine Can" 
          className="can-label-image"
          onClick={() => handleImageClick(redCanImage)} 
        />
        <img 
          src={whiteCanImage} 
          alt="CanaVino White Wine Can" 
          className="can-label-image"
          onClick={() => handleImageClick(whiteCanImage)} 
        />
        <img 
          src={roseCanImage} 
          alt="CanaVino Rosé Wine Can" 
          className="can-label-image"
          onClick={() => handleImageClick(roseCanImage)} 
        />
      </div>

      <div className="bottom-can-images">
        <div className="additional-can-images">
          <img 
            src={redDesign} 
            alt="Red Wine Can Design" 
            className="bottom-can-image"
            onClick={() => handleImageClick(redDesign)} 
          />
          <img 
            src={roseDesign} 
            alt="Rosé Wine Can Design" 
            className="bottom-can-image"
            onClick={() => handleImageClick(roseDesign)} 
          />
          <img 
            src={whiteDesign} 
            alt="White Wine Can Design" 
            className="bottom-can-image"
            onClick={() => handleImageClick(whiteDesign)} 
          />
        </div>
      </div>

      {modalImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={modalImage} alt="Large view" className="modal-image" />
        </div>
      )}

      <footer className="footer">
        <p>Email: Kianaamini.design@gmail.com</p>
      </footer>
    </div>
  );
};

export default CanaVinoPage;
