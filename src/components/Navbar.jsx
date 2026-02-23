import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <h2 className="logo">My Portfolio<span className="highlight">.</span></h2>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#contact">Contact</a></li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;