import React, { useState, useEffect, useRef } from 'react'
import './Popup.css'


const Popup = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHelloWorld, setShowHelloWorld] = useState(false);
  const popupRef = useRef(null);

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
    <div className="popup-container">
      <button className="show-hello-button" onClick={toggleHelloWorld}>
        Show Hello World
      </button>
      {showHelloWorld && <p>Hello World</p>}
    </div>
  );
};

export default Popup; // This line exports the component as the default export
