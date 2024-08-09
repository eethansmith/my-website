import React from 'react';
import me from './menu-con.jpg';
import CyberFirstLogo from './CyberFirst_logo.jpg';
import NottinghamLogo from './Nottingham_logo.jpg';
import BTLogo from './BT_logo.jpg';
import MicrosoftLogo from './Microsoft_logo.jpg';
import QinetiQLogo from './QinetiQ_logo.jpg';

import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a href="#portfolio">
                <i className="fas fa-briefcase"></i> Projects
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/eethansmith/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/eethansmith" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/eethansmith/?hl=en" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <div className="profile-section">
          <img src={me} alt="Ethan Smith" className="profile-image" />
          <h1>Ethan Smith</h1>
          <p className="education">Computer Science at the University of Nottingham</p>
        </div>
      </div>

      {/* This is the section that will be outside of the initial view */}
      <div className="below-the-fold">
        <h2>More Information</h2>
        <p>This content is initially out of view and requires scrolling to see.</p>
      </div>
    </div>
  );
}

export default App;
