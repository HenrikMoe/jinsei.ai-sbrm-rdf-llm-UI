import React, { useState } from 'react';

const ShipyardServices = () => {

  const aiServices = [
    {
      title: 'Chat GPT Database Element Extraction & Report Compilation Service',
      description: 'Description: Assitant that can be asked for ROI reports and live KPI figures for an ongoing campaign.',
      trainingData: 'Training Data: Sample training data for Chat GPT Database Element Extraction & Report Compilation Service.',
      intakeData: 'Intake Data: Sample intake data for Chat GPT Database Element Extraction & Report Compilation Service.',
      performanceData: 'Performance Data: Sample performance data for Chat GPT Database Element Extraction & Report Compilation Service.',
      integrationNotes: 'Integration Notes: Sample integration notes for Chat GPT Database Element Extraction & Report Compilation Service.',
    },
    {
      title: 'Chat GPT + XML/CSV Content/Position Validation Service',
      description: 'Description: Assitant that understands excel positioning given a database interface program.',
      trainingData: 'Training Data: Sample training data for Chat GPT + XML/CSV Content/Position Validation Service.',
      intakeData: 'Intake Data: Sample intake data for Chat GPT + XML/CSV Content/Position Validation Service.',
      performanceData: 'Performance Data: Sample performance data for Chat GPT + XML/CSV Content/Position Validation Service.',
      integrationNotes: 'Integration Notes: Sample integration notes for Chat GPT + XML/CSV Content/Position Validation Service.',
    },
    {
      title: 'XML/CSV Sequence-to-Sequence Sheets Transformer',
      description: 'Description: PY JAX service for automating excel data digestion given a database interface program.',
      trainingData: 'Training Data: Sample training data for XML/CSV Sequence-to-Sequence Sheets Transformer.',
      intakeData: 'Intake Data: Sample intake data for XML/CSV Sequence-to-Sequence Sheets Transformer.',
      performanceData: 'Performance Data: Sample performance data for XML/CSV Sequence-to-Sequence Sheets Transformer.',
      integrationNotes: 'Integration Notes: Sample integration notes for XML/CSV Sequence-to-Sequence Sheets Transformer.',
    },
  ];

  // State to keep track of the selected AI service
  const [selectedService, setSelectedService] = useState(null);

  // Function to handle clicking on an AI service
  const handleClick = (service) => {
    setSelectedService(service);
  };

  // Function to handle going back to the list of AI services
  const handleBack = () => {
    setSelectedService(null);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ marginTop: '150px', marginBottom: '150px', marginLeft: '100px', marginRight: '50px'  }}>
    {selectedService ? (<div></div>):(
      <div>
      <h1 style={{ color: 'teal',}}>Shipyard + Jinsei.ai Services</h1>
      <h3 style={{ color: 'teal',}}> Various data mapping and automation services with chat assitants.</h3>
      <a href="https://github.com/HenrikMoe/Shipyard-Jinsei.ai/blob/main/README.md" target="_blank" rel="noopener noreferrer">
        <button style={{
          backgroundColor: '#24292e',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
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
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none',
          marginRight: '10px' // Adjust margin right as needed
        }}>Email</button>
      </a>
      </div>
    )}
</div>
      <div style={{ marginTop: '150px', marginBottom: '150px', marginRight: '100px', width: '600px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

        {selectedService ? (
          <div style={{ color: 'teal', marginTop: '0px', marginBottom: '150px', width: '600px',}}>
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
            <div key={index} style={{ color: 'teal', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', cursor: 'pointer' }} onClick={() => handleClick(service)}>
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
