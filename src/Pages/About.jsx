import React from "react";
import Header from "../components/Header"; 
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <Header /> 
      <div className="content-section">
        <h1 className="about-title">About</h1>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi! I’m Kiana, a second-year Digital Design and Development student at BCIT, passionate about graphic design, marketing, cinematography, and photography. I love bringing ideas to life—whether it’s shaping a brand identity, crafting engaging visuals, or capturing moments through storytelling.
            </p>
            <p>
              I’m currently looking for a graphic design or marketing internship for April 2025, where I can apply my skills while continuing to learn and refine my craft. I’m always looking for new challenges and opportunities to push my creativity further.
            </p>
            <p>
              For me, design isn’t just about making things look good—it’s about communication, connection, and impact. Whether through branding, photography, or marketing, I strive to create work that resonates and leaves a lasting impression.
            </p>
            <p>
              Let’s connect! I’d love to collaborate, share ideas, and grow alongside other creatives.
            </p>
            <p>Email: kianaamini.design@gmail.com</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/kiana-amini-053ka" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/kiana-amini-053ka</a></p>
          </div>
          <div className="about-photo">
            <img src="/images/kiana-photo.jpg" alt="Kiana Amini" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
