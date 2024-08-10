import React, { useEffect, useState } from 'react';
import me from './menu-con.jpg';
import CyberFirstLogo from './CyberFirst_logo.jpg';

import BTLogo from './BT_logo.jpg';
import MicrosoftLogo from './Microsoft_logo.jpg';
import QinetiQLogo from './QinetiQ_logo.jpg';
/*import Imperial_College from './Imperial_College.jpg';*/

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

const CompanyDescription = ({ hoveredCompany }) => {
  let description = '';

  switch (hoveredCompany) {
    case 'CyberFirst':
      description = 'At CyberFirst, I worked on developing secure applications...';
      break;
    case 'BT':
      description = 'At BT, I was involved in network infrastructure projects...';
      break;
    case 'Microsoft':
      description = 'During my time at Microsoft, I contributed to software development...';
      break;
    case 'QinetiQ':
      description = 'At QinetiQ, I was part of a team working on defense technologies...';
      break;
    default:
      description = '';
  }

  return (
    <div className={`company-description ${hoveredCompany ? 'visible' : ''}`}>
      {description && <p>{description}</p>}
    </div>
  );
};


function App() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCompany, setHoveredCompany] = useState(null);

  const handleMouseEnter = (company) => {
    setHoveredCompany(company);
  };

  const handleMouseLeave = () => {
    setHoveredCompany(null);
  };

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
  const endColor = [240, 240, 240]; // #fafafa in RGB
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
            <img
              src={CyberFirstLogo}
              alt="CyberFirst"
              className="logo"
              onMouseEnter={() => handleMouseEnter('CyberFirst')}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src={BTLogo}
              alt="BT"
              className="logo"
              onMouseEnter={() => handleMouseEnter('BT')}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src={MicrosoftLogo}
              alt="Microsoft"
              className="logo"
              onMouseEnter={() => handleMouseEnter('Microsoft')}
              onMouseLeave={handleMouseLeave}
            />
            <img
              src={QinetiQLogo}
              alt="QinetiQ"
              className="logo"
              onMouseEnter={() => handleMouseEnter('QinetiQ')}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          {/* Display the description below the logos */}
          <CompanyDescription hoveredCompany={hoveredCompany} />
          {/* Add Resume Button Below Logos */}
          <div className="resume-button">
            <button onClick={() => window.open('./Ethan_Smith_CV.pdf', '_blank')}>Resume</button>
          </div>
          <div className="divider"></div>
          <div className="typing-section">
            <TypingEffect text="Programming Projects" scrollY={scrollY} startScroll={20} />
          </div>
          <div className="divider"></div>
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
