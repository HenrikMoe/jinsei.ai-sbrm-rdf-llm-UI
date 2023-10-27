import React, { useState, useEffect, useRef } from 'react';
import './PrototypeSideMenu.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext


const PrototypeSideMenu = ({  sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [initialWidth, setInitialWidth] = useState(200);
  const [initialHeight, setInitialHeight] = useState(400);
  const [currentWidth, setCurrentWidth] = useState(initialWidth);
  const [currentHeight, setCurrentHeight] = useState(initialHeight);
  const resizeBorderWidth = 35;

  console.log('running on datastore change')

  const [selectedSheet, setSelectedSheet] = useState(null); // Track the selected sheet title

  const { isDarkMode } = useDarkMode();
  console.log(dataStore)

//depcerecated
  const [isFirstSheetSelected, setIsFirstSheetSelected] = useState(false); // Track if the first sheet is selected
  const resizeRef = useRef(null); // Reference to the resize area


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
    // Attach event listeners to the resize area
    resizeRef.current.addEventListener('mousedown', (e) => {
      if (e.target === resizeRef.current) {
        // Only start resizing if the user clicks on the resize handle itself
        setIsResizing(true);
        setInitialWidth(currentWidth);
        setInitialHeight(currentHeight);
      }
    });

    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, initialWidth, initialHeight, currentWidth, currentHeight]);



  useEffect(() => {
    if (sheetData) {
      const initialData = sheetData.slice(1);
    }
  }, [sheetData]);

  const handleSheetSelect = (index, sheetTitle) => {
   // Handle sheet selection here
   console.log('Selecting sheet:', sheetTitle);
   setSelectedSheet(sheetTitle);
   onSheetSelect(sheetTitle);
   handleSelectedSheet(sheetTitle); // Call the function to update selectedSheet
   };

   const handleTitleChange = (index, title, titleChange) => {
    dataStore.updateDataTaxonomyXLSX(index, titleChange)
   }


 return (
   <div>
    <div className='elementTitle'>Data Taxonomy</div>
     <div
       className={`prototype-side-menu ${isResizing ? 'resizing' : ''} ${
         isDarkMode ? 'dark-mode' : ''
       }`}
     >
     <div
        className="resize-handle"
        ref={resizeRef} // Reference to the resize area
      >
      </div>
       <ul>
       <div className='sidemenu-title'> {dataStore.workbook ? xlsxTitle : null} </div>
        {dataStore.workbook ? dataStore.dataTaxonomyXLSX.map((title, index) => (
          <li
             key={title}
             contentEditable
             className={`${isDarkMode ? 'dark-mode' : ''} ${title === selectedSheet ? 'selected' : ''} ${
               index === 0 && isFirstSheetSelected ? 'selected' : '' // Highlight the first title
             }`}
             onClick={() => handleSheetSelect(index, title)}
           >
             {title}
           </li>
         )): <li className='sidemenu-title'> Sheets </li> }
       </ul>
     </div>
     </div>
   );
};

export default PrototypeSideMenu;
