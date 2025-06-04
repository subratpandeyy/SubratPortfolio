import React from 'react';
import RGBCard from './RGBCard';

const TechStack = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js',
    'Express.js', 'MongoDB', 'Git', 'GitHub',
    'Tailwind CSS','Motion', 'MySQL',
    'Python', 'Flask',
  ];

  return (
    <RGBCard>
    <section className="techstack-section">
      <h2 className="techstack-heading">Technologies I Work With</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span className="skill-badge" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </section>
    </RGBCard>
  );
};

export default TechStack;
