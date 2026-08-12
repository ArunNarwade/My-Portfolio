import React, { useEffect, useState } from 'react';

const techSkills = [
  { name: 'HTML', percentage: 95, iconClass: 'fa-brands fa-html5', keyClass: 'html' },
  { name: 'CSS', percentage: 90, iconClass: 'fa-brands fa-css3-alt', keyClass: 'css' },
  { name: 'JavaScript', percentage: 85, iconClass: 'fa-brands fa-js', keyClass: 'js' },
  { name: 'React', percentage: 90, iconClass: 'fa-brands fa-react', keyClass: 'react' },
  { name: 'Angular', percentage: 85, iconClass: 'fa-brands fa-python', keyClass: 'python' }
];

const profSkills = [
  { title: 'Creativity', category: 'HTML', dataSkill: 95 },
  { title: 'Communication', category: 'CSS', dataSkill: 90 },
  { title: 'Problem Solving', category: 'JavaScript', dataSkill: 85 },
  { title: 'Teamwork', category: 'Teamwork', dataSkill: 90 }
];

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const circumference = 339.292;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skillss" className="skillls fade-in-element">
      <div className="skills-container">
        <h2>Technical Skills</h2>
        {techSkills.map((skill) => (
          <div className="skill" key={skill.keyClass}>
            <div className="skill-name">
              {skill.name} <i className={skill.iconClass}></i>
            </div>
            <h4>{skill.percentage}%</h4>
            <div className="progress-bar">
              <div 
                className={`progress ${skill.keyClass}`} 
                style={{ width: animated ? `${skill.percentage}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="progress-container fade-in-element">
        <h2>Professional Skills</h2>
        
       
        <div className="circles-grid">
          {profSkills.map((item, index) => {
            const offset = circumference - (item.dataSkill / 100) * circumference;

            return (
              <div className="circle" key={index} data-skill={item.dataSkill}>
                <svg className="circle-svg" viewBox="0 0 120 120" width="100" height="100">
                  <circle className="circle-bg" cx="60" cy="60" r="54" />
                  <circle 
                    className="circle-progress" 
                    cx="60" 
                    cy="60" 
                    r="54" 
                    style={{
                      strokeDasharray: circumference,
                      strokeDashoffset: animated ? offset : circumference
                    }}
                  />
                </svg>
                <h3 className="skill-name">{item.title}</h3>
                <div className="skill-text">{item.dataSkill}%</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}