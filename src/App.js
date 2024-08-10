import React, { useEffect, useState } from 'react';
import me from './menu-con.jpg';
import CyberFirstLogo from './CyberFirst_logo.jpg';
import NottinghamLogo from './Nottingham_logo.jpg';
import BTLogo from './BT_logo.jpg';
import MicrosoftLogo from './Microsoft_logo.jpg';
import QinetiQLogo from './QinetiQ_logo.jpg';
import Imperial_College from './Imperial_College.jpg';

import './App.css';

function TypingEffect({ text, scrollY, startScroll }) {
  const [displayedText, setDisplayedText] = useState(' ');

  useEffect(() => {
    if (scrollY >= startScroll) {
      const textLength = Math.min(Math.floor((scrollY - startScroll) / 20), text.length);
      setDisplayedText(text.slice(0, textLength));
    }
  }, [scrollY, startScroll, text]);

  return <h2>{displayedText}</h2>;
}

function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const interpolateColor = (startColor, endColor, factor) => {
    let result = startColor.slice();
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (endColor[i] - startColor[i]));
    }
    return `rgb(${result.join(',')})`;
  };

  const startColor = [26, 26, 26]; // #1a1a1a in RGB
  const endColor = [250, 250, 250]; // #fafafa in RGB
  const startFontColor = [250, 250, 250]; // #fafafa in RGB
  const endFontColor = [0, 0, 0]; // #000000 in RGB
  const factor = Math.min(scrollY / 600, 1); // adjust the denominator for sensitivity

  const backgroundColor = interpolateColor(startColor, endColor, factor);
  const fontColor = interpolateColor(startFontColor, endFontColor, factor);

  return (
    <div className="app" style={{ backgroundColor, color: fontColor }}>
      <header className="header">
        <div className="brand">
          eethansmith
        </div>
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

          <div className="logo-section">
            <img src={CyberFirstLogo} alt="CyberFirst" className="logo" />
            <img src={NottinghamLogo} alt="Nottingham" className="logo" />
            <img src={BTLogo} alt="BT" className="logo" />
            <img src={MicrosoftLogo} alt="Microsoft" className="logo" />
            <img src={QinetiQLogo} alt="QinetiQ" className="logo" />
          </div>
          <div className="divider"></div>
          <div className="typing-section">
              <TypingEffect text="Cyber First" scrollY={scrollY} startScroll={20} />
            </div>
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
