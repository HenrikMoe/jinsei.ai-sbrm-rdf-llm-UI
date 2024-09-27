import React, { useState, useEffect } from 'react';
import control from './noun-control-panel-7093048.png'
import Config from './config.png'
import Transformer from './noun-transformer-5878572.png'
import ERP from './noun-enterprise-7090016.png'
// Sample Demo Data

import HlsPlayer from 'react-hls-player';

const demoData = [
  {
    id: "demo1",
    title: "Control Panel Overview",
    image: control,
    description: "This is a description for Demo 1.",
    steps: [
      {
        id: 'All Packages, Services, Dynamic Canvas',
        title: ' All Packages, Services, Dynamic Canvas',
        description: 'All Packs contains Transformers [T] Reports [R] and Services [S]. In the bottom right canvas section you can view report files and manage service configurations.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/47af1211-38a1-4758-a9a2-020840928d9e/playlist.m3u8"

      },
      {
        id: 'step2',
        title: 'View Jinsei.ai Transformers',
        description: 'View onPrem or publically available LLMs. View silo structures, training data, and test models.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/3e042af0-7349-4f68-8f88-6c249024c52a/playlist.m3u8"
      },
      {
        id: 'step3',
        title: 'View Reports ',
        description: 'Reports render dynamically in an extension you choose.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/2962d14f-e016-46fa-b26e-c51ce8c2fb27/playlist.m3u8"
      },
    ]
  },
  {
    id: "demo2",
    image: Transformer,

    title: "Creating a Transformer",
    description: "This is a description for Demo 2.",
    steps: [
      {
        id: 'step1',
        title: 'Create a transformer',
        description: 'Click on Jinsei API in All Packages. Then select category and create transformer.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/d355d215-a96a-48b6-8bcc-9c81d0ab3458/playlist.m3u8"
      },
      {
        id: 'step2',
        title: 'Add training data',
        description: 'Upload training data for the transformer. Typically previous work for some process. You can also add silo transformers for sequential or asynchrouns processes.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/65b3052f-8a28-424c-8bd6-1373e9ab5693/playlist.m3u8"
      },
      {
        id: 'step2',
        title: 'Choose, tune, and test LLM',
        description: 'Select the LLM library and tune its parameters.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/389e5d7d-f7bf-47af-a72a-f5d926d13445/playlist.m3u8"
      },
      {
        id: 'step2',
        title: 'Publish and share LLM',
        description: 'Share your model internally using onPrem IAM or publish a licensable version to the Jinsei API.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/9e7945aa-32b6-4f92-b33f-80ca787db02b/playlist.m3u8"
      },
      {
        id: 'step2',
        title: 'Auto-added to control panel',
        description: 'Your new transformer is added to All Packages in the Control Panel.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/41d53115-738e-4ef3-93a0-d224de0ca256/playlist.m3u8"
      }
    ]
  },
  {
    id: "demo3",
    title: "Launching a Transformer",
    image: Config,

    description: "This is a description for Demo 3.",
    steps: [
      {
        id: 'step1',
        title: 'Create a service',
        description: 'Services host your AI automation processes.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/c5467b40-3563-4d1c-b6d7-80241e64b1e4/playlist.m3u8"
      },
      {
        id: 'step1',
        title: 'Add a transformer',
        description: 'Add a transformer to your selected service from the All Packages menu.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/2b131d53-8548-460f-8b72-d357e5bcde18/playlist.m3u8"
      },
      {
        id: 'step1',
        title: 'Configure Inputs',
        description: 'Declare the inputs for the transformer. CDN, Postgre, Excel Query, and file runner apps for active directory use.',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/f463d8ea-4973-483f-a288-f3b6ddd68a85/playlist.m3u8"
      },
      {
        id: 'step1',
        title: 'Step 1 Title',
        description: 'Description for Step 1',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/fedcffcc-60af-4b49-9ca1-85f4c0aeb84e/playlist.m3u8"
      },
      {
        
        id: 'step1',
        title: 'Step 1 Title',
        description: 'Description for Step 1',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/041a5ef7-a9ea-43e8-b8c9-af7f0205a0f6/playlist.m3u8"
      },
      {
        
        id: 'step1',
        title: 'Step 1 Title',
        description: 'Description for Step 1',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/3a9eb518-912a-44b5-abbe-ea6222ba52dc/playlist.m3u8"
      },
      {
        
        id: 'step1',
        title: 'Step 1 Title',
        description: 'Description for Step 1',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/35fbdaff-9d66-4629-83a0-ee0690ba5205/playlist.m3u8"
      },
      {
        
        id: 'step1',
        title: 'Step 1 Title',
        description: 'Description for Step 1',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/f1fd1391-3ebd-409e-82f8-052dfd76bd5a/playlist.m3u8"
      },
      {
        
        id: 'step1',
        title: 'Step 1 Title',
        description: 'Description for Step 1',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/5e2b5935-452c-4d83-a430-4a481e18da29/playlist.m3u8"
      },
    ]
  },
  {
    id: "demo4",
    image: ERP,

    title: "Multi-Transformer Automation",
    description: "This is a description for Demo 4.",
    steps: [
      {
        id: 'step1',
        title: 'Step 1 Title',
        description: 'Description for Step 1',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/e02c27bc-c994-40d7-83f2-0654bf6a3ca2/playlist.m3u8"
      },
      {
        id: 'step2',
        title: 'Step 2 Title',
        description: 'Description for Step 2',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/6bd87e59-fe10-49ef-b847-17e914a9a1b1/playlist.m3u8"
      },
      {
        id: 'step3',
        title: 'Step 3 Title',
        description: 'Description for Step 3',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/904af0a3-9e52-4ab4-ad41-4fe4a98214be/playlist.m3u8"
      },
      {
        id: 'step3',
        title: 'Step 3 Title',
        description: 'Description for Step 3',
        videoUrl: "https://vz-7afb2539-0a9.b-cdn.net/96d7f89d-6783-4828-9554-77daf156758a/playlist.m3u8"
      }
    ]
  }
];

