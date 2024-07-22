import React, { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import EndPointAnalytics from './APIUIChild';
import EndPointDataPreview from './APIUIChild';
import EndPointDataView from './APIUIChild'; // Assuming you meant './APIUIChild'

const JinseiAPIEndpoints = () => {
  const SyntaxServices = [
    {
      title: 'Capitlization',
      description: "Description: IFRS 38 cap rules, cap analysis",
      //show user the statement sheets they need to config and the analysis func they are using.
      //show like build a endpoint - build your endpoint with statements and analysis transformers
      //start with statements, lists statement apis which you like add to cart, then they show up in the service builder bottom right part and you connect ur enterprise iam
      // then you click like done and it takes you back and then you click on the right side which is analysis function transformers
      // then it lists the ifrs 38 cap reveiwing functions that analysts use and you add those to ur cart too and then configure them in the service pipeline bottom right part like the statement part.
      
      //statement sheets - project lisitngs one xlsx file, project listings multiple files thru authed query,
      // mapping transformer per analysis function given data files
      trainingData: 'Training Data: Sample training data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      intakeData: 'Intake Data: Sample intake data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      performanceData: 'Performance Data: Sample performance data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      integrationNotes: 'Integration Notes: Standardized data format for integration into Baker Tilly tool suite.',
    },
    {
      title: 'SBRM - OMG',
      description: "Description: populate SBRM with aspects and facts.",
      trainingData: 'Training Data: Sample training data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      intakeData: 'Intake Data: Sample intake data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      performanceData: 'Performance Data: Sample performance data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      integrationNotes: 'Integration Notes: Standardized data format for integration into Baker Tilly tool suite.',
    },
    {
      title: 'MiCa ViCa',
      description: "Description: populate euro web3 asset tracking filing specs' aspects and facts, via ixbrl whitepapers.",
      trainingData: 'Training Data: Sample training data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      intakeData: 'Intake Data: Sample intake data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      performanceData: 'Performance Data: Sample performance data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      integrationNotes: 'Integration Notes: Standardized data format for integration into Baker Tilly tool suite.',
    },
    {
      title: 'ACTUS',
      description: "Description: all encompassing financial product modeler (about 100 of every fin product today)",
      trainingData: 'Training Data: Sample training data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      intakeData: 'Intake Data: Sample intake data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      performanceData: 'Performance Data: Sample performance data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      integrationNotes: 'Integration Notes: Standardized data format for integration into Baker Tilly tool suite.',
    },
    {
      title: 'P.E. Stuff',
      description: "Description: 10 K 10 Q P.E stuff",
      trainingData: 'Training Data: Sample training data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      intakeData: 'Intake Data: Sample intake data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      performanceData: 'Performance Data: Sample performance data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
      integrationNotes: 'Integration Notes: Standardized data format for integration into Baker Tilly tool suite.',
    },


  ];

    const AuthorityServices = [
      {
        title: 'SEC EDGAR API',
        description: "Upload filings, retrieve filings",
        trainingData: 'EdgarPack Training Data: Sample training data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
        intakeData: 'Intake Data: Sample intake data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
        performanceData: 'Performance Data: Sample performance data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
        integrationNotes: 'Integration Notes: Standardized data format for integration into Baker Tilly tool suite.',
      },
      {
        title: 'EURO',
        description: "Upload filings, retrieve filings",
        trainingData: 'EdgarPack Training Data: Sample training data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
        intakeData: 'Intake Data: Sample intake data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
        performanceData: 'Performance Data: Sample performance data for XML/CSV/JSON Sequence-to-Sequence Sheets Transformer.',
        integrationNotes: 'Integration Notes: Standardized data format for integration into Baker Tilly tool suite.',
      },


    // Add more services as needed
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
      display: 'flex',
      flexDirection: isRowBased ? 'row' : 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
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
              color: 'white',
              marginLeft: isRowBased ? '50px' : '0', // Adjusted marginLeft property for h1
              marginTop: isRowBased ? (isMobileMode ? '50px' : '100px') : '200px', // Adjusted marginTop property for h1
              textAlign: 'center', // Center the text horizontally
            }}>
              Jinsei.ai API Endpoints
            </h1>
            <h3 style={{
              color: 'tan',
              marginLeft: isRowBased ? '50px' : '0', // Adjusted marginLeft property for h3
              textAlign: 'center', // Center the text horizontally
            }}>
              Jinsei.ai transformer endpoints and authority services. For use in your Jinsei.ai services.
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

        <div style={{
          marginTop: isMobileMode ? '-50px' : '150px',
          marginBottom: '150px',
          marginRight: '50px',
          width: isRowBased ? '800px' : '80%',
          flexDirection: isMobileMode ? 'column' : '',
          alignItems: isMobileMode ? 'center' : '', // Center the content horizontally
          position: isMobileMode ? 'relative' : '',
          display: 'grid',
          marginLeft: isMobileMode ? '50px' : '0px',
          gridTemplateColumns: isRowBased ? '1fr' : '1fr',
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
                marginTop: isMobileMode ? '50px' : '0px',
              }} onClick={handleBack}>Back</button>
              <h2 style={{ color: 'white' }}>{selectedService.title}</h2>
              <p>{selectedService.description}</p>
              <p style={{ color: 'white' }}>Details</p>
              <p>{selectedService.trainingData}</p>
              <p>{selectedService.intakeData}</p>
              <p>{selectedService.performanceData}</p>
              <p>{selectedService.integrationNotes}</p>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: '20px',
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isRowBased ? '1fr 1fr' : '1fr',
                gap: '20px',
              }}>
                <div>
                  <h2 style={{ color: 'white' }}>Transformer Services</h2>
                  {SyntaxServices.map((service, index) => (
                    <div key={index} style={{
                      color: 'tan',
                      border: '1px solid #ccc',
                      padding: '20px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      marginTop: '10px'
                    }} onClick={() => handleClick(service)}>
                      <h3 style={{ color: 'white' }}>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h2 style={{ color: 'white', marginLeft: isRowBased ? '90px' : '',}}>Authority Services</h2>
                  {AuthorityServices.map((service, index) => (
                    <div key={index} style={{
                      color: 'tan',
                      border: '1px solid #ccc',
                      padding: '20px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      marginTop: '10px',
                      marginLeft: isRowBased ? '80px' : '', }} onClick={() => handleClick(service)}>
                      <h3 style={{ color: 'white' }}>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JinseiAPIEndpoints;
