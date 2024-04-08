import React, { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const ShipyardServices = () => {
  const aiServices = [
    {
      title: 'Multi-SpreadSheet Data Formatting Automation',
      description: 'Description: Sequence-to-Sequence TF JAX service for automating multi-spreadsheet content position format standardization.',
      trainingData: 'Training Data: Sample training data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      intakeData: 'Intake Data: Sample intake data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      performanceData: 'Performance Data: Sample performance data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      integrationNotes: 'Integration Notes: Standardized data format for integration into Baker Tilly tool suite.',
    },
    {
      title: 'Turbocharged Chat Assistant: Access validation and automated formatting for mutliple spreadsheets.',
      description: 'Description: Assistant can take multiple file uploads and output the data to the Baker Tilly tool suite in a standardized format.',
      trainingData: 'Training Data: Sample training data for Database Element Extraction & Report Compilation Service.',
      intakeData: 'Intake Data: Sample intake data for Database Element Extraction & Report Compilation Service.',
      performanceData: 'Performance Data: Upload multiple files within chat and have them automtically formatted and synced with the Baker Tilly tool suite. ',
      integrationNotes: 'Integration Notes: Sample integration notes for Chat GPT Database Element Extraction & Report Compilation Service.',
    },
  ];

  const [selectedService, setSelectedService] = useState(null);
  const isRowBased = useMediaQuery('(min-width: 500px)');
  const isMobileMode = useMediaQuery('(max-width: 768px)');

  const handleClick = (service) => {
    setSelectedService(service);
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  return (
    <div style={{
      display: isRowBased ? 'flex' : 'column',
      justifyContent: 'center',
    }}>
      <div style={{
        marginTop: isMobileMode ? '-50px' : '150px',
        marginBottom: '150px',
        marginLeft: '100px',
        marginRight: '50px',
        '@media (max-width: 768px)': {
          marginLeft: '30px',
          marginRight: '30px',
        }
      }}>
      {selectedService ? (
  <div></div>
) : (
  <div style={{
    marginTop: isRowBased ? '0px' : '-50px',
    display: 'flex',
    marginLeft: '-40px',
    flexDirection: 'column',
    alignItems: 'center', // Center the content horizontally
    position: 'relative', // Ensure relative positioning
    zIndex: 1, // Ensure the h1 is above the blue background
  }}>
    <h1 style={{
      color: 'tan',
      marginLeft: isRowBased ? '50px' : '0', // Adjusted marginLeft property for h1
      marginTop: isRowBased ? (isMobileMode ? '50px' : '100px') : '200px', // Adjusted marginTop property for h1
      textAlign: 'center', // Center the text horizontally
    }}>
      Supercharged Automation With Baker Tilly + Jinsei.ai
    </h1>
    <h3 style={{
      color: 'tan',
      marginLeft: isRowBased ? '50px' : '0', // Adjusted marginLeft property for h3
      textAlign: 'center', // Center the text horizontally
    }}>
      Spreadsheet data mapping and automation services with the Baker Tilly chat assistant.
    </h3>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <a href="https://github.com/HenrikMoe/BakerTilly-Jinsei.ai/tree/main" target="_blank" rel="noopener noreferrer">
        <button style={{
          backgroundColor: '#24292e',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none',
          marginRight: '10px' // Adjust margin right as needed
        }}>GitHub</button>
      </a>
      <a href="mailto:henrik@jinsei.ai?subject=Baker Tilly + Jinsei.ai" target="_blank" rel="noopener noreferrer">
        <button style={{
          backgroundColor: '#24292e',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none',
        }}>Email</button>
      </a>
    </div>
  </div>
)}

      </div>
      <div style={{
        marginTop: isMobileMode ? '-50px' : '150px',
        marginBottom: '150px',
        marginRight: '100px',
        width: isRowBased ? '600px' : '80%',
        display: 'grid',
        gridTemplateColumns: isRowBased ? '1fr 1fr' : '1fr',
        gap: '20px',
      }}>

        {selectedService ? (
          <div style={{ color: 'tan', marginTop: '0px', marginBottom: '150px', width: isRowBased ? '600px' : '100%', }}>
            <button style={{
              backgroundColor: '#24292e',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textDecoration: 'none',

            }} onClick={handleBack}>Back</button>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.description}</p>
            <p>{selectedService.trainingData}</p>
            <p>{selectedService.intakeData}</p>
            <p>{selectedService.performanceData}</p>
            <p>{selectedService.integrationNotes}</p>
          </div>
        ) : (
          aiServices.map((service, index) => (
            <div key={index} style={{
              color: 'tan',
              border: '1px solid #ccc',
              padding: '20px',
              borderRadius: '8px',
              cursor: 'pointer',
              marginRight: '0px',
              marginLeft: isRowBased ? '0px' : '70px'
            }} onClick={() => handleClick(service)}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShipyardServices;
