import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-card">
      <h2 className="highlight" style={{ marginBottom: '10px' }}>Contact Me</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
        I'm currently looking for new opportunities. My inbox is always open!
      </p>

      <div className="contact-grid">
        {/* Email */}
        <div className="contact-info-card">
          <div className="contact-icon-box">
            <FaEnvelope />
          </div>
          <div className="contact-text">
            <h4>Email</h4>
            <p>dipachowdhury63813562@email.com</p> 
          </div>
        </div>

        {/* Phone */}
        <div className="contact-info-card">
          <div className="contact-icon-box">
            <FaPhoneAlt />
          </div>
          <div className="contact-text">
            <h4>Phone</h4>
            <p>+880 1714911417</p>
          </div>
        </div>

        {/* Location */}
        <div className="contact-info-card">
          <div className="contact-icon-box">
            <FaMapMarkerAlt />
          </div>
          <div className="contact-text">
            <h4>Location</h4>
            <p>Sylhet, Bangladesh</p>
          </div>
        </div>
      </div>

      
      <div style={{ marginTop: '40px' }}>
        <a href="dipachowdhury63813562@email.com" className="say-hello-btn">
          <FaPaperPlane /> Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;