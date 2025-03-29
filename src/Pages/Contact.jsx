import React from "react";
import Header from "../components/Header";
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <Header /> 
      <div className="contact-content">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-info">
          <p className="contact-text">Feel free to reach out for any inquiries, collaborations, or just to connect!</p>

          <div className="contact-links">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:kianaamini.design@gmail.com" className="contact-link">
                kianaamini.design@gmail.com
              </a>
            </div>
            
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/kiana-amini-053ka/" target="_blank" rel="noopener noreferrer" className="contact-link">
                www.linkedin.com/in/kiana-amini-053ka
              </a>
            </div>
            
            <div className="contact-item">
              <h3>Photography</h3>
              <a href="https://www.instagram.com/in.stillmotion/" target="_blank" rel="noopener noreferrer" className="contact-link">
                @in.stillmotion
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

