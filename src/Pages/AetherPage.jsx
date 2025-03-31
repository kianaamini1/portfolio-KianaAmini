import React from 'react';
// import { useNavigate } from 'react-router-dom';
import AetherMockup from '../assets/images/Aether-mockup.png';
import Onboard from '../assets/images/Onboard-mockup.jpg';
import Header from '../components/Header'; 
import mockup1 from '../assets/images/mockup1.jpg';
import Design from '../assets/images/design-process.png';

import './AetherPage.css';

export default function AetherPage() {
  return (
    <div className="aether-page">
      <Header /> 

      <h1 className="aether-title">Aether: AI-Powered Form <br/>Management for Caregivers</h1>
      <p className="aether-subtitle">Empowering caregivers by simplifying complex paperwork with AI assistance</p>

      {/* Social & Blog Button */}
      <div className="social-links">
        <a href="https://aether-blog.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaYzceBAeJLT2as9YQ-a9pnVTOMfgcxXrSFQTJwSBnuttXQv0xoRac7qWtw_aem_xSBVadmMzs-1sq0ZfxxqXw" 
        className="blog-button" 
        target="_blank" 
        rel="noopener noreferrer">
          Visit Blog
        </a>
      </div>

      <div className="first-image">
      <img src={mockup1} alt="Aether App Showcase" className="main-image" />

      </div>

      <div className="content-section">
        <h2 className="section-title">Roles: Designer & Marketer</h2>
        <p className="section-text">
          UX/UI Design, Prototyping and testing, Branding, Marketing Strategy, User Research, Video Editing, Pitching.
        </p>
        <p className="section-text"><strong>Project Type:</strong> Conceptual AI-driven solution for underprivileged communities</p>
        <p className="section-text"><strong>Timeline:</strong> 3 months</p>
      </div>

      <blockquote className="quote">
        “Caregivers across Canada put their lives on hold to care ... We need to better ensure those who care are cared for too.”
        <br /> <br />— Donna Thomson, family caregiver and author
      </blockquote>

      <div className="content-section">
        <h2 className="section-title">Background</h2>
        <p className="section-text">
          Caregivers dedicate an average of 10–15 hours per week to managing critical forms, equating to nearly 30 full days per year spent on paperwork.
          This repetitive administrative burden leads to:
        </p>
        <ul className="section-list">
          <li>Increased stress from understanding legal terminology</li>
          <li>Time-consuming repetitive data entry</li>
          <li>Less time spent with loved ones due to excessive form management</li>
        </ul>
        <p className="section-text">Aether streamlines the paperwork process, helping caregivers save valuable time by reducing repetitive data entry, ensuring accurate form completion, and simplifying administrative tasks.</p>
        <img src={AetherMockup} alt="Aethermockup" className="mockup-image" />
      </div>

      <div className="content-section">
      <h2 className="section-title">Design Process</h2>
<p className="section-text">
  <strong>Designing with Clarity:</strong> At the heart of our design philosophy lies clarity. We believe that the simpler the interaction, the more accessible and empowering it is for the user. Our design choices prioritize intuitive navigation to remove barriers that might cause confusion or hesitation. Every element is thoughtfully crafted to ensure that users can focus on what truly matters—getting the job done quickly and efficiently.
</p>
<img src={Design} alt="Design Process" className="Design-image" />
<p className="section-text">
  <strong>Why This Design Approach:</strong> We intentionally embraced minimalism in our design to eliminate distractions and focus on providing a seamless user experience. By using clear visual hierarchies, concise language, and a simple interface, we ensure users feel confident and empowered, even when handling complex forms. This approach reduces cognitive overload and enhances the experience for caregivers who already face enough challenges.
</p>
<p className="section-text">
  <strong>Impact:</strong> The result is a design that doesn’t just look good, but works harmoniously with the user's needs. It promotes confidence, minimizes frustration, and helps users engage more effectively with the platform. Through this clear, intuitive design, we enable users to focus on their caregiving duties with less distraction and more peace of mind.
</p>

      </div>

      <div className="content-section">
        <h2 className="section-title">Marketing & Branding</h2>
        <ul className="section-list">
          <li>Promotional Video Production – Took charge of editing and post-production.</li>
          <li>Social Media Management – Curated and scheduled content for Instagram.</li>
          <li>Designed Brochures</li>
        </ul>
        <img src={Onboard} alt="Onboard" className="onboard-image" />
      </div>

      <div className="content-section">
        <h2 className="section-title">Aether Promotional Video</h2>
        <p className="section-text">Our team decided on a humorous concept for the Aether promo video. While I had creative differences, wanting a more heartfelt and emotional approach to connect with the audience, I was excited to take charge of editing and production.</p>
        <img src={Onboard} alt="Onboard" className="onboard-image" />
        <p className="section-text">This project taught me valuable lessons in collaboration, compromise, and execution. While the final result wasn’t how I originally envisioned it, the experience strengthened my editing, directing, and production skills, reaffirming my passion for creating impactful video content.</p>
      </div>
    </div>
  );
}
