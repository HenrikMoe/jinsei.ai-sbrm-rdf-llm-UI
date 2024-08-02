import React from 'react';
import FileViewerHim from './FileViewer';
import Spinner from '../Spinner.js'
import FileUploader from './FileUploader.js'
import FileDownloader from './FileDownloader.js'

import {
  AnalysisTransformersPE,
  SheetTransformersPE,
  SheetTransformersCapitilization,
  AnalysisTransformersCapitilization,
  CreateTransformer
} from './Services'; // Import the services
import SearchBar from './SearchBar.js';

const ServiceDetails = ({
  selectedService,
  selectedSubServiceLevel1,
  selectedSubServiceLevel2,
  onBack,
  onSubServiceLevel1Click,
  onSubServiceLevel2Click
}) => {
  const getSubServices = () => {
    if (selectedSubServiceLevel1 === 'sheettransformer' && selectedService.title === 'Private Equity') {
      return SheetTransformersPE;
    } else if (selectedSubServiceLevel1 === 'analysisfunctions' && selectedService.title === 'Private Equity') {
      return AnalysisTransformersPE;
    } else if (selectedSubServiceLevel1 === 'sheettransformer' && selectedService.title === 'Capitlization') {
      return SheetTransformersCapitilization;
    } else if (selectedSubServiceLevel1 === 'analysisfunctions' && selectedService.title === 'Capitlization') {
      return AnalysisTransformersCapitilization;
    }
    return [];
  };

  const getTitle = () => {
    if (selectedSubServiceLevel1 === 'sheettransformer') {
      return `${selectedService.title} -> Format Transformers`;
    } else if (selectedSubServiceLevel1 === 'analysisfunctions') {
      return `${selectedService.title} -> Analysis Transformers`;
    }
    return 'Sub Services';
  };

  return (
    <div>
      <button
        onClick={onBack}
        style={{
          backgroundColor: '#24292e',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textDecoration: 'none'
        }}
      >
        Back
      </button>

      {selectedSubServiceLevel2 ? (
        <div style={{ color: 'tan', marginTop: '0px', marginBottom: '150px', width: '100%' }}>
          <h2 style={{ color: 'white' }}>{getTitle()}</h2>
          <h2 style={{ color: 'white' }}> -&gt; {selectedSubServiceLevel2.title}</h2>
          <p>{selectedSubServiceLevel2.description}</p>
          <p style={{ color: 'white' }}>Details</p>
          {selectedSubServiceLevel2.type === 'createTransformer' ?
           (
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr', gap: '20px' }}>
              <div>
                <h3 style={{ color: 'white' }}>Input</h3>
                <div
                  style={{
                    color: 'tan',
                    border: '1px solid #ccc',
                    padding: '20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  <h3 style={{ color: 'white' }}>initial CSV, XLSX, JSON, or other format</h3>
               
                  <FileUploader />
                </div>
              </div>
              <div>
                <h3 style={{ color: 'white' }}>Output</h3>
                <div
                  style={{
                    color: 'tan',
                    border: '1px solid #ccc',
                    padding: '20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  <h3 style={{ color: 'white' }}>final format CSV, XLSX, JSON, or other </h3>
                  <FileUploader />

                </div>
              </div>
              <div>
                <h3 style={{ color: 'white' }}>Input Preview</h3>
                <div
                  style={{
                    color: 'tan',
                    border: '1px solid #ccc',
                    padding: '20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  <FileViewerHim />
                </div>
              </div>
              <div>
                <h3 style={{ color: 'white' }}>Output Preview</h3>
                <div
                  style={{
                    color: 'tan',
                    border: '1px solid #ccc',
                    padding: '20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  <FileViewerHim />
                </div>
              </div>
              <div>
          <p>Permissions, select erp pack / config or make ai public </p>
          </div>
          <div>

          <button
            style={{
              marginTop: '20px',
              backgroundColor: '#24292e',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
             Select
          </button>
          </div>
          <div>
          <p>Looks good? </p>
          </div>
          <div>

          <button
            style={{
              marginTop: '20px',
              backgroundColor: '#24292e',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
             Create AI
          </button>
          <Spinner/>

          </div>
            </div>
          ) : (
            <div>
      

            
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 3fr', gap: '20px' }}>
             
              <div>
          <p>this is your published ai or within your eneterprise iam pack permissioned to train</p>
          </div>
          <div>

          <button
            style={{
              marginTop: '20px',
              backgroundColor: '#24292e',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            Update AI Training
          </button>
          <button
            style={{
              marginTop: '20px',
              marginLeft: '10px',
              backgroundColor: '#24292e',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            Update IAM
          </button>
          </div>

          <div>
          <p>you have access to this endpoint thru your iam or this is public</p>
          </div>
          <div>

          <button
            style={{
              marginTop: '20px',
              backgroundColor: '#24292e',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            Add To Services
          </button>
          </div>

          <div>
          <p>More Details</p>
          </div>
          <div>

          <button
            style={{
              marginTop: '20px',
              backgroundColor: '#24292e',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
             Endpoint Redocly Documentation
          </button>
          </div>
            </div>

           
            <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(9, 1fr)',
  gap: '20px',
  marginTop: '20px',
  marginBottom: '20px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#333'
}}>
  <div style={{
    color: 'white',
    border: '1px solid #666',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center'
  }}>
    Popularity: 2nd
  </div>
  <div style={{
    color: 'white',
    border: '1px solid #666',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center'
  }}>
    Issues: 8
  </div>
  <div style={{
    color: 'white',
    border: '1px solid #666',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center'
  }}>
    Contributors: 15
  </div>
  <div style={{
    color: 'white',
    border: '1px solid #666',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center'
  }}>
    Performance
  </div>
  <div style={{
    color: 'white',
    border: '1px solid #666',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center'
  }}>
    TrainingData
  </div>
  <div style={{
    color: 'white',
    border: '1px solid #666',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center'
  }}>
    Related
  </div>
  <div style={{
    color: 'white',
    border: '1px solid #666',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center'
  }}>
    IAM
  </div>
  <div style={{
    color: 'white',
    border: '1px solid #666',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center'
  }}>
    Source
  </div>
  <div style={{
    color: 'white',
    border: '1px solid #666',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center'
  }}>
    Images/CI/CD
  </div>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr',}}>
            <div>
                <h3 style={{ color: 'white' }}>Input Training Data Preview</h3>
                <div
                  style={{
                    color: 'tan',
                    border: '1px solid #ccc',
                    padding: '20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  <FileViewerHim />
                  <FileDownloader />
                </div>
              </div>
              <div>
                <h3 style={{ color: 'white' }}>Output Training Data Preview</h3>
                <div
                  style={{
                    color: 'tan',
                    border: '1px solid #ccc',
                    padding: '20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  <FileViewerHim />
                  <FileDownloader/>
                </div>
              </div>
              </div>

            </div>
          )}
          
         
        </div>
      ) : selectedSubServiceLevel1 ? (
        <div style={{ color: 'tan', marginTop: '0px', marginBottom: '150px', width: '100%' }}>
          <h2 style={{ color: 'white' }}>{getTitle()}</h2>
          <p>{selectedService.description}</p>
          <button
            onClick={() => onSubServiceLevel2Click(CreateTransformer[0])}
            style={{
              backgroundColor: '#24292e',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            Create Transformer
          </button>
          <p style={{ color: 'white' }}>Public Transformers:</p>

            <SearchBar />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {getSubServices().map((service, index) => (
              <div
                key={index}
                style={{
                  color: 'tan',
                  border: '1px solid #ccc',
                  padding: '20px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
                onClick={() => onSubServiceLevel2Click(service)}
              >
                <h3 style={{ color: 'white' }}>{service.title}</h3>
                <p>{service.description}</p>
                <p>{service.integrationNotes}</p>
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
            <div
              style={{
                color: 'tan',
                border: '1px solid #ccc',
                padding: '20px',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
              onClick={() => onSubServiceLevel1Click('sheettransformer')}
            >
              <h3 style={{ color: 'white' }}>Format Transformers</h3>
            </div>
            <div
              style={{
                color: 'tan',
                border: '1px solid #ccc',
                padding: '20px',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
              onClick={() => onSubServiceLevel1Click('analysisfunctions')}
            >
              <h3 style={{ color: 'white' }}>Analysis Transformers</h3>
            </div>
          </div>
          
        </div>
      ) : null}
    </div>
  );
};

export default ServiceDetails;
