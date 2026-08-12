import React from 'react';

export default function Services() {
  return (
    <section className="services-section fade-in-element" id="SRVC">
      <div className="project-section-header">
        <h2 className="project-section-title">Services we Provide</h2>
      </div>

      <div className="services-grid">
        <article className="service-card">
          <div className="service-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>
          <h3 className="service-card-title">Front-end Development</h3>
          <p className="service-card-desc">Building responsive web user interfaces optimized for speed, semantic rendering accessibility, and pixel-precise conversion transitions.</p>
          <ul className="services-features">
            <li className="service-feature-item">React / Next.js Architecture</li>
            <li className="service-feature-item">Tailwind CSS Custom Engineering</li>
            <li className="service-feature-item">Fluid Core Logic Web Interactions</li>
          </ul>
        </article>

        <article className="service-card">
          <div className="service-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V5.25m3 9c0 .517.13 1.003.361 1.432m12.778-1.432a3 3 0 013-3V5.25m-3 9c0 .517-.13 1.003-.36 1.432m-12.058 0A4.498 4.498 0 0012 18.75a4.498 4.498 0 004.161-2.924m-12.058 0A1.5 1.5 0 004.5 18a2.25 2.25 0 002.25 2.25h10.5A2.25 2.25 0 0019.5 18a1.5 1.5 0 00-1.398-1.174" />
            </svg>
          </div>
          <h3 className="service-card-title">Backend & Systems</h3>
          <p className="service-card-desc">Engineered APIs, schema distributions, and automated structural processing servers designed to run safely under heavy request flows.</p>
          <ul className="services-features">
            <li className="service-feature-item">Node.js Framework Environments</li>
            <li className="service-feature-item">Secure RESTful & GraphQL APIs</li>
            <li className="service-feature-item">Database Architecture Handling</li>
          </ul>
        </article>

        <article className="service-card">
          <div className="service-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
            </svg>
          </div>
          <h3 className="service-card-title">Content & Strategy</h3>
          <p className="service-card-desc">Producing deeply engaging technical videos, layout walkthroughs, and developer content designed to communicate features cleanly.</p>
          <ul className="services-features">
            <li className="service-feature-item">Video Editing & Technical Reviews</li>
            <li className="service-feature-item">Developer Brand Direction Consulting</li>
            <li className="service-feature-item">Product Documentation Engineering</li>
          </ul>
        </article>
      </div>
    </section>
  );
}