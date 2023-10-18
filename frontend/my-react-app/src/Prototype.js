import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import PrototypeHeader from './PrototypeHeader';
import PrototypeSideMenu from './PrototypeSideMenu';
import './Prototype.css';
import { useAuthentication } from './AuthenticationContext';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext

function Prototype() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuthentication();
  const { isDarkMode } = useDarkMode(); // Get the dark mode status

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeAndSetAuthenticated = () => {
    setIsModalOpen(false);
    login();
  };

  return (
    <div className={`prototype-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {isAuthenticated ? (
        // Content for authenticated users
        <div class='content-grid'>
          <PrototypeHeader />
          <PrototypeSideMenu />
          {/* Add content for signed-in users here */}
        </div>
      ) : (
        // Content for non-authenticated users
        <div>
          {isModalOpen && (
            <div className={`modal ${isDarkMode ? 'dark-mode' : ''}`}>
              <h2 className={isDarkMode ? 'dark-mode-text' : ''}>Login with Google</h2>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  closeAndSetAuthenticated();
                }}
                onError={() => {
                  console.log('Authentication failed');
                }}
                scope="email"
              />
            </div>
          )}
          {!isModalOpen && (
            <div className={`modal2 ${isDarkMode ? 'dark-mode' : ''}`}>
              <button className="arrive-button" onClick={openModal}>
                Login for Access
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Prototype;
