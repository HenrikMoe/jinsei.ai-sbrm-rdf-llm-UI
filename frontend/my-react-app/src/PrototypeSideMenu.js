import React, { useState, useEffect } from 'react';
import './PrototypeSideMenu.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext


const PrototypeSideMenu = ({ sheetTitles, onSheetSelect, selectedSheetData, xslxTitle }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [initialWidth, setInitialWidth] = useState(200);
  const [initialHeight, setInitialHeight] = useState(400);
  const [currentWidth, setCurrentWidth] = useState(initialWidth);
  const [currentHeight, setCurrentHeight] = useState(initialHeight);
  const resizeBorderWidth = 35;

  const [selectedSheet, setSelectedSheet] = useState(null); // Track the selected sheet title

  const { isDarkMode } = useDarkMode();
  console.log(sheetTitles)

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

  const handleSheetSelect = (sheetTitle) => {
   // Handle sheet selection here
   console.log('Selecting sheet:', sheetTitle);
   setSelectedSheet(sheetTitle);
   onSheetSelect(sheetTitle);

 };
 console.log(selectedSheet)

 console.log(xslxTitle)

 return (
     <div
       className={`prototype-side-menu ${isResizing ? 'resizing' : ''} ${
         isDarkMode ? 'dark-mode' : ''
       }`}
       onMouseDown={handleMouseDown}
     >
       <ul>
       <div className='sidemenu-title'> {xslxTitle} </div>
        {sheetTitles ? sheetTitles.map((title) => (
           <li
             key={title}
             className={`${isDarkMode ? 'dark-mode' : ''} ${
               title === selectedSheet ? 'selected' : ''
             }`}
             onClick={() => handleSheetSelect(title)}
           >
             {title}
           </li>
         )): <li className='sidemenu-title'> Import </li> }
       </ul>
     </div>
   );
};

export default PrototypeSideMenu;
