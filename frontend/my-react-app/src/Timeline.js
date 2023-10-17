import React from 'react';
import './Timeline.css'; // Import your CSS file

const Timeline = () => {
  return (
      <div className="content">
        <div className="timeline-title">Jinsei Corp Build Timeline</div>
        <div className="button-container">
          <a href="/prototype" className="dark-button">
            Jinsei Studio
          </a>
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
            Full Jinsei Studio Specs
          </a>
        </div>
      </div>
  );
};

export default Timeline;
