import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SearchBar from '../APIUIComponents/SearchBar2';
import IAM from './IamConfig';

Modal.setAppElement('#root');

const ServicesTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const rows = [
    { name: 'K1 Footnote Project', description: 'Generates footnotes on client K1 reports' },
    { name: 'Full Filing Project', description: 'Full K1 filing process for my clients' },
  ];

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setTitle('');
    setDescription('');
  };

  const handleCreateService = () => {
    // Logic to handle form submission
    console.log('Service Created:', { title, description });
    closeModal();
  };

  const createServiceForm = (
    <div style={{height: '300px', width: '110%', transform: 'scale(.89)', transformOrigin: 'top left'}}>
      <h2 style={{color: 'white'}}>Create New Service</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCreateService(); }}>
        <div style={formFieldStyle}>
          <label style={labelStyle}>Title:</label>
          <input
            type="text"
            // value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div style={formFieldStyle}>
          <label style={labelStyle}>Description:</label>
          <textarea
            // value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={textareaStyle}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Create Service</button>
      </form>
    </div>
  );

  return (
    <div style={{ transform: 'scale(0.87)', transformOrigin: 'top left' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          alignItems: 'center',
          padding: '10px',
          gap: '10px',
          width: '114%',
        }}
      >
        <h3 style={{ color: 'white', margin: '0' }}>Your Services</h3>
        <button onClick={() => openModal(createServiceForm)} style={styles.button}>Create New Service</button>
        <SearchBar style={{ padding: '10px', margin: '0', gridColumn: 'span 1' }} />
        <button onClick={() => openModal(<IAM />)} style={styles.button}>
          Bob Smith IAM
        </button>
      </div>

      <div style={styles.tableContainer}>
        <div style={styles.tableHeader}>
          <div style={styles.tableCell}>Service Name</div>
          <div style={styles.tableCell}>Description</div>
          <div style={styles.tableCell}>Actions</div>
        </div>
        {rows.map((row, index) => (
          <div
            key={index}
            style={{
              ...styles.tableRow,
              ...(index === 3 ? styles.highlightedRow : {}),
            }}
            onClick={() => console.log('Clicked row:', row)}
          >
            <div style={index === 3 ? styles.highlightedCell : styles.tableCell2}>
              {row.name}
            </div>
            <div style={index === 3 ? styles.highlightedCell : styles.tableCell2}>
              {row.description}
            </div>
            <div style={styles.tableCell}>
              <button style={index === 3 ? styles.button2 : styles.button}>{index === 3 ? 'Viewing' : 'Open'}</button>
              <button style={styles.button}>Share</button>
              <button style={styles.button}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={modalStyles}
      >
        <div style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
          {modalContent}
        </div>
        <button onClick={closeModal} style={styles.button}>
          Close
        </button>
      </Modal>
    </div>
  );
};

const styles = {
  button: {
    marginTop: '0px',
    backgroundColor: '#24292e',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    marginLeft: '15px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  button2: {
    marginTop: '0px',
    backgroundColor: 'forestgreen',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    marginLeft: '15px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  tableContainer: {
    width: '110%',
    margin: '20px auto',
    marginTop: '-5px',
    borderRadius: '8px',
    marginLeft: '15px',
    height: '100px',
    overflow: 'auto',
  },
  tableHeader: {
    display: 'flex',
    backgroundColor: '#f5f5f5',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  tableRow: {
    display: 'flex',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    cursor: 'pointer',
  },
  tableCell: {
    flex: 1,
    textAlign: 'left',
    fontSize: '14px',
  },
  tableCell2: {
    flex: 1,
    textAlign: 'left',
    fontSize: '14px',
    color: 'white',
  },
  highlightedRow: {
    backgroundColor: '#333',
  },
  highlightedCell: {
    flex: 1,
    textAlign: 'left',
    fontSize: '14px',
    color: 'white',
    fontWeight: 'bold',
  },
};

const formFieldStyle = {
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const labelStyle = {
  marginBottom: '5px',
  color: 'white',
};

const inputStyle = {
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  width: '100%',
};

const textareaStyle = {
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  width: '100%',
  height: '100px',
  resize: 'vertical',
};

const modalStyles = {
  content: {
    right: 'auto',
    bottom: 'auto',
    marginTop: '50px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'black',
    overflowX: 'hidden',
    overflowY: 'auto',
    width: '90%',
    maxHeight: '90vh',
    textAlign: 'center',
  },
};

ReactDOM.render(<ServicesTable />, document.getElementById('root'));

export default ServicesTable;
