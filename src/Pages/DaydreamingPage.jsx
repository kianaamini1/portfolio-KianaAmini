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
  This project is an <strong>edited cover design</strong> for artist <strong>Marika Screpnek's</strong> new song <em>Daydreaming</em>. 
  Using <strong>Photoshop</strong>, I helped execute the artist’s vision by enhancing the overall aesthetic while maintaining 
  the dreamy, sunlit atmosphere of the original image.
  </p>
     <div className="social-icons">
  <a href="https://open.spotify.com/track/4wxfU2Zyt7uhn3T8nwOT8v?si=189a8ca205584cab" target="spotify" rel="Daydreaming">
    <i className="fab fa-spotify"></i>
  </a>
</div>

   
      <div className="main-image-container">
        <img src="/images/daydreaming.jpg" alt="Daydreaming Cover" className="main-image" />
      </div>
      <p className="daydreaming-description">
      Key modifications include:
  <ul className="daydreaming-list">
    <li><strong>Customized the license plate</strong> to display the song title (<em>DAY-DRM</em>), subtly integrating it into the scene.</li>
    <li><strong>Applied minor touch-ups</strong> to enhance lighting, contrast, and the nostalgic, vintage-like feel of the cover.</li>
    <li><strong>Added the song title in a curved placement</strong>, complementing the composition without overpowering the focal point.</li>
  </ul>
  <br/>
  This design blends <strong>photo editing, typography, and visual storytelling</strong>, creating a cover that feels <strong>warm, 
  free-spirited, and evocative of the song’s theme.</strong>
</p>


    </div>
  );
}