// Parent Component
const ParentComponent = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [demoSelected, setDemoSelected] = useState(false); // State for demo selection
const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
const styles2 = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    width: isMobile ? '83%' : '100%',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
  },
 
  button: {
    backgroundColor: '#ff5722', // Warm color
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: isMobile ? '25px' : '35px', // Conditionally adjust font size
    padding: '10px 20px',
    boxShadow: '20px 2px 10px rgba(0, 0, 0, 0.9)',

    margin: '25px 0',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
  },}
  const handleDemoSelect = (demo) => {
    setSelectedDemo(demo);
    setDemoSelected(true); // Set demoSelected to true when a demo is selected
  };

  const handleBackToSelection = () => {
    setSelectedDemo(null);
    setDemoSelected(false); // Set demoSelected to false to show demo selection
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles2.container}>
      {!demoSelected ? (
        <DemoSelection onDemoSelect={handleDemoSelect} />
      ) : (
        <DemoPlayer demo={selectedDemo} onBack={handleBackToSelection} />
      )}
    </div>
  );
};

// Demo Selection Component
const DemoSelection = ({ onDemoSelect }) => {
  return (
    <div style={styles.demoSelection}>
      <h2>Select an active demo.</h2>
      {demoData.map((demo) => (
        <button
          key={demo.id}
          onClick={() => onDemoSelect(demo)}
          style={styles.button}
        >
          <img src={demo.image} alt={`${demo.title} icon`} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          {demo.title}
        </button>
      ))}
    </div>
  );
};

