 import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaDownload } from 'react-icons/fa';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  return (
    <header className="section-card hero-container">
      
      <div className="hero-text">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Marjana Dipa</span>
        </h1>
        
        <p className="hero-subtitle">
          A Frontend Developer crafting clean, minimalist digital experiences and a Graphic Designer.
        </p>

      
        <div className="hero-btns" style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
          <a href="#contact" className="say-hello-btn">
            Hire Me
          </a>
          
        
          <a 
            href="/Resume.pdf" 
            download="Marjana_Dipa_Resume.pdf" 
            className="resume-btn"
          >
            <FaDownload style={{ marginRight: '8px' }} /> Download CV
          </a>
        </div>

        {/* সোশ্যাল আইকন */}
        <div className="social-icons">
          <a href="https://github.com/marjana052004" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://facebook.com/share/1Afni7xtEf/" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com/chy_marjanadipa" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
      </div>

      
      <div className="hero-image">
        <img src={profilePic} alt="Marjana" className="profile-img-large" />
      </div>
    </header>
  );
};

export default Hero;