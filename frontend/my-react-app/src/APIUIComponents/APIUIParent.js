import React, { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import ServiceDetails from './ServiceDetails';
import ServiceList from './ServiceList';
import { SyntaxServices, AuthorityServices } from './Services'; // Import the services
import SearchBar from './SearchBar'

const JinseiAPIEndpoints = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubServiceLevel1, setSelectedSubServiceLevel1] = useState(null);
  const [selectedSubServiceLevel2, setSelectedSubServiceLevel2] = useState(null);

  const isRowBased = useMediaQuery('(min-width: 500px)');
  const isMobileMode = useMediaQuery('(max-width: 768px)');

  const handleServiceClick = (service) => setSelectedService(service);
  const handleSubServiceLevel1Click = (service) => setSelectedSubServiceLevel1(service);
  const handleSubServiceLevel2Click = (service) => setSelectedSubServiceLevel2(service);

  const handleBack = () => {
    if (selectedSubServiceLevel2) {
      setSelectedSubServiceLevel2(null);
    } else if (selectedSubServiceLevel1) {
      setSelectedSubServiceLevel1(null);
    } else {
      setSelectedService(null);
    }
  };

  return (
    <div style={{ display: 'flex', overflowY: 'auto', flexDirection: isRowBased ? 'row' : 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div style={{ marginTop: isMobileMode ? '-50px' : '150px', marginBottom: '150px', marginLeft: '100px', marginRight: '50px', '@media (max-width: 768px)': { marginLeft: '30px', marginRight: '30px' } }}>
        {selectedService || selectedSubServiceLevel1 || selectedSubServiceLevel2 ? (
          <ServiceDetails
            selectedService={selectedService}
            selectedSubServiceLevel1={selectedSubServiceLevel1}
            selectedSubServiceLevel2={selectedSubServiceLevel2}
            onBack={handleBack}
            onSubServiceLevel1Click={handleSubServiceLevel1Click}
            onSubServiceLevel2Click={handleSubServiceLevel2Click}
          />
        ) : (
          <div>

          <div style={{ marginTop: isRowBased ? '0px' : '-50px', display: 'flex', marginLeft: '-40px', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <h1 style={{ color: 'white', marginLeft: isRowBased ? '50px' : '0', marginTop: isRowBased ? (isMobileMode ? '50px' : '100px') : '200px', textAlign: 'center' }}>
              Jinsei.ai API
            </h1>
            <h3 style={{ color: 'tan', marginLeft: isRowBased ? '50px' : '0', textAlign: 'center' }}>
              Jinsei.ai transformer endpoints and authority services. For use in your Jinsei.ai services.
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="https://github.com/HenrikMoe/BakerTilly-Jinsei.ai/tree/main" target="_blank" rel="noopener noreferrer">
                <button style={{ backgroundColor: '#24292e', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', textDecoration: 'none', marginRight: '10px' }}>GitHub</button>
              </a>
              <a href="mailto:henrik@jinsei.ai?subject=Baker Tilly + Jinsei.ai" target="_blank" rel="noopener noreferrer">
                <button style={{ backgroundColor: '#24292e', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', textDecoration: 'none' }}>Email</button>
              </a>
            </div>
          </div>
                      <SearchBar />
            </div>
        )}

        {!selectedService && !selectedSubServiceLevel1 && !selectedSubServiceLevel2 && (
          <ServiceList
            SyntaxServices={SyntaxServices}
            AuthorityServices={AuthorityServices}
            onServiceClick={handleServiceClick}
          />
        )}
      </div>
    </div>
  );
};

export default JinseiAPIEndpoints;


// import React, { useState } from 'react';
// import { useMediaQuery } from 'usehooks-ts';
// import EndPointAnalytics from './APIUIChild';
// import EndPointDataPreview from './APIUIChild';
// import EndPointDataView from './APIUIChild'; // Assuming you meant './APIUIChild'
// //move this into the ui childs
// import FileViewerHim from './FileViewer';
// import { SyntaxServices, AuthorityServices, SheetTransformersPE, AnalysisTransformersPE } from './Services'; // Import the services

// const JinseiAPIEndpoints = () => {
  

//   const [selectedService, setSelectedService] = useState(null);
//   const isRowBased = useMediaQuery('(min-width: 500px)');
//   const isMobileMode = useMediaQuery('(max-width: 768px)');

//   const [selectedServiceA, setSelectedServiceA] = useState(null);

//   const handleClick = (service) => {
//     setSelectedService(service);
//   };

//   const handleBack = () => {
//     setSelectedService(null);
//   };

//   const [selectedSubServiceLevel1, setSelectedSubServiceLevel1] = useState(null);

//   const handleSubServiceLevel1Click = (service) => {
//     setSelectedSubServiceLevel1(service)
//   }

//   const handleSubServiceLevel1Back = () => {
//     setSelectedSubServiceLevel1(null)
//   }


//   const [selectedSubServiceLevel2, setSelectedSubServiceLevel2] = useState(null);

//   const handleSubServiceLevel2Click = (service) => {
//     setSelectedSubServiceLevel2(service)
//   }

//   const handleSubServiceLevel2Back = () => {
//     setSelectedSubServiceLevel2(null)
//   }




//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: isRowBased ? 'row' : 'column',
//       justifyContent: 'center',
//       alignItems: 'flex-start',
//     }}>
//       <div style={{
//         marginTop: isMobileMode ? '-50px' : '150px',
//         marginBottom: '150px',
//         marginLeft: '100px',
//         marginRight: '50px',
//         '@media (max-width: 768px)': {
//           marginLeft: '30px',
//           marginRight: '30px',
//         }
//       }}>
//         {selectedService || selectedSubServiceLevel1 || selectedSubServiceLevel2 ? (
//           <div></div>
//         ) : (
//           <div style={{
//             marginTop: isRowBased ? '0px' : '-50px',
//             display: 'flex',
//             marginLeft: '-40px',
//             flexDirection: 'column',
//             alignItems: 'center', // Center the content horizontally
//             position: 'relative', // Ensure relative positioning
//             zIndex: 1, // Ensure the h1 is above the blue background
//           }}>
//             <h1 style={{
//               color: 'white',
//               marginLeft: isRowBased ? '50px' : '0', // Adjusted marginLeft property for h1
//               marginTop: isRowBased ? (isMobileMode ? '50px' : '100px') : '200px', // Adjusted marginTop property for h1
//               textAlign: 'center', // Center the text horizontally
//             }}>
//               Jinsei.ai API Endpoints
//             </h1>
//             <h3 style={{
//               color: 'tan',
//               marginLeft: isRowBased ? '50px' : '0', // Adjusted marginLeft property for h3
//               textAlign: 'center', // Center the text horizontally
//             }}>
//               Jinsei.ai transformer endpoints and authority services. For use in your Jinsei.ai services.
//             </h3>
//             <div style={{
//               display: 'flex',
//               justifyContent: 'center',
//             }}>
//               <a href="https://github.com/HenrikMoe/BakerTilly-Jinsei.ai/tree/main" target="_blank" rel="noopener noreferrer">
//                 <button style={{
//                   backgroundColor: '#24292e',
//                   color: '#fff',
//                   padding: '10px 20px',
//                   border: 'none',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                   textDecoration: 'none',
//                   marginRight: '10px' // Adjust margin right as needed
//                 }}>GitHub</button>
//               </a>
//               <a href="mailto:henrik@jinsei.ai?subject=Baker Tilly + Jinsei.ai" target="_blank" rel="noopener noreferrer">
//                 <button style={{
//                   backgroundColor: '#24292e',
//                   color: '#fff',
//                   padding: '10px 20px',
//                   border: 'none',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                   textDecoration: 'none',
//                 }}>Email</button>
//               </a>
//             </div>
//           </div>
//         )}

//         <div style={{
//           marginTop: isMobileMode ? '-50px' : '150px',
//           marginBottom: '150px',
//           marginRight: '50px',
//           width: isRowBased ? '800px' : '80%',
//           flexDirection: isMobileMode ? 'column' : '',
//           alignItems: isMobileMode ? 'center' : '', // Center the content horizontally
//           position: isMobileMode ? 'relative' : '',
//           display: 'grid',
//           marginLeft: isMobileMode ? '50px' : '0px',
//           gridTemplateColumns: isRowBased ? '1fr' : '1fr',
//           gap: '20px',
//         }}>
//         {selectedSubServiceLevel2 ?   (
//           <div style={{ color: 'tan', marginTop: '0px', marginBottom: '150px', width: isRowBased ? '600px' : '100%', }}>
//             <button style={{
//               backgroundColor: '#24292e',
//               color: '#fff',
//               padding: '10px 20px',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               textDecoration: 'none',
//               marginTop: isMobileMode ? '50px' : '0px',
//             }} onClick={handleSubServiceLevel2Back}>Back</button>
//             <h2 style={{ color: 'white' }}>ENDPOINT SHIT </h2>
//             <p>{selectedService.description}</p>
//             <p style={{ color: 'white' }}>Details</p>
//             <div style={{
//               marginTop: isMobileMode ? '-50px' : '150px',
//               marginBottom: '150px',
//               marginRight: '50px',
//               width: isRowBased ? '800px' : '80%',
//               flexDirection: isMobileMode ? 'column' : '',
//               alignItems: isMobileMode ? 'center' : '', // Center the content horizontally
//               position: isMobileMode ? 'relative' : '',
//               display: 'grid',
//               marginLeft: isMobileMode ? '50px' : '0px',
//               gridTemplateColumns: isRowBased ? '1fr' : '1fr',
//               gap: '20px',
//             }}>
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: isRowBased ? '1fr 1fr' : '1fr',
//               gap: '20px',
//             }}>
//             <div style={{
//               color: 'tan',
//               border: '1px solid #ccc',
//               padding: '20px',
//               borderRadius: '8px',
//               cursor: 'pointer',
//               marginTop: '10px'
//             }} >
//             <h3 style={{ color: 'white' }}>Bottom shit </h3>
//              </div>
//              <div style={{
//                color: 'tan',
//                border: '1px solid #ccc',
//                padding: '20px',
//                borderRadius: '8px',
//                cursor: 'pointer',
//                marginTop: '10px'
//              }}>
//               <FileViewerHim />
//              <h3 style={{ color: 'white' }}>Analysis Functions</h3>
//               </div>
//             </div>
//             <div style={{ color: 'white' }}>list </div>
//             <FileViewerHim />

//             </div>
//             <p>{selectedService.trainingData}</p>
//             <p>{selectedService.intakeData}</p>
//             <p>{selectedService.performanceData}</p>
//             <p>{selectedService.integrationNotes}</p>
//           </div>) : (<div>
//             {selectedSubServiceLevel1 ?
//               (
//               <div style={{ color: 'tan', marginTop: '0px', marginBottom: '150px', width: isRowBased ? '600px' : '100%', }}>
//                 <button style={{
//                   backgroundColor: '#24292e',
//                   color: '#fff',
//                   padding: '10px 20px',
//                   border: 'none',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                   textDecoration: 'none',
//                   marginTop: isMobileMode ? '50px' : '0px',
//                 }} onClick={handleSubServiceLevel1Back}>Back</button>
//                 <h2 style={{ color: 'white' }}>External Statement Transformers</h2>
                
//                 <p>{selectedService.description}</p>
//                 <p style={{ color: 'white' }}>Details</p>
//                 <div style={{
//                   marginTop: isMobileMode ? '-50px' : '150px',
//                   marginBottom: '150px',
//                   marginRight: '50px',
//                   width: isRowBased ? '800px' : '80%',
//                   flexDirection: isMobileMode ? 'column' : '',
//                   alignItems: isMobileMode ? 'center' : '', // Center the content horizontally
//                   position: isMobileMode ? 'relative' : '',
//                   display: 'grid',
//                   marginLeft: isMobileMode ? '50px' : '0px',
//                   gridTemplateColumns: isRowBased ? '1fr' : '1fr',
//                   gap: '20px',
//                 }}>
//                 <div style={{
//                   display: 'grid',
//                   gridTemplateColumns: isRowBased ? '1fr 1fr' : '1fr',
//                   gap: '20px',
//                 }}>
//                      {SheetTransformersPE.map((service, index) => (
//                         <div key={index} style={{
//                           color: 'tan',
//                           border: '1px solid #ccc',
//                           padding: '20px',
//                           borderRadius: '8px',
//                           cursor: 'pointer',
//                           marginTop: '10px'
//                         }} onClick={() => handleSubServiceLevel2Click(service)}>
//                           <h3 style={{ color: 'white' }}>{service.title}</h3>
//                           <p>{service.description}</p>
//                         </div>
//                       ))}
//                 <div style={{
//                   color: 'tan',
//                   border: '1px solid #ccc',
//                   padding: '20px',
//                   borderRadius: '8px',
//                   cursor: 'pointer',
//                   marginTop: '10px'
//                 }} onClick={() => handleSubServiceLevel2Click('SheetTransformers')}>
//                 <h3 style={{ color: 'white' }}>Business Bank Account Transactions [Wells Fago] to Entity Cash Flow Statement [jinsei standard format]</h3>
//                  </div>
//                  <div style={{
//                    color: 'tan',
//                    border: '1px solid #ccc',
//                    padding: '20px',
//                    borderRadius: '8px',
//                    cursor: 'pointer',
//                    marginTop: '10px'
//                  }} onClick={() => handleSubServiceLevel2Click('service')}>
//                  <h3 style={{ color: 'white' }}>a</h3>
//                   </div>
//                   <div style={{
//                     color: 'tan',
//                     border: '1px solid #ccc',
//                     padding: '20px',
//                     borderRadius: '8px',
//                     cursor: 'pointer',
//                     marginTop: '10px'
//                   }} onClick={() => handleSubServiceLevel2Click('service')}>
//                   <h3 style={{ color: 'white' }}>a sheet 2 thing</h3>
//                    </div>
//                    <div style={{
//                      color: 'tan',
//                      border: '1px solid #ccc',
//                      padding: '20px',
//                      borderRadius: '8px',
//                      cursor: 'pointer',
//                      marginTop: '10px'
//                    }} onClick={() => handleSubServiceLevel2Click('SheetTransformers')}>
//                    <h3 style={{ color: 'white' }}>s Functions</h3>
//                     </div>

//                 </div>
//                 <div style={{
//                   display: 'grid',
//                   gridTemplateColumns: isRowBased ? '1fr 1fr' : '1fr',
//                   gap: '20px',
//                 }}>
//                 <div style={{
//                   color: 'tan',
//                   border: '1px solid #ccc',
//                   padding: '20px',
//                   borderRadius: '8px',
//                   cursor: 'pointer',
//                   marginTop: '10px'
//                 }} onClick={() => handleSubServiceLevel2Click('SheetTransformers')}>
//                 <h3 style={{ color: 'white' }}>Sheet Transformers</h3>
//                  </div>
//                  <div style={{
//                    color: 'tan',
//                    border: '1px solid #ccc',
//                    padding: '20px',
//                    borderRadius: '8px',
//                    cursor: 'pointer',
//                    marginTop: '10px'
//                  }} onClick={() => handleSubServiceLevel2Click('SheetTransformers')}>
//                  <h3 style={{ color: 'white' }}>s 4s Functions</h3>
//                   </div>

//                 </div>


//                 </div>
//                 <p>{selectedService.trainingData}</p>
//                 <p>{selectedService.intakeData}</p>
//                 <p>{selectedService.performanceData}</p>
//                 <p>{selectedService.integrationNotes}</p>
//               </div>): (  <div>{selectedService ? (
//                 <div style={{ color: 'tan', marginTop: '0px', marginBottom: '150px', width: isRowBased ? '600px' : '100%', }}>
//                   <button style={{
//                     backgroundColor: '#24292e',
//                     color: '#fff',
//                     padding: '10px 20px',
//                     border: 'none',
//                     borderRadius: '5px',
//                     cursor: 'pointer',
//                     textDecoration: 'none',
//                     marginTop: isMobileMode ? '50px' : '0px',
//                   }} onClick={handleBack}>Back</button>
//                   <h2 style={{ color: 'white' }}>{selectedService.title}</h2>
//                   <p>{selectedService.description}</p>
//                   <p style={{ color: 'white' }}>Details</p>
//                   <div style={{
//                     marginTop: isMobileMode ? '-50px' : '150px',
//                     marginBottom: '150px',
//                     marginRight: '50px',
//                     width: isRowBased ? '800px' : '80%',
//                     flexDirection: isMobileMode ? 'column' : '',
//                     alignItems: isMobileMode ? 'center' : '', // Center the content horizontally
//                     position: isMobileMode ? 'relative' : '',
//                     display: 'grid',
//                     marginLeft: isMobileMode ? '50px' : '0px',
//                     gridTemplateColumns: isRowBased ? '1fr' : '1fr',
//                     gap: '20px',
//                   }}>
//                   <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: isRowBased ? '1fr 1fr' : '1fr',
//                     gap: '20px',
//                   }}>
//                   <div style={{
//                     color: 'tan',
//                     border: '1px solid #ccc',
//                     padding: '20px',
//                     borderRadius: '8px',
//                     cursor: 'pointer',
//                     marginTop: '10px'
//                   }} onClick={() => handleSubServiceLevel1Click('service')}>
                    
//                   <h3 style={{ color: 'white' }}>Sheet Transformers</h3>
//                    </div>
//                    <div style={{
//                      color: 'tan',
//                      border: '1px solid #ccc',
//                      padding: '20px',
//                      borderRadius: '8px',
//                      cursor: 'pointer',
//                      marginTop: '10px'
//                    }} onClick={() => handleSubServiceLevel1Click('service')}>
//                    <h3 style={{ color: 'white' }}>Analysis Functions</h3>
//                     </div>
//                   </div>

//                   </div>
//                   <p>{selectedService.trainingData}</p>
//                   <p>{selectedService.intakeData}</p>
//                   <p>{selectedService.performanceData}</p>
//                   <p>{selectedService.integrationNotes}</p>
//                 </div>
//               ) :
//               (
//                 <div style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   width: '100%',
//                   gap: '20px',
//                 }}>
//                   <div style={{
//                     display: 'grid',
//                     gridTemplateColumns: isRowBased ? '1fr 1fr' : '1fr',
//                     gap: '20px',
//                   }}>
//                     <div>
//                       <h2 style={{ color: 'white' }}>Transformer Services</h2>
//                       {SyntaxServices.map((service, index) => (
//                         <div key={index} style={{
//                           color: 'tan',
//                           border: '1px solid #ccc',
//                           padding: '20px',
//                           borderRadius: '8px',
//                           cursor: 'pointer',
//                           marginTop: '10px'
//                         }} onClick={() => handleClick(service)}>
//                           <h3 style={{ color: 'white' }}>{service.title}</h3>
//                           <p>{service.description}</p>
//                         </div>
//                       ))}
//                     </div>
//                     <div>
//                       <h2 style={{ color: 'white', marginLeft: isRowBased ? '90px' : '',}}>Authority Services</h2>
//                       {AuthorityServices.map((service, index) => (
//                         <div key={index} style={{
//                           color: 'tan',
//                           border: '1px solid #ccc',
//                           padding: '20px',
//                           borderRadius: '8px',
//                           cursor: 'pointer',
//                           marginTop: '10px',
//                           marginLeft: isRowBased ? '80px' : '', }} onClick={() => handleClick(service)}>
//                           <h3 style={{ color: 'white' }}>{service.title}</h3>
//                           <p>{service.description}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}</div>
//             )}
//             </div>)}


//         </div>
//       </div>
//     </div>
//   );
// };

// export default JinseiAPIEndpoints;