// Demo Player Component
const DemoPlayer = ({ demo, onBack }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleNextStep = () => {
    if (currentStepIndex < demo.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const currentStep = demo.steps[currentStepIndex];

  return (
    <div style={styles.demoPlayer}>
      <button onClick={onBack} 
              style={isMobile ? styles.mobileScrollButton : styles.scrollButton2}
> &#8592; {/* Left Arrow */}</button> {/* Back Button */}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <HlsPlayer
            src={currentStep.videoUrl}
            autoPlay={true}
            controls={true}
            width={isMobile ? "300px" : "600px"}
            height={isMobile ? "200px" : "300px"}
            style={styles.video}
          />
        <h2 style={styles.videoTitle}>{currentStep.title}</h2>
        <p style={styles.description}>{currentStep.description}</p>

        <div style={styles.scrollContainer}>
          <ScrollButtons 
            currentStepIndex={currentStepIndex} 
            totalSteps={demo.steps.length} 
            onNext={handleNextStep} 
            onPrevious={handlePreviousStep} 
          />
        </div>
        
        <ProgressBar 
          currentStepIndex={currentStepIndex} 
          totalSteps={demo.steps.length} 
        />
      </div>
    </div>
  );
};

// Scroll Buttons Component
const ScrollButtons = ({ currentStepIndex, totalSteps, onNext, onPrevious }) => {
  return (
    <div style={styles.scrollContainer}>
      <button 
        onClick={onPrevious} 
        disabled={currentStepIndex === 0} 
        style={styles.scrollButton}
      >
        &#8592; {/* Left Arrow */}
      </button>
      <button 
        onClick={onNext} 
        disabled={currentStepIndex === totalSteps - 1} 
        style={styles.scrollButton}
      >
        &#8594; {/* Right Arrow */}
      </button>
    </div>
  );
};


// Progress Bar Component
const ProgressBar = ({ currentStepIndex, totalSteps }) => {
  return (
    <div style={styles.progressBarContainer}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div 
          key={index} 
          style={{
            ...styles.progressBubble, 
            backgroundColor: currentStepIndex === index ? '#333' : '#ccc'
          }}
        />
      ))}
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'space-between',
  },
  demoSelection: {
    display: 'flex',
    marginTop: '50px',

    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
mobileScrollButton: {
  backgroundColor: 'rgb(143, 107, 107)',
  color: '#fff',
  border: 'none',
  fontSize: '24px',
  padding: '1px 5px 5px 5px',
  boxShadow: `
      10px 20px 15px rgba(0, 0, 0, 0.25),  
      15px 10px 10px rgba(0, 0, 0, 0.15)
    `,
  width: '80px',  // Adjust width for mobile
  marginLeft: '20px',  // Auto margin for centering
  marginBottom: '10px',
  borderRadius: '4px',
  marginTop: '-80px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
},
  button: {
    backgroundColor: '#F8FAFC', // Warm color
    color: 'rgb(33, 31, 31)',
    border: 'none',
    borderRadius: '4px',
    fontSize:  '25px', // Conditionally adjust font size
    padding: '10px 20px',
    boxShadow: `
      10px 20px 15px rgba(148, 148, 148, 1),  
      15px 10px 10px rgba(148, 148, 148, 1)
    `,
    margin: '25px 0',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
  },
  buttonHover: {
    backgroundColor: '#e64a19', // Darker on hover
    transform: 'scale(1.05)',
  },
  demoPlayer: {
    textAlign: 'center',
    flex: '1',
    display: 'flex',
    marginTop: '-150px',
    padding: '0px',

    flexDirection: 'column',
    justifyContent: 'center',
  },
  videoTitle: {
    color: '#333',
  },
  description: {
    color: '#666',
    marginBottom: '10px',
  },
  video: {
    borderRadius: '8px',
    padding: '0px 0px 0px 0px',
    boxShadow: `
    10px 20px 15px rgba(0, 0, 0, 0.25),  
    15px 10px 10px rgba(0, 0, 0, 0.15)
  `,    marginBottom: '20px',
  },
  scrollContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
   
  },
  scrollButton: {
    backgroundColor: '#408ddb',
    color: '#fff',
    border: 'none',
    fontSize: '25px',
  
    marginLeft: '5px',
    borderRadius: '4px',
    padding: '5px 10px 10px 10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  scrollButton2: {
    backgroundColor: 'rgb(143, 107, 107)',
    color: '#fff',
    marginTop: '90px',
    boxShadow: `
    10px 20px 15px rgba(0, 0, 0, 0.25),  
    15px 10px 10px rgba(0, 0, 0, 0.15)
  `,
    border: 'none',
    fontSize: '24px',
    padding: '1px 5px 5px 5px',
    width: '100px',
    marginLeft: '205px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  progressBarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
  },
  progressBubble: {
    width: '20px',
    boxShadow: `
    10px 20px 15px rgba(0, 0, 0, 0.25),  
    15px 10px 10px rgba(0, 0, 0, 0.15)
  `,
    height: '10px',
    borderRadius: '15px',
    margin: '0 5px',
    transition: 'background-color 0.3s',
  },
};

// Responsive Styling

export default ParentComponent;
