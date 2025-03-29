import React, { useState } from "react";
import Header from "../components/Header";
import "./Photography.css"; 

import cameraImage from '../assets/images/camera.png';

// Import images with correct paths
import image1 from '../assets/images/ains.png';
import image2 from '../assets/images/flowers.png';
import image3 from '../assets/images/inspire.png';
import image4 from '../assets/images/izzy.png';
import image5 from '../assets/images/izzy1.png';
import image6 from '../assets/images/ruby.png';
import image7 from '../assets/images/snow.png';
import image8 from '../assets/images/snow2.png';
import image9 from '../assets/images/stairs.png';
import image10 from '../assets/images/sugar.png';

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10
];

export default function Photography() {
  const [showGallery, setShowGallery] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleClick = () => {
    setShowGallery(true);
  };

  const handleImageClick = (image) => {
    setModalImage(image);  
  };

  const handleCloseModal = () => {
    setModalImage(null);    
  };

  return (
    <div className="photography-page">
      <Header />
    
      <div className="camera-container">
        {!showGallery ? (
          <div className="camera">
            <img
              src={cameraImage} 
              alt="Camera"
              className="camera-img"
              onClick={handleClick}
            />
            <h2 className="take-photo-header">Take a Photo!</h2> 
          </div>
        ) : (
          <div className="gallery-container">
            <div className="circle-gallery">
              {images.map((image, index) => (
                <div key={index} className="circle-item" onClick={() => handleImageClick(image)}>
                  <img src={image} alt={`Gallery ${index}`} className="circle-image" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {modalImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={modalImage} alt="Large view" className="modal-image" />
        </div>
      )}
    </div>
  );
}
