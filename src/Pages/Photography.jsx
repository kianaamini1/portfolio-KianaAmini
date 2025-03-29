import React, { useState } from "react";
import Header from "../components/Header";
import "./Photography.css"; 

import cameraImage from '../assets/images/camera.png';

const images = [
  "https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300",
  "https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300",
  "https://via.placeholder.com/300", "https://via.placeholder.com/300", "https://via.placeholder.com/300",
  "https://via.placeholder.com/300"
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
