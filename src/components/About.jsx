 import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-card">
      <h2 className="highlight" style={{ marginBottom: '15px' }}>About Me</h2>
      <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '1.8' }}>
        I am a passionate <strong>Frontend Developer</strong> with a strong eye for design 
        and a commitment to building clean, user-friendly web interfaces. Currently, I am 
        honing my skills in <strong>React.js</strong> and modern CSS frameworks to 
        create digital experiences that are not only functional but also visually engaging. 
        I love solving problems through code and am always eager to learn new technologies.
      </p>
    </section>
  );
};

export default About;