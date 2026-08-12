import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Arun Narwade. All Rights Reserved.</p>
      <button onClick={scrollToTop} className="top-btn" aria-label="Back to top">
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  );
}