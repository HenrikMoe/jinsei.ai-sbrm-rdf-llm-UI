import React, { useState, useEffect, useRef } from 'react';
import './Modal.css';

const Modal = ({setModalOff, isModal}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalOff()
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
    <div >

      {isModal && (
        <div className="modal" >
          <button onClick={closeModal} className="close-button">
            X
          </button>
          <div className="modal-content">
          This is where we select what ovelray things to import into the model
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
