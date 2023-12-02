import React, { useState, useEffect, useRef } from 'react';
import './Modal.css';
import XBRLComponentTaxonomy from './XBRLComponentNetwork'


const Modal = ({isPublish, setModalOff, isModal, exportStatus, setExportFalse, setPublishOff }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    if(setModalOff){
      setModalOff()

    }
    else if(setExportFalse){

      setExportFalse()
    }
    else if(setPublishOff){
      setPublishOff()
    }
  };

  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isLabelsChecked, setIsLabelsChecked] = useState(false);

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
          <div className='modalTitle'>Selected: [SFAC 6] </div>
          <div  className='modalTitle'> Select Elements:</div>
          <div className="modal-content">

          <div className='checkboxWrap'>
            <input
              type="checkbox"
              id="termsCheckbox"
              checked={isTermsChecked}
              onChange={() => setIsTermsChecked(!isTermsChecked)}
            />
            <label htmlFor="termsCheckbox">All</label>
          </div>

            <div className='checkboxWrap'>
              <input
                type="checkbox"
                id="termsCheckbox"
                checked={isTermsChecked}
                onChange={() => setIsTermsChecked(!isTermsChecked)}
              />
              <label htmlFor="termsCheckbox">Terms</label>
            </div>

            <div className='checkboxWrap'>
              <input
                type="checkbox"
                id="labelsCheckbox"
                checked={isLabelsChecked}
                onChange={() => setIsLabelsChecked(!isLabelsChecked)}
              />
              <label htmlFor="labelsCheckbox">Labels</label>
            </div>

            <div className='checkboxWrap'>
              <input
                type="checkbox"
                id="labelsCheckbox"
                checked={isLabelsChecked}
                onChange={() => setIsLabelsChecked(!isLabelsChecked)}
              />
              <label htmlFor="labelsCheckbox">References</label>
            </div>
            <div className='checkboxWrap'>
              <input
                type="checkbox"
                id="labelsCheckbox"
                checked={isLabelsChecked}
                onChange={() => setIsLabelsChecked(!isLabelsChecked)}
              />
              <label htmlFor="labelsCheckbox">Structures</label>
            </div>
            <div className='checkboxWrap'>
              <input
                type="checkbox"
                id="labelsCheckbox"
                checked={isLabelsChecked}
                onChange={() => setIsLabelsChecked(!isLabelsChecked)}
              />
              <label htmlFor="labelsCheckbox">Associations</label>
            </div>

            <div className='checkboxWrap'>
              <input
                type="checkbox"
                id="labelsCheckbox"
                checked={isLabelsChecked}
                onChange={() => setIsLabelsChecked(!isLabelsChecked)}
              />
              <label htmlFor="labelsCheckbox">Rules</label>
            </div>

            <div className='checkboxWrap'>
              <input
                type="checkbox"
                id="labelsCheckbox"
                checked={isLabelsChecked}
                onChange={() => setIsLabelsChecked(!isLabelsChecked)}
              />
              <label htmlFor="labelsCheckbox">Proforma Facts</label>
            </div>


          </div>

          <XBRLComponentTaxonomy />



          <button>Apply</button>

        </div>
      )}

      {isPublish && (
        <div className="modal" >
          <button onClick={closeModal} className="close-button">
            X
          </button>
          <div className="modal-content">
          <div className='checkboxWrap'>
          <div>Publish Model Standard</div>
          </div>
          </div>
          <div className="modal-content">
          <div className='checkboxWrap'>
          <table className='xlsx-table'>
          <tr><td>Model Name:</td><td>AbCoQuarterlyDisclosureSet</td></tr>
          <tr><td>License Key:</td><td>adc3...10f</td></tr>
          <tr><td>Authenticated Licensees:</td><td>LicenseesObject</td></tr>

          </table>
          <button>Publish To Jinsei</button>

          </div>
          </div>

        </div>
      )}


      {exportStatus && (
        <div className="modal" >
          <button onClick={closeModal} className="close-button">
            X
          </button>
          <div className="modal-content">
            Export shiz           </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
