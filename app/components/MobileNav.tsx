'use client';

import { useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="hamburger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a href="/" onClick={() => setIsOpen(false)}>Home</a>
        <a href="/about" onClick={() => setIsOpen(false)}>About</a>
        <a href="/jobs" onClick={() => setIsOpen(false)}>Jobs</a>
        <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}
