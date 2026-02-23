 import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section-card">
      <h2 style={{ marginBottom: '25px' }}>Selected Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '20px' }}>
          <h3 style={{ fontSize: '1.3rem' }}>Personal Portfolio</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            A minimalist, card-based portfolio built with React and custom CSS.
          </p>
        </div>
        <div style={{ borderLeft: '4px solid var(--border)', paddingLeft: '20px' }}>
          <h3 style={{ fontSize: '1.3rem' }}>MU COURSE PLOT</h3> 
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
             A web application for visualizing and managing university course schedules.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;