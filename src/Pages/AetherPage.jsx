import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AetherPage.css'; 

export default function AetherPage() {
  const navigate = useNavigate();

  return (
    <div className="aether-page">
  
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Projects
      </button>

      <h1 className="aether-title">Aether Designer/Marketer</h1>
      <p className="aether-description">
      Aether is an AI-powered app designed to assist caregivers in managing and completing essential forms efficiently. By leveraging AI, Aether simplifies complex forms, provides auto-fill suggestions, and ensures all required fields are completed accurately. The app’s user-friendly interface helps reduce the stress of form-related tasks, allowing caregivers to focus more on their clients’ needs.
      </p>

      <div className="blog-button-container">
         <button className="visit-blog-button" onClick={() => window.open('https://aether-blog.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaYzceBAeJLT2as9YQ-a9pnVTOMfgcxXrSFQTJwSBnuttXQv0xoRac7qWtw_aem_xSBVadmMzs-1sq0ZfxxqXw', 'Aether Blog')}>
             Visit Blog
             </button>
             </div>

      <div className="aether-images">
        <img src="/images/homepage-app.jpg" alt="Aether App 1" />
        <img src="/images/Onboard-mockup.jpg" alt="Aether App 2" />
        <img src="/images/my files-app.jpg" alt="Aether App 3" />
      </div>

      <h2 className="section-title">Problem Identification</h2>
      <p className="section-text">
      Managing critical forms and documents is a major burden for caregivers, consuming up to 10-15 hours per week. Over a year, this adds up to nearly 30 days spent away from providing care and emotional support. This growing challenge underscores the need for a streamlined, technology-driven solution to reduce administrative stress and improve caregiving efficiency.
      </p>
      <img src="/images/Aether-mockup.png" alt="Aether Mockup" className='problem-image' />


      <h2 className="section-title">Persona</h2>
      <img src="/images/persona.png" alt="Persona" className='persona' />


      <h2 className="section-title">Solution</h2>
      <p className="section-text">
      Aether is an AI-powered mobile app designed to streamline form management for caregivers. It automates tasks like scanning, auto-filling, and organizing essential documents, reducing the administrative burden. By providing secure storage,  and intuitive guides for complex forms, Aether empowers caregivers to save time, stay organized, and focus on providing care and emotional support.
      </p>


      <h2 className="section-title">Architecture</h2>
      <p className="section-text">
      Aether was designed with a user-friendly, modern interface, featuring key tools like document scanning, auto-fill, and reminders to create a seamless and efficient experience for caregivers.
      </p>
      <img src="/images/prototype.png" alt="Prototype" className='prototype' />


      <h2 className="section-title">Roles: Designer & Marketer</h2>
      <ul className="roles-list">
        <li>Produced and edited a promotional ad</li>
        <li>Managed Instagram Aether's account</li>
        <li>Designed prototypes to improve UI/UX</li>
        <li>Assisted in brochure design for cohesive branding</li>
        <li>Presented at annual Student Design and Tech Showcase 2024</li>
      </ul>

      <h2 className="section-title">Design and Marketing Process</h2>
      <img src="/images/design-process.png" alt="Design Process" className='design-process' />

      <h2 className="section-title">Promotional Video</h2>
      <p className="section-text-ad">
      Our team decided on a more playful and humorous concept for the Aether promo video. While I had creative differences, wanting a more heartfelt and emotional approach to connect with the audience, I was excited to take charge of editing and production. I have a passion for videography and saw this as an opportunity to learn and gain more hands-on experience. I believe I have a strong creative vision when it comes to filming and storytelling, which drove me to give my best effort in bringing the team’s vision to life.
      </p>
      <p className="section-text-ad" >I worked closely with my instructor to enhance the audio quality and refine production techniques. I used Adobe Premiere Pro to edit and structure the video, ensuring smooth pacing and flow. One of my teammates contributed additional motion graphics in After Effects to add extra flair.</p>
      <p className="section-text-ad">This project taught me valuable lessons in collaboration, compromise, and execution. While the final result wasn’t how I originally envisioned it, the experience strengthened my editing, directing, and production skills, reaffirming my passion for creating impactful video content.</p>
      <div className="video-container">
        <video controls>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
