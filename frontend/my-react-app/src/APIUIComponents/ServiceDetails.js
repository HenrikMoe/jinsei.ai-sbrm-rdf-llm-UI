import React from 'react';
import FileViewerHim from './FileViewer';
import Spinner from '../Spinner.js'
import FileUploader from './FileUploader.js'
import FileDownloader from './FileDownloader.js'
import PerformanceTuning from './PerformanceTuning..js'
import ModelTester from './ModelTester.js'

import {
  PE,
  Cap,
  CreateTransformer
} from './Services'; // Import the services
import SearchBar from './SearchBar.js';
import Model from '../Model.js';

const ServiceDetails = ({
  selectedService,
  selectedSubServiceLevel1,
  selectedSubServiceLevel2,
  onBack,
  onSubServiceLevel1Click,
  onSubServiceLevel2Click
}) => {
  const getSubServices = () => {
    if (selectedService.title === 'Private Equity') {
      return PE;
    } else if (selectedService.title === 'Capitlization') {
      return Cap;
    }
    return [];
  };

  const getTitle = () => {
   
    return selectedService.title;
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
          <h2 style={{ color: 'tan' }}>{getTitle()}  </h2>
          <h2 style={{ color: 'white' }}> 
            
          {selectedSubServiceLevel2.title === 'create title here' ? (
            <div>
                          <div>&rarr; 

                  <input
                    type="text"
                   
                    style={{
                      color: 'white',
                      backgroundColor: 'transparent',
                      border: '1px solid white',
                      outline: 'none',
                      width: '300px',
                      marginLeft: '25px'
                    }}
                    placeholder='create transformer title'
                  />
  </div>
  <div style={{
                      marginTop: '25px',
                    }}>

                  <input
                    type="text"
                   
                    style={{
                      color: 'white',
                      backgroundColor: 'transparent',
                      border: '1px solid white',
                      outline: 'none',
                      marginTop: '25px',
                      width: '300px'
                    }}
                    placeholder='create transformer description'
                  />
                  </div>
                  </div>

                    
                ) : (
                  <div>
                  <h2 style={{ color: 'white', fontSize: '24px' }}>&rarr; 
                  {selectedSubServiceLevel2.title}</h2>
                   <div style={{ color: 'white', marginTop: '25px' }}>{selectedSubServiceLevel2.description}</div>
                   </div>
                )}</h2>
          {selectedSubServiceLevel2.type === 'createTransformer' ?
           (
            <div>
               <h3 style={{ color: 'white' }}>Sequental Model Silos:</h3>

              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',  transform: 'scale(0.89)',
  transformOrigin: 'top', border: 'solid 1px white'}}>
<button style={{ color: 'white', backgroundColor: 'grey', margin: '10px auto', padding: '15px auto'}}>Silo 1</button>
<button style={{ color: 'black', margin: '10px auto', padding: '15px auto'}}>Add Silo</button>
<button style={{ color: 'black', margin: '10px auto', padding: '15px auto'}}>Re-Order Silos</button>

</div>
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
                  <h3 style={{ color: 'white' }}>Initial Data <button>Supported Type List</button></h3>
               
                  <FileUploader />
                  

                </div>
                <FileDownloader />

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
                  <h3 style={{ color: 'white' }}>Final State <button>Supported Type List</button></h3>
                  <FileUploader />

                </div>
                <FileDownloader />

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


             
                  <PerformanceTuning />
                  <ModelTester/>
                  <button style={{width: '200px', padding: '10px', marginLeft: '170px'}}>IAM Config</button>

                  <button style={{width: '200px', padding: '10px', marginLeft: '170px'}}>Save Transformer</button>
                  <button style={{width: '200px', padding: '10px', marginLeft: '170px'}}>Add Transformer To Subservices </button>
                  <button style={{width: '200px', padding: '10px', marginLeft: '170px'}} >Transformer Version History</button>
                  <button style={{width: '200px', padding: '10px', marginLeft: '170px'}}>Share</button>
          </div>
    


          </div>
          
          ) : (
            <div>
      

            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px', transform: 'scale(0.83)',
    transformOrigin: 'top left',     width: '114%',
              
             }}>
             
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
           Bob's IAMs
         </button>
         
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
            Update Transformer
          </button>
          
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
            Add To My Services
          </button>
         
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
            <p style={{ color: 'white' }}>Details</p>

           
            <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)',
  gap: '20px',
  marginTop: '20px',
  marginBottom: '20px',
  padding: '20px',
  transform: 'scale(0.89)',
  transformOrigin: 'top',
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
    Rank: 1st
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
    color: 'black',
    border: '1px solid #666',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: 'white',
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
    Source, Images
  </div>
 
