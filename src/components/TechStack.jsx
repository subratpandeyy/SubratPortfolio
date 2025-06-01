import React from 'react';

const TechStack = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js',
    'Express.js', 'MongoDB', 'Git', 'GitHub',
    'Tailwind CSS', 'MySQL',
    'Python', 'Flask',
  ];

  return (
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
  );
};

export default TechStack;
