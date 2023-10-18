import React, { useState, useEffect } from 'react';
import './PrototypeSideMenu.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext


const PrototypeSideMenu = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [initialWidth, setInitialWidth] = useState(200); // Initial width of the side menu
  const [initialHeight, setInitialHeight] = useState(400); // Initial height of the side menu
  const [currentWidth, setCurrentWidth] = useState(initialWidth);
  const [currentHeight, setCurrentHeight] = useState(initialHeight);
  const resizeBorderWidth = 30; // Additional 20 pixels to the right

  const { isDarkMode } = useDarkMode(); // Get the dark mode status


  useEffect(() => {
    const handleResize = (e) => {
      if (isResizing) {
        const newWidth = currentWidth + e.clientX - initialWidth - resizeBorderWidth;
        const newHeight = currentHeight + e.clientY - initialHeight - resizeBorderWidth;
        document.querySelector('.prototype-side-menu').style.width = `${newWidth}px`;
        document.querySelector('.prototype-side-menu').style.height = `${newHeight}px`;
      }
    };

    const handleMouseUp = (e) => {
      if (isResizing) {
        setIsResizing(false);
        setCurrentWidth(currentWidth + e.clientX - initialWidth - resizeBorderWidth);
        setCurrentHeight(currentHeight + e.clientY - initialHeight - resizeBorderWidth);
      }
    };

    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, initialWidth, initialHeight, currentWidth, currentHeight]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
    setInitialWidth(e.clientX);
    setInitialHeight(e.clientY);
  };

  return (
    <div
      className={`prototype-side-menu ${isResizing ? 'resizing' : ''}`}
      onMouseDown={handleMouseDown}
    >
      {/* Add your side menu content here */}
      <ul>
        <li className={` ${isDarkMode ? 'dark-mode' : ''}`}>Menu Item 1</li>
        <li className={` ${isDarkMode ? 'dark-mode' : ''}`}>Menu Item 2</li>
        <li className={` ${isDarkMode ? 'dark-mode' : ''}`}>Menu Item 3</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default PrototypeSideMenu;
