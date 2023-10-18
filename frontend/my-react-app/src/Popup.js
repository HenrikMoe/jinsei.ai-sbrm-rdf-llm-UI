import React, { useState, useEffect, useRef } from 'react'
import './Popup.css'
import { useDarkMode } from './DarkModeContext';

const Popup = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHelloWorld, setShowHelloWorld] = useState(false);
  const popupRef = useRef(null);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const closePopup = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', closePopup);

    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleHelloWorld = () => {
    setShowHelloWorld(!showHelloWorld);
  };

  return (
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <button
        className={`show-hello-button ${isDarkMode ? 'dark-button' : ''}`}
        onClick={toggleHelloWorld}
      >
        Show Hello World
      </button>
      {showHelloWorld && <p>Hello World</p>}
    </div>
  );
};

export default Popup;
