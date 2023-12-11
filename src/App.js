import me from './menu-con.jpg';
import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="container">
      <div className="profile-section">
        <img src={me} alt="Ethan Smith" className="profile-image" />
        <h1>Ethan Smith</h1>
        <p className="education">Computer Science at the University of Nottingham (BSc)</p>
      </div>
      <div className="social-media-links">
        <a href="https://www.linkedin.com/in/eethansmith/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://www.instagram.com/eethansmith/?hl=en" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://github.com/eethansmith" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </div>
  );
  
}

export default App;
