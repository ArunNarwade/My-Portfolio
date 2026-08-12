import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Photo Graphy',
    category: 'JavaScript',
    img: '/assets/photography.png',
    tags: ['HTML 5', 'JS'],
    desc: 'A modern, responsive photography portfolio showcasing galleries, services, and smooth interactive animations.',
    link: 'https://arunnarwade.github.io/PhotoGraphy/'
  },
  {
    id: 2,
    title: 'Food site',
    category: 'HTML/CSS',
    img: '/assets/Foodweb.png',
    tags: ['HTML 5', 'CSS'],
    desc: 'A responsive food ordering website featuring an elegant UI, interactive menus, and a seamless user experience.',
    link: 'https://arunnarwade.github.io/food-web/'
  },
  {
    id: 3,
    title: 'Finance Tracker',
    category: 'React',
    img: '/assets/Finance.png',
    tags: ['React Js', 'API'],
    desc: 'A React-based finance tracker for managing income, expenses, and budgets with an intuitive dashboard.',
    link: 'https://arunnarwade.github.io/Finance/'
  },
  {
    id: 4,
    title: 'Infinova Consultants',
    category: 'React',
    img: '/assets/Infinova.png',
    tags: ['React.js', 'UI/UX'],
    desc: 'Contributed to the Infinova Consultants website by developing responsive React components and enhancing the user interface.',
    link: 'https://www.infinovaglobal.org/'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section className="projects fade-in-element" id="projects">
      <div className="project-section-header">
        <h2 className="project-section-title">My Work</h2>
        <p className="project-section-subtitle">
          From front-end interactions to robust architectures: a look at my recent builds.
        </p>
        
        <div className="filter-container">
          {['All', 'React', 'JavaScript', 'HTML/CSS'].map((cat) => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active-filter' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-visual-box">
              <img src={project.img} alt={project.title} className="project-screenshot" />
            </div>
            <div className="project-content-box">
              <div className="project-meta">
                {project.tags.map((tag, idx) => (
                  <span className="project-tech-tag" key={idx}>{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-action-link">
                Explore Project <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}