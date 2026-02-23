 import React from 'react';
/* লোগোগুলো ইমপোর্ট করা হচ্ছে */
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiVite } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: '#E34F26' },
    { name: "CSS3", icon: <FaCss3Alt />, color: '#1572B6' },
    { name: "JavaScript", icon: <FaJsSquare />, color: '#F7DF1E' },
    { name: "React", icon: <FaReact />, color: '#61DAFB' },
    { name: "Tailwind", icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: "Vite", icon: <SiVite />, color: '#646CFF' },
    { name: "Firebase", icon: <SiFirebase />, color: '#FFCA28' },
    { name: "GitHub", icon: <FaGithub />, color: '#181717' },
  ];

  return (
    <section id="skills" className="section-card">
      <h2 className="highlight" style={{ marginBottom: '25px' }}>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {/* এখানে skill.color ব্যবহার করে লোগোর আসল রঙ দেওয়া হচ্ছে */}
            <span className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;