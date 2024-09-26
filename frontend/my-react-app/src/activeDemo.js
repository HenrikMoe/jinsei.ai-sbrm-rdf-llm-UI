import React, { useState, useEffect } from 'react';
import control from './noun-control-panel-7093048.png'
import Config from './config.png'
import Transformer from './noun-transformer-5878572.png'
import ERP from './noun-enterprise-7090016.png'
// Sample Demo Data


const demoData = [
  {
    id: "demo1",
    title: "Control Panel Overview",
    image: control,
    description: "This is a description for Demo 1.",
    steps: [
      {
        id: 'step1',
        title: 'Step 1 Title',
        description: 'Description for Step 1',
        videoUrl: "https://example.com/video1.mp4"

      },
      {
        id: 'step2',
        title: 'Step 2 Title',
        description: 'Description for Step 2',
        videoUrl: "https://example.com/video2.mp4"
      },
      {
        id: 'step3',
        title: 'Step 3 Title',
        description: 'Description for Step 3',
        videoUrl: "https://example.com/video3.mp4"
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
        title: 'Step 1 Title',
        description: 'Description for Step 1',
        videoUrl: "https://example.com/video4.mp4"
      },
      {
        id: 'step2',
        title: 'Step 2 Title',
        description: 'Description for Step 2',
        videoUrl: "https://example.com/video5.mp4"
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
        title: 'Step 1 Title',
        description: 'Description for Step 1',
        videoUrl: "https://example.com/video6.mp4"
      }
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
        videoUrl: "https://example.com/video7.mp4"
      },
      {
        id: 'step2',
        title: 'Step 2 Title',
        description: 'Description for Step 2',
        videoUrl: "https://example.com/video8.mp4"
      },
      {
        id: 'step3',
        title: 'Step 3 Title',
        description: 'Description for Step 3',
        videoUrl: "https://example.com/video9.mp4"
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
      <video 
          width={isMobile ? "300" : "400"} 
          controls 
          style={styles.video}
        >
          <source src={currentStep.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
