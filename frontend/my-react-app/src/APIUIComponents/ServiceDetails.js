import React from 'react';
import FileViewerHim from './FileViewer';
import { AnalysisTransformersPE, SheetTransformersPE, SheetTransformersCapitilization, AnalysisTransformersCapitilization } from './Services'; // Import the services

const ServiceDetails = ({ selectedService, selectedSubServiceLevel1, selectedSubServiceLevel2, onBack, onSubServiceLevel1Click, onSubServiceLevel2Click }) => {
  const getSubServices = () => {
    if (selectedSubServiceLevel1 === 'sheettransformer' && selectedService.title === 'Private Equity') {
      return SheetTransformersPE;
    } else if (selectedSubServiceLevel1 === 'analysisfunctions' && selectedService.title === 'Private Equity') {
      return AnalysisTransformersPE;
    }
    else if (selectedSubServiceLevel1 === 'sheettransformer' && selectedService.title === 'Capitlization') {
        return SheetTransformersCapitilization;
      }
    else if (selectedSubServiceLevel1 === 'analysisfunctions' && selectedService.title === 'Capitlization') {
    return AnalysisTransformersCapitilization;
    }
    return [];
  };

  const getTitle = () => {
    if (selectedSubServiceLevel1 === 'sheettransformer') {
      return 'Sheet Transformers';
    } else if (selectedSubServiceLevel1 === 'analysisfunctions') {
      return 'Analysis Functions';
    }
    return 'Sub Services';
  };

  return (
    <div>
      <button onClick={onBack} style={{ backgroundColor: '#24292e', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', textDecoration: 'none' }}>Back</button>

      {selectedSubServiceLevel2 ? (
        <div style={{ color: 'tan', marginTop: '0px', marginBottom: '150px', width: '100%' }}>
          <h2 style={{ color: 'white' }}>ENDPOINT SHIT</h2>
          <p>{selectedService.description}</p>
          <p style={{ color: 'white' }}>Details</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            <div style={{ color: 'tan', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', cursor: 'pointer', marginTop: '10px' }}>
              <h3 style={{ color: 'white' }}>Bottom shit</h3>
            </div>
            <div style={{ color: 'tan', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', cursor: 'pointer', marginTop: '10px' }}>
              <FileViewerHim />
              <h3 style={{ color: 'white' }}>Analysis Functions</h3>
            </div>
          </div>
          <div style={{ color: 'white' }}>list</div>
          <FileViewerHim />
          <p>{selectedService.trainingData}</p>
          <p>{selectedService.intakeData}</p>
          <p>{selectedService.performanceData}</p>
          <p>{selectedService.integrationNotes}</p>
        </div>
      ) : selectedSubServiceLevel1 ? (
        <div style={{ color: 'tan', marginTop: '0px', marginBottom: '150px', width: '100%' }}>
          <h2 style={{ color: 'white' }}>{getTitle()}</h2>
          <p>{selectedService.description}</p>
          <p style={{ color: 'white' }}>Details</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {getSubServices().map((service, index) => (
              <div key={index} style={{ color: 'tan', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', cursor: 'pointer', marginTop: '10px' }} onClick={() => onSubServiceLevel2Click(service)}>
                <h3 style={{ color: 'white' }}>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <p>{selectedService.trainingData}</p>
          <p>{selectedService.intakeData}</p>
          <p>{selectedService.performanceData}</p>
          <p>{selectedService.integrationNotes}</p>
        </div>
      ) : selectedService ? (
        <div style={{ color: 'tan', marginTop: '0px', marginBottom: '150px', width: '100%' }}>
          <h2 style={{ color: 'white' }}>{selectedService.title}</h2>
          <p>{selectedService.description}</p>
          <p style={{ color: 'white' }}>Details</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ color: 'tan', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', cursor: 'pointer', marginTop: '10px' }} onClick={() => onSubServiceLevel1Click('sheettransformer')}>
              <h3 style={{ color: 'white' }}>Format Transformers</h3>
            </div>
            <div style={{ color: 'tan', border: '1px solid #ccc', padding: '20px', borderRadius: '8px', cursor: 'pointer', marginTop: '10px' }} onClick={() => onSubServiceLevel1Click('analysisfunctions')}>
              <h3 style={{ color: 'white' }}>Analysis Functions</h3>
            </div>
          </div>
          <p>{selectedService.trainingData}</p>
          <p>{selectedService.intakeData}</p>
          <p>{selectedService.performanceData}</p>
          <p>{selectedService.integrationNotes}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ServiceDetails;
