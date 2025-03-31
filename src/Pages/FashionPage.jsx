import React from 'react';
import { useNavigate } from 'react-router-dom';
import Photo1 from '../assets/images/photo1.jpg';
import Photo5 from '../assets/images/photo5.jpg';
import Photo10 from '../assets/images/photo10.jpg';
import BackImage from '../assets/images/back.png';
import GemmaImage from '../assets/images/gemma.png';
import Gemma3Image from '../assets/images/gemma3.png';
import GreenImage from '../assets/images/green.png';
import IceCream1Image from '../assets/images/icecrem1.png';
import MeltImage from '../assets/images/melt.png';
import Melt2Image from '../assets/images/melt2.png';
import HandImage from '../assets/images/hand.png';
import ShoesImage from '../assets/images/shoes.png';
import SkyImage from '../assets/images/sky.png';
import TrackImage from '../assets/images/track.png';
import Header from '../components/Header';
import './FashionPage.css';

export default function FashionPage() {
  const navigate = useNavigate();

  return (
    <div className="fashion-page">
      <Header />

      <h1 className="fashion-title">Fashion Photography</h1>
      <p className="fashion-description">
        Directed and executed a photoshoot to highlight a designer’s (<strong>Isabella Hill</strong>) portfolio, capturing
        designs with precision and creativity. Edited and composed shots to effectively communicate the designer's vision and
        brand identity using Photoshop.
      </p>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/kianaamini" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/kianaamini" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="fashion-gallery">
        <img src={Photo1} alt="Fashion Shot 1" className="fashion-image" />
        <img src={Photo5} alt="Fashion Shot 2" className="fashion-image" />
        <img src={Photo10} alt="Fashion Shot 3" className="fashion-image" />
      </div>

      <div className="fashion-gallery">
        <img src={BackImage} alt="Back Image" className="fashion-image" />
        <img src={GemmaImage} alt="Gemma Image" className="fashion-image" />
        <img src={Gemma3Image} alt="Gemma Image 3" className="fashion-image" />
      </div>

      <div className="fashion-gallery">
        <img src={GreenImage} alt="Green Image" className="fashion-image" />
        <img src={IceCream1Image} alt="Ice Cream Image" className="fashion-image" />
        <img src={MeltImage} alt="Melt Image" className="fashion-image" />
        <img src={Melt2Image} alt="Melt 2" className="fashion-image" />
        <img src={HandImage} alt="Hand Image" className="fashion-image" />
        <img src={ShoesImage} alt="Shoes Image" className="fashion-image" />
        <img src={SkyImage} alt="Sky Image" className="fashion-image" />
        <img src={TrackImage} alt="Track Image" className="fashion-image" />
      </div>

      <footer className="footer">
        <p>Email: Kianaamini.design@gmail.com</p>
      </footer>
    </div>
  );
}
