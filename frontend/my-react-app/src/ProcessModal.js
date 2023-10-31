// Modal.js
import React, { useState } from 'react';
import './Modal.css';
import DeploymentTable from './DeploymentTable'

const Modal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='popup-container' >
      <button onClick={openModal} className="dropdown-button">
         Pipelines
      </button>
      {isModalOpen && (
        <div className="modal3">
          <button onClick={closeModal} className="close-button">
            X
          </button>
          <div className="modal-content">
            {/* Your summary page content goes here */}
            {/* You can add a lot of content, and it will be scrollable */}
            <DeploymentTable />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
