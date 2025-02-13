import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EliasPage.css';  

export default function EliasPage() {
  const navigate = useNavigate();

  return (
    <div className="elias-page">
    
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Projects
      </button>

      <h1 className="elias-title">Elias Pettersson: Power and Precision</h1>
      <p className="elias-description">
      Created a striking poster of Elias Pettersson, inspired by his electrifying presence on the ice. The design features clean typography and bold visuals, capturing his energy and precision while resonating with Canucks fans. This project was created using Adobe Photoshop and Illustrator, emphasizing dynamic elements to celebrate Pettersson’s impact in the hockey world.
      </p>

      <div className="main-image-container">
        <img src="/images/elias-pettersson.png" alt="Elias Pettersson Poster" className="main-image" />
      </div>

    
      <div className="poster-display">
        <img src="/images/petey-mock.png" alt="Poster Frame" />
        <img src="/images/bus.jpg" alt="Street Display" />
        <img src="/images/team.jpg" alt="Second Poster Frame" />
      </div>
    </div>
  );
}
