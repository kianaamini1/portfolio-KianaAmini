import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DaydreamingPage.css';

export default function DaydreamingPage() {
  const navigate = useNavigate();

  return (
    <div className="daydreaming-page">
     
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Projects
      </button>

      <h1 className="daydreaming-title">Cover: Daydreaming-Single</h1>
      <p className="daydreaming-description">
        Edited cover of artist Marika Screpnek's new song <b>Daydreaming</b> using Photoshop to execute her vision.
      </p>

     <div className="social-icons">
  <a href="https://open.spotify.com/track/4wxfU2Zyt7uhn3T8nwOT8v?si=189a8ca205584cab" target="spotify" rel="Daydreaming">
    <i className="fab fa-spotify"></i>
  </a>
</div>

   
      <div className="main-image-container">
        <img src="/images/daydreaming.jpg" alt="Daydreaming Cover" className="main-image" />
      </div>

      
      <p className="edit-description">
        Modified the license plate to display the song title, applied minor overall touch-ups, and added the song title to the photo.
      </p>
    </div>
  );
}
