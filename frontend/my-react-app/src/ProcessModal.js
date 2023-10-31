// Modal.js
import React, { useState, useEffect, useRef } from 'react';
import './Modal.css';
import DeploymentTable from './DeploymentTable'

const Modal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Add an event listener to the document to close the modal when clicking outside of it
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <div className='popup-container' >
      <button onClick={openModal} className="dropdown-button">
         Pipelines
      </button>
      {isModalOpen && (
        <div className="modal3" >
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
