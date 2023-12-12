import React from 'react';
import './Timeline.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext


const Timeline = () => {
  const { isDarkMode } = useDarkMode(); // Get the dark mode status

  return (
      <div className={`content ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className={`timeline-title ${isDarkMode ? 'dark-mode' : ''}`}>Jinsei Corp Product Timeline</div>
        <div className="button-container">
        <Link to="/prototype" className="dark-button">
          Luciano
        </Link>
          <a className="dark-button">
            Contact: henrik@jinsei.ai
          </a>

        </div>
        <div className="timelinePosition">
          <iframe
            src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1X7czOi6_A1kLPb24lBL4zvj6n8RFiDaG-QrPFtSyJy0&font=Default&lang=en&initial_zoom=.5&height=600"
            height="500"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            frameBorder="0"
          ></iframe>
        </div>
        <div className="button-container2">
          <a
            href="https://docs.google.com/document/d/1dwKa1GeQx61fcmDuNtrLZEnYvwCTCtIlnpQL0_ywTR8/edit?usp=sharing"
            target="_blank"
            className="dark-button"
          >
            Specs
          </a>
        </div>
      </div>
  );
};

export default Timeline;
