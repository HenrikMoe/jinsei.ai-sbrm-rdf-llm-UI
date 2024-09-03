import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer">

    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', marginBottom: '50px', textAlign: 'center', marginLeft: '-00px'}}>
      <div>
        <div style={{marginLeft: '-150px', fontSize: '17px', marginTop: '15px'}}>Jinsei Corp:</div>
        <div style={{ textAlign: 'center', marginTop: '20px'}}>California, USA</div>
        <div>C-Class: 10,000,000 shares</div>

        <div>Distribution: Joint Venture LLCs </div>


      </div>
      <div>
        <div  style={{marginLeft: '-150px', fontSize: '17px', marginTop: '15px'}}> Contact: </div>
        <div style={{marginTop: '20px'}}>henrik@jinsei.ai</div>
        <div>+1 (805) 358-2780</div>

      </div>
    </div>

      &copy; 2024 Jinsei Corp. All rights reserved.
    </div>
  );
};

export default Footer;
