 import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education'; // ১. এটি ইমপোর্ট করেছেন তো?
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio-wrapper">
      <Navbar />
      <main className="app-container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education /> {/* ২. এটি এখানে যোগ করা আছে তো? */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;