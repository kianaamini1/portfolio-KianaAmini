import React from 'react';
import './CanaVinoPage.css'; 

const CanaVinoPage = () => {
  return (
    <div className="canaVino-container">
      <h1>CanaVino: Canned Label</h1>
      <p>Designed a beverage can label series that highlights the sophistication of canned wine. Developed three variations—red, white, and rosé—each featuring a clean, cohesive aesthetic that reflects the elegance of wine while maintaining a modern appeal. Balanced minimalism and refinement to create a strong brand identity and impactful shelf presence.</p>
      
      {/* Images section */}
      <div className="canaVino-images">
        <img src="/path/to/can-image-1.jpg" alt="CanaVino Red Wine Can" />
        <img src="/path/to/can-image-2.jpg" alt="CanaVino White Wine Can" />
        <img src="/path/to/can-image-3.jpg" alt="CanaVino Rosé Wine Can" />
      </div>
    </div>
  );
};

export default CanaVinoPage;
