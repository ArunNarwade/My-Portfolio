import React from 'react';

const timelineData = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Blowiz pvt. ltd. CHH. SambhajiNagar',
    period: '2025 - Present',
    desc: 'Building responsive web interfaces, optimizing UI performance, and working with modern frontend stacks including React and CSS Frameworks.'
  },
  {
    id: 2,
    role: 'Web Development Trainee',
    company: 'Infinova Consaltants CHH. SambhajiNagar',
    period: '2025 - 2026',
    desc: 'Using React frontend principles (HTML5, CSS3, JavaScript), DOM manipulation, dynamic web layout engineering, and Git workflows.'
  }
];

export default function Experience() {
  return (
    <section className="timeline-section fade-in-element" id="experience">
      <div className="project-section-header">
        <h2 className="project-section-title">Experience & Roadmap</h2>
      </div>

      <div className="timeline">
        {timelineData.map((item) => (
          <div className="timeline-item" key={item.id}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}