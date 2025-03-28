import React from 'react';
import { useNavigate } from 'react-router-dom';
import BillieEilish from "../assets/images/Billie Eillish.jpg";
import BillieMockImage from '../assets/images/billie-mock.jpg'; 
import Header from '../components/Header'; 
import './BilliePage.css'; 

export default function BilliePage() {
  const navigate = useNavigate();

  return (
    <div className="billie-page">
      <Header />  

      <h1 className="billie-title">Hit Me Hard and Soft: Billie Eilish</h1>
      <p className="billie-description">
        A digital artwork inspired by <strong>Billie Eilish’s <em>Hit Me Hard and Soft</em> album</strong>. 
        This piece captures the album’s <strong>emotional depth</strong> through a surreal composition blending <strong>photography, textures, and color theory</strong>. 
        It expands upon the album cover’s visual narrative, imagining <strong>what happens after Billie’s fall into the water</strong>.
      </p>

      <div className="billie-image-container">
        <img src={BillieEilish} alt="Billie Eilish Poster" className="billie-main-image" />
      </div>

      <p className="billie-description">
        While the original cover shows Billie <strong>falling from a floating door</strong>, this artwork places her <strong>fully submerged</strong>, looking up at 
        the door and her past self still in freefall. The <strong>door remains above, unreachable</strong>, symbolizing an exit that no longer exists—representing 
        past experiences or emotions that cannot be undone.
        <br/><br/>
        The <strong>deep blue tones, cinematic lighting, and typography</strong> reinforce the dreamlike, introspective feeling of the album. This piece serves as 
        a <strong>tribute to Billie’s storytelling style</strong>, transforming the album’s themes of <strong>vulnerability, loss, and transformation</strong> into a new visual perspective.
      </p>

      <h2 className="section-title">Poster Displays</h2>
      <div className="poster-display">
        <img src={BillieMockImage} alt="Framed Poster" className="poster-image" />
        <img src={BillieMockImage} alt="Outdoor Billboard" className="poster-image" />
      </div>

      <footer className="footer">
        <p>Email: Kianaamini.design@gmail.com</p>
      </footer>
    </div>
  );
}
