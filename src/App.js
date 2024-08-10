import React, { useEffect, useState } from 'react';
import me from './menu-con.jpg';
import CyberFirstLogo from './CyberFirst_logo.jpg';

import BTLogo from './BT_logo.jpg';
import MicrosoftLogo from './Microsoft_logo.jpg';
import QinetiQLogo from './QinetiQ_logo.jpg';
/*import Imperial_College from './Imperial_College.jpg';*/

import './App.css';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 2000; // Duration in milliseconds (2 seconds)
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * percent);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }
};

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
      description = 'Sponsered by the CyberFirst Bursary Scheme throught University.';
      break;
    case 'BT':
      description = 'Developed Security Tooling as a Intern Software Engineer @ BT.';
      break;
    case 'Microsoft':
      description = 'Cloud Solution Architect Intern @ Microsoft UK';
      break;
    case 'QinetiQ':
      description = 'Deployed AI/ML Solutions in multiple projects as a FDSE @ QinetiQ.';
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
            <a href="#portfolio" onClick={() => scrollToSection('programming-projects')}>
              <i className="fas fa-wrench"></i> Projects
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
            <div id="programming-projects" className="resume-button">
              <button onClick={() => window.open('./Ethan_Smith_CV.pdf', '_blank')}>
              Resume <i className="fas fa-newspaper"></i>
              </button>
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
        <h2>Work in progress 🤖 Hold tight!</h2>
        <p>This page is still a work in progress! To see my projects go to my GitHub for now!</p>
      </div>
    </div>
  );
}

export default App;
