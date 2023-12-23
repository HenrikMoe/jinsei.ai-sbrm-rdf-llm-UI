import React, { useState, useEffect, useRef } from 'react';
import './StructureInstanceTable.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext
import DeploymentTable from './DeploymentTable'
import { Stage, Layer, Rect, Arrow, Text } from 'react-konva';
import Modal from 'react-modal';


const PrototypeSideMenu = ({ handlePipelineInstanceSelection, sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet, schemaConfigSelected }) => {

  const [rectangles, setRectangles] = useState([
    { x: 50, y: 50, width: 100, height: 50, id: 1, text: 'Rectangle 1', fields: { field1: '', field2: '', field3: '', field4: '', field5: '', field6: '' } },
    { x: 200, y: 50, width: 100, height: 50, id: 2, text: 'Rectangle 2', fields: { field1: '', field2: '', field3: '', field4: '', field5: '', field6: '' } },
    { x: 50, y: 200, width: 100, height: 50, id: 3, text: 'Rectangle 3', fields: { field1: '', field2: '', field3: '', field4: '', field5: '', field6: '' } },
    { x: 200, y: 200, width: 100, height: 50, id: 4, text: 'Rectangle 4', fields: { field1: '', field2: '', field3: '', field4: '', field5: '', field6: '' } },
  ]);

  const [selectedRectangle, setSelectedRectangle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedText, setEditedText] = useState('');
  const [editedFields, setEditedFields] = useState({ field1: '', field2: '', field3: '', field4: '', field5: '', field6: '' });

  const handleDragMove = (index, { target }) => {
    const updatedRectangles = rectangles.slice();
    updatedRectangles[index] = {
      ...updatedRectangles[index],
      x: target.x(),
      y: target.y(),
    };
    setRectangles(updatedRectangles);
  };

  const handleDoubleClick = (index) => {
    setSelectedRectangle(index);
    setEditedText(rectangles[index].text);
    setEditedFields(rectangles[index].fields);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveText = () => {
    const updatedRectangles = rectangles.slice();
    updatedRectangles[selectedRectangle] = {
      ...updatedRectangles[selectedRectangle],
      text: editedText,
      fields: { ...editedFields },
    };
    setRectangles(updatedRectangles);
    setIsModalOpen(false);
  };

  const calculateNearestEdges = (startRect, endRect) => {
    const startX = startRect.x + startRect.width / 2;
    const startY = startRect.y + startRect.height / 2;
    const endX = endRect.x + endRect.width / 2;
    const endY = endRect.y + endRect.height / 2;

    if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
      // Connect horizontally
      return [startX < endX ? startRect.x + startRect.width : startRect.x, startY, endX > startX ? endRect.x : endRect.x + endRect.width, endY];
    } else {
      // Connect vertically
      return [startX, startY < endY ? startRect.y + startRect.height : startRect.y, endX, endY > startY ? endRect.y : endRect.y + endRect.height];
    }
  };

 return (

     <div className="elementTitle10">Maps:

     <div className='ontologyheader'>
     <div className='notes'>Ontology Upoad </div>
     <div className='notes'>Config Summary  </div>

     <div className='notes'>Model: LEI  </div>
     <div className='notes'> <input type="checkbox" /></div>

     <div className='notes'>Model: Fibo </div>
     <div className='notes'> <input type="checkbox" /></div>

     <div className='notes'>Model: ACTUS </div>
     <div className='notes'> <input type="checkbox" /></div>

    <div className='notes'>Model: RDF </div>
    <div className='notes'> <input type="checkbox" /></div>



     <div className='elementDetailWrap'>
     <div className='notes2'>Element Details:</div>

     <div className='ontologyheader2'>

     <div className='notes2'>Semantic Description:  </div>
     <div className='notes2'>[desc]</div>

     <div className='notes3'>ACTUS Role: [role] </div>
     <div className='notes2'>Flow<input type="checkbox" /></div>

     <div className='notes3'>FIbo Role: [role] </div>
     <div className='notes2'> Flow<input type="checkbox" /></div>

     <div className='notes3'>LEI Role: [role] </div>
     <div className='notes2'> Flow<input type="checkbox" /></div>

     <div className='notes3'>RDF Role: [role] </div>
     <div className='notes2'> Flow<input type="checkbox" /></div>

     </div>
     </div>

     </div>




     <div className='notes2'>Konva of revenue operations, basically product terms sheets with quantity data. Multi-brnach companies - the ai will train to aggreagate the product and quantity functions of revenue for these companies and likewise with costs into the standard visualization. </div>

     <div className='balance-sheet7'>
     <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
  {rectangles.map((rect, index) => (
    <React.Fragment key={rect.id}>
      <Rect
        x={rect.x}
        y={rect.y}
        width={rect.width}
        height={rect.height}
        fill="blue"
        draggable
        onDragMove={(e) => handleDragMove(index, e)}
        onDblClick={() => handleDoubleClick(index)}
      />
      <Text
        x={rect.x + 10} // Adjust the x and y offsets as needed
        y={rect.y + 10}
        text={rect.text}
      />
      <Text
        x={rect.x + 10} // Adjust the x and y offsets as needed
        y={rect.y + 30}
        text={`Field 1: ${rect.fields.field1}`}
      />
      {/* Repeat similar Text components for other fields (field2 to field6) */}
    </React.Fragment>
  ))}
  {/* Add arrows connecting the rectangles */}
  {rectangles.map((startRect, index) => (
    index < rectangles.length - 1 && (
      <Arrow
        key={index}
        points={calculateNearestEdges(startRect, rectangles[index + 1])}
        stroke="black"
      />
    )
  ))}
</Layer>
      </Stage>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Edit Text Modal"
        className="Modal"
      >
        <div className="ModalHeader">
          <h2>Edit Text and Fields</h2>
          <button className="ModalCloseButton" onClick={handleModalClose}>
            &times;
          </button>
        </div>
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />

        {/* Additional input fields for editing fields */}
        <label>Field 1:</label>
        <input
          type="text"
          value={editedFields.field1}
          onChange={(e) => setEditedFields({ ...editedFields, field1: e.target.value })}
        />

        {/* Repeat similar input fields for other fields (field2 to field6) */}

        <button onClick={handleSaveText}>Save</button>
        <button onClick={handleModalClose}>Cancel</button>
      </Modal>
    </div>
    </div>

       </div>
   );
};

export default PrototypeSideMenu;
