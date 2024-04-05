import React, { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts'

const ShipyardServices = () => {
  const aiServices = [
    {
      title: 'Shipyard Client Facing: GPT Data Element Extraction & Compilation Service for Shipyard Campaign Reports',
      description: 'Description: Assistant that can be asked for ROI reports and live KPI figures for an ongoing campaign.',
      trainingData: 'Training Data: Sample training data for Chat GPT Database Element Extraction & Report Compilation Service.',
      intakeData: 'Intake Data: Sample intake data for Chat GPT Database Element Extraction & Report Compilation Service.',
      performanceData: 'Performance Data: Sample performance data for Chat GPT Database Element Extraction & Report Compilation Service.',
      integrationNotes: 'Integration Notes: Sample integration notes for Chat GPT Database Element Extraction & Report Compilation Service.',
    },
    {
      title: 'Shipyard Internal Facing: GPT Data Element Extraction & Compilation Service for Shipyard Campaign Reports',
      description: 'Description: Assistant that can be asked for ROI reports and live KPI figures for an ongoing campaign.',
      trainingData: 'Training Data: Sample training data for Chat GPT Database Element Extraction & Report Compilation Service.',
      intakeData: 'Intake Data: Sample intake data for Chat GPT Database Element Extraction & Report Compilation Service.',
      performanceData: 'Performance Data: Sample performance data for Chat GPT Database Element Extraction & Report Compilation Service.',
      integrationNotes: 'Integration Notes: Sample integration notes for Chat GPT Database Element Extraction & Report Compilation Service.',
    },
    {
      title: 'Data Sequence-to-Sequence Transformer',
      description: 'Description: PY JAX service for automating excel data digestion given a database interface program.',
      trainingData: 'Training Data: Sample training data for XML/CSV Sequence-to-Sequence Sheets Transformer.',
      intakeData: 'Intake Data: Sample intake data for XML/CSV Sequence-to-Sequence Sheets Transformer.',
      performanceData: 'Performance Data: Sample performance data for XML/CSV Sequence-to-Sequence Sheets Transformer.',
      integrationNotes: 'Integration Notes: Sample integration notes for XML/CSV Sequence-to-Sequence Sheets Transformer.',
    },
  ];

  const [selectedService, setSelectedService] = useState(null);
  const isRowBased = useMediaQuery('(min-width: 500px)');

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
        marginTop: '150px',
        marginBottom: '150px',
        marginLeft: '100px',
        marginRight: '50px',
        '@media (max-width: 768px)': {
          marginLeft: '30px',
          marginRight: '30px',
        }
      }}>
        {selectedService ? (<div></div>) : (
          <div style={{marginTop: isRowBased ? '0px' : '-50px', display: 'fixed'}}>
            <h1 style={{ color: 'tan', marginLeft: isRowBased ? '50px' : '-40px', marginTop: isRowBased ? '0px' : '100px',}}>Shipyard + Jinsei.ai Services</h1>
            <h3 style={{ color: 'tan' , marginLeft: isRowBased ? '50px' : '-40px', }}>Various data mapping and automation services with chat assistants.</h3>
            <a href="https://github.com/HenrikMoe/Shipyard-Jinsei.ai/blob/main/README.md" target="_blank" rel="noopener noreferrer">
              <button style={{
                backgroundColor: '#24292e',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                marginLeft: '60px',

                borderRadius: '5px',
                cursor: 'pointer',
                textDecoration: 'none',
              }}>GitHub</button>
            </a>
            <a href="mailto:henrik@jinsei.ai?subject=Shipyard + Jinsei.ai" target="_blank" rel="noopener noreferrer">
              <button style={{
                backgroundColor: '#24292e',
                color: '#fff',
                marginLeft: '10px',
                padding: '10px 20px',
                border: 'none',
                marginTop: '5px',

                borderRadius: '5px',
                cursor: 'pointer',
                textDecoration: 'none',
                marginRight: '10px' // Adjust margin right as needed
              }}>Email</button>
            </a>
          </div>
        )}
      </div>
      <div style={{
        marginTop: '150px',
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
