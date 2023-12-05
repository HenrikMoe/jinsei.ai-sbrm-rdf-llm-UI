import React, { useState, useEffect, useRef } from 'react';
import './PrototypeSideMenu.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext


const PrototypeSideMenu = ({ handleStructureInstanceSelection, sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet, schemaConfigSelected, handleTabSelection }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [initialWidth, setInitialWidth] = useState(200);
  const [initialHeight, setInitialHeight] = useState(400);
  const [currentWidth, setCurrentWidth] = useState(initialWidth);
  const [currentHeight, setCurrentHeight] = useState(initialHeight);
  const resizeBorderWidth = 35;


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
   if(dataStore.workbookXLSX){
     console.log('Selecting sheet:', sheetTitle);
     setSelectedSheet(sheetTitle);
     onSheetSelect(sheetTitle);
     handleSelectedSheet(sheetTitle); // Call the function to update selectedShee
   }else{
     console.log('deleted workbook')
     console.log(index, sheetTitle)
     handleSelectedSheet(''); // Call the function to update selectedShee
     setSelectedSheet('');
     onSheetSelect('');
   }
   };

   const handleStructureInstanceSelect = (index, structTitle) =>{
     console.log('asdflkj')
     console.log(structTitle)
     setSelectedSheet(structTitle);
     console.log(selectedSheet)
     handleStructureInstanceSelection(structTitle)
     //somehow change the tab to configuration
     handleTabSelection('Schema')

   }

   const handleTitleChange = (index, title, titleChange) => {
    dataStore.updateDataTaxonomyXLSX(index, titleChange)
   }


 return (
   <div className='structureInstance'>
    <div className='elementTitle'>Structure Instance</div>
     <div
       className={`prototype-side-menu8 ${isResizing ? 'resizing' : ''} ${
         isDarkMode ? 'dark-mode' : ''
       }`}
     >
     <div
        className="resize-handle"
        ref={resizeRef} // Reference to the resize area
      >
      </div>
      <div className='elementTitle6'>Report Model</div>

       <ul>
       <div className='sidemenu-title'> {dataStore.workbookXLSX ? xlsxTitle : null} </div>
        {dataStore.lucaSideMenu ? dataStore.lucaSideMenu.map((title, index) => (
          <li
             key={title}
             contentEditable
             className={`${isDarkMode ? 'dark-mode' : ''} ${title === selectedSheet && !schemaConfigSelected ? 'selected' : ''} ${
               index === 0 && isFirstSheetSelected ? 'selected' : '' // Highlight the first title
             }`}
             onClick={() => handleStructureInstanceSelect(index, title)}
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
