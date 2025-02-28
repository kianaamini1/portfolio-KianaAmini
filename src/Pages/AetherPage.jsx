import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AetherPage.css';

export default function AetherPage() {
  const navigate = useNavigate();

  return (
    <div className="aether-page">
      <button className="back-button" onClick={() => navigate('/')}>← Back to Projects</button>

      <h1 className="aether-title">Aether: AI-Powered Form <br/>Management for Caregivers</h1>
      <p className="aether-subtitle">Empowering caregivers by simplifying complex paperwork with AI assistance</p>

      {/* Social & Blog Button */}
      <div className="social-links">
        {/* <a href="#" className="social-icon">🔗</a>
        <a href="#" className="social-icon">📷</a> */}
        <a href="https://aether-blog.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaYzceBAeJLT2as9YQ-a9pnVTOMfgcxXrSFQTJwSBnuttXQv0xoRac7qWtw_aem_xSBVadmMzs-1sq0ZfxxqXw" 
        className="blog-button" 
        target="_blank" 
        rel="noopener noreferrer">
          Visit Blog
          </a>
      </div>

   
      <div className="main-image-container">
        <img src="/images/aether-main.png" alt="Aether App Showcase" className="main-image" />
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
        <br />— Donna Thomson, family caregiver and author
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
      </div>

      <div className="content-section">
        <h2 className="section-title">Understanding the Problem</h2>
        <ul className="section-list">
          <li><strong>80%</strong> repeatedly re-enter the same information, making paperwork tedious.</li>
          <li><strong>68%</strong> struggle with unclear instructions, leading to delays and rejections.</li>
          <li><strong>50%</strong> miss deadlines due to administrative overload.</li>
          <li>Many still rely on printed forms with limited digital tools.</li>
          <li>Existing apps focus on storage, lacking AI guidance for complex paperwork.</li>
        </ul>
      </div>

      <div className="content-section">
        <h2 className="section-title">Product Vision & Solution</h2>
        <p className="section-text">Aether was designed with one mission: to clarify, summarize, and streamline the overwhelming process of form-filling for caregivers. By leveraging AI, Aether:</p>
        <ul className="checklist">
          <li> <strong>Clarifies </strong> &nbsp; complex terms</li>
          <li> <strong>Summarizes </strong> &nbsp; lengthy forms</li>
          <li> <strong>Streamlines </strong> &nbsp; the overall experience</li>
        </ul>
      </div>

      <div className="content-section">
        <h2 className="section-title">Building Aether: My Role and Impact</h2>
        <p className="section-text">As a Designer & Marketer, I collaborated with a team of nine designers and developers to refine Aether’s user experience and brand presence. My contributions included:</p>
        <ul className="section-list">
          <li><strong>Produced & Edited a Promotional Ad.</strong> Showcased Aether’s core features and benefits.</li>
          <li><strong>Managed Instagram Account.</strong> Developed and executed a content strategy to increase visibility.</li>
          <li><strong>Designed Prototypes to Improve UI/UX.</strong> Contributed to wireframes, user flows, and interactive designs.</li>
          <li><strong>Assisted in Brochure Design.</strong> Ensured a cohesive visual identity across branding materials.</li>
        </ul>
      </div>

      <div className="content-section">
        <h2 className="section-title">Design Process</h2>
        <p className="section-text"><strong>Designing with Clarity:</strong> Clarity is at the heart of our design philosophy, making every interaction intuitive and effortless.</p>
        <p className="section-text"><strong>Summarizing User Flow:</strong> Our design breaks complex navigation into easy steps, making the app more comfortable to use.</p>
        <p className="section-text"><strong>Streamlining User Experience:</strong> We ensure that every action is direct and easy through streamlined navigation and clear steps.</p>
      </div>

      <div className="content-section">
        <h2 className="section-title">Marketing & Branding</h2>
        <ul className="section-list">
          <li>Promotional Video Production – Took charge of editing and post-production.</li>
          <li>Social Media Management – Curated and scheduled content for Instagram.</li>
          <li>Designed Brochures</li>
        </ul>
      </div>
      <div className="content-section">
        <h2 className="section-title">Aether Promotional Video</h2>
        <p className="section-text">Our team decided on a humorous concept for the Aether promo video. While I had creative differences, wanting a more heartfelt and emotional approach to connect with the audience, I was excited to take charge of editing and production. I have a passion for videography and saw this as an opportunity to learn and gain more hands-on experience. I believe I have a strong creative vision when it comes to filming and storytelling, which drove me to give my best effort in bringing the team’s vision to life.</p>
        <p className="section-text">I worked closely with my instructor to enhance the audio quality and refine production techniques. I used Adobe Premiere Pro to edit and structure the video, ensuring smooth pacing and flow. One of my teammates contributed additional motion graphics in After Effects to add extra flair.</p>
        <p className="section-text">
        This project taught me valuable lessons in collaboration, compromise, and execution. While the final result wasn’t how I originally envisioned it, the experience strengthened my editing, directing, and production skills, reaffirming my passion for creating impactful video content.</p>
      </div>
    </div>
  );
}
