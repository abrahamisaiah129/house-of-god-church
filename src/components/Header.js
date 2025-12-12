'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          {/* Add your church logo here */}
          <span className="text-white fw-bold">HOUSEHOLD OF GOD CHURCH</span>
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                About
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">About Church</a></li>
                <li><a className="dropdown-item" href="#">Our Pastor</a></li>
                <li><a className="dropdown-item" href="#">Statement of Faith</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sermons</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Give</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-section">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}