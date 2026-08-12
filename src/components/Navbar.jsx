import React, { useState } from 'react';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive(!isActive);
  const closeMenu = () => setIsActive(false);

  return (
    <header className="header">
      <a href="#" className="logo">PortFolio..</a>
      <div 
        className={`menu-toggle ${isActive ? 'active' : ''}`} 
        id="menu-toggle"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`navbar ${isActive ? 'active' : ''}`} id="navbar">
        <a href="#homee" style={{ '--i': 1 }} className="nav-link" onClick={closeMenu}>Home</a>
        <a href="#about" style={{ '--i': 2 }} className="nav-link" onClick={closeMenu}>About</a>
        <a href="#SRVC" style={{ '--i': 3 }} className="nav-link" onClick={closeMenu}>Services</a>
        <a href="#skillss" style={{ '--i': 4 }} className="nav-link" onClick={closeMenu}>Skills</a>
        <a href="#contactt" style={{ '--i': 5 }} className="nav-link" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}