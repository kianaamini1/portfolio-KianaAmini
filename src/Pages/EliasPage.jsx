import React, { useState } from 'react';
import EliasPetterssonImage from '../assets/images/elias-pettersson.png'; 
import PeteyMockImage from '../assets/images/petey-mock.png'; 
import BusImage from '../assets/images/bus.jpg'; 
import TeamImage from '../assets/images/team.jpg'; 
import Header from '../components/Header';  
import './EliasPage.css';  

export default function EliasPage() {
  const [modalImage, setModalImage] = useState(null); 

  const handleImageClick = (image) => {
    setModalImage(image); 
  };

  const handleCloseModal = () => {
    setModalImage(null); 
  };

  return (
    <div className="elias-page">
      <Header />

      <h1 className="elias-title">Elias Pettersson: Power and Precision</h1>
      <p className="elias-description">
        Created a striking poster of Elias Pettersson, inspired by his electrifying presence on the ice. The design features clean typography and bold visuals, capturing his energy and precision while resonating with Canucks fans. This project was created using Adobe Photoshop and Illustrator, emphasizing dynamic elements to celebrate Pettersson’s impact in the hockey world.
      </p>

      <div className="main-image-container">
        <img src={EliasPetterssonImage} alt="Elias Pettersson Poster" className="main-image" />
      </div>

      <div className="poster-display">
        <img 
          src={PeteyMockImage} 
          alt="Poster Frame" 
          className="poster-image" 
          onClick={() => handleImageClick(PeteyMockImage)} 
        />
        <img 
          src={BusImage} 
          alt="Street Display" 
          className="poster-image" 
          onClick={() => handleImageClick(BusImage)} 
        />
        <img 
          src={TeamImage} 
          alt="Second Poster Frame" 
          className="poster-image" 
          onClick={() => handleImageClick(TeamImage)} 
        />
      </div>

      {modalImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={modalImage} alt="Large view" className="modal-image" />
        </div>
      )}
    </div>
  );
}
