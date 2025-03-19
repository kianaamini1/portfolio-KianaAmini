import React, { useState } from "react";
import Header from "../components/Header";
import "./Photography.css";

const images = [
  "#FF5733", "#33FF57", "#3357FF", "#FFD700", "#FF33A8",
  "#8A2BE2", "#FF4500", "#228B22", "#1E90FF", "#DC143C"
];

export default function Photography() {
  const [showGallery, setShowGallery] = useState(false);
  
  const handleClick = () => {
    setShowGallery(true); // Show gallery and hide camera
  };

  return (
    <div>
      <Header />
    

      <div className="camera-container">
        {!showGallery ? (
          <div className="camera">
            <div className="lens"></div>
            <button onClick={handleClick} className="shutter-btn">📸</button>
          </div>
        ) : (
          <div className="gallery-container">
            <div className="gallery">
              {images.map((color, index) => (
                <div key={index} className="gallery-item" style={{ backgroundColor: color }}>
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