</div>

<div style={{display: 'grid', gridTemplateColumns: ' 1fr 1fr 1fr',  transform: 'scale(0.89)',
   border: 'solid 1px white', borderRadius: '5px'}}>
    <div><h3 style={{color: 'white'}}>LLMs: </h3></div>
    <div>
    
<button  style={{
             marginTop: '10px',
             backgroundColor: 'forestgreen',
             color: '#fff',
             padding: '10px 20px',
             border: 'none',
             borderRadius: '5px',
             cursor: 'pointer',
             textDecoration: 'none'
           }}
         >Silo 1</button>
         </div>
         <div>
<button  style={{
             marginTop: '10px',
             backgroundColor: '#24292e',
             color: '#fff',
             padding: '10px 20px',
             border: 'none',
             borderRadius: '5px',
             cursor: 'pointer',
             textDecoration: 'none'
           }}
         >Silo 2</button>
         </div>

</div>

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr',  transform: 'scale(0.89)',
  transformOrigin: 'top',}}>
            <div style={{ transform: 'scale(0.89)',
  transformOrigin: 'top',}}>

<div><button  style={{
             marginTop: '20px',
             backgroundColor: '#24292e',
             color: '#fff',
             padding: '10px 20px',
             border: 'none',
             borderRadius: '5px',
             cursor: 'pointer',
             textDecoration: 'none'
           }}
         >Open Training Dir</button></div>
                <div><button  style={{
             marginTop: '20px',
             backgroundColor: '#24292e',
             color: '#fff',
             padding: '10px 20px',
             border: 'none',
             borderRadius: '5px',
             cursor: 'pointer',
             textDecoration: 'none'
           }}
         >Download Dir</button></div>
                    <FileDownloader/>

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
                >
             
                </div>
              </div>
              <div  style={{ transform: 'scale(0.89)',
  transformOrigin: 'top',}}>

                <div><button style={{
             marginTop: '20px',
             backgroundColor: '#24292e',
             color: '#fff',
             padding: '10px 20px',
             border: 'none',
             borderRadius: '5px',
             cursor: 'pointer',
             textDecoration: 'none'
           }}>Open Training Dir</button></div>
                <div><button style={{
             marginTop: '20px',
             backgroundColor: '#24292e',
             color: '#fff',
             padding: '10px 20px',
             border: 'none',
             borderRadius: '5px',
             cursor: 'pointer',
             textDecoration: 'none'
           }}>Download Dir</button></div>
                    <FileDownloader/>

                <h3 style={{ color: 'white',  }}>Output Training Data Preview</h3>
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
             
                </div>
              </div>
              </div>
              <ModelTester/>
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px' }}>
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

             
                  <h3 style={{ color: 'white', }}>{service.title}</h3>
                
                <p>{service.description}</p>
                <p>{service.integrationNotes}</p>
              </div>
            ))}
          </div>
         
        </div>
      ) : selectedService ? (
        <div style={{ color: 'tan', marginTop: '0px', marginBottom: '150px', width: '100%' }}>
          <h2 style={{ color: 'white', }}>{selectedService.title}</h2>
          <p>{selectedService.description}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
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
              <h3 style={{ color: 'white' }}>Sequential LLM Services</h3>
            </div>
           
          </div>
          
        </div>
      ) : null}
    </div>
  );
};

export default ServiceDetails;
