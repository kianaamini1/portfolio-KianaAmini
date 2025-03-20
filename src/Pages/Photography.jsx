import React, { useState } from "react";
import Header from "../components/Header";
import "./Photography.css";

import cameraImage from '../assets/images/camera.png';

const images = [
  "#FF5733", "#33FF57", "#3357FF", "#FFD700", "#FF33A8",
  "#8A2BE2", "#FF4500", "#228B22", "#1E90FF", "#DC143C"
];

export default function Photography() {
  const [showGallery, setShowGallery] = useState(false);
  const [showRainGallery, setShowRainGallery] = useState(false); 


  const handleClick = () => {
    setShowGallery(true); 
  };

  const handleToggleGallery = () => {
    setShowRainGallery(!showRainGallery); 
  };

  return (
    <div>
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
            <div className="arrow">↓</div>
            {/* <div className="click">Click the camera button</div> */}
          </div>
        ) : (
          <div className="gallery-container">
            <button onClick={handleToggleGallery} className="toggle-button">
              {showRainGallery ? 'Switch to 3D Circle Gallery' : 'Switch to Rain Gallery'}
            </button>

            {showRainGallery ? (
              <div className="rain-gallery">
                
                {images.map((color, index) => (
                  <div key={index} className="falling-photo">
                    <div style={{ backgroundColor: color }}></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="circle-gallery">
                
                {images.map((color, index) => (
                  <div key={index} className="circle-item" style={{ backgroundColor: color }} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
