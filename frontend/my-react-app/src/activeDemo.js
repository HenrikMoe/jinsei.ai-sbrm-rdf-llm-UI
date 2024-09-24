import React, { useState } from 'react';

// Sample Demo Data
const demoData = [
  {
    id: "demo1",
    title: "Demo 1",
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
    title: "Demo 2",
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
    title: "Demo 3",
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
    title: "Demo 4",
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

  const handleDemoSelect = (demo) => {
    setSelectedDemo(demo);
    setDemoSelected(true); // Set demoSelected to true when a demo is selected
  };

  const handleBackToSelection = () => {
    setSelectedDemo(null);
    setDemoSelected(false); // Set demoSelected to false to show demo selection
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Demo Player</h1>
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
      <h2 style={styles.subHeader}>Select a Demo</h2>
      {demoData.map((demo) => (
        <button
          key={demo.id}
          onClick={() => onDemoSelect(demo)}
          style={styles.button}
        >
          {demo.title}
        </button>
      ))}
    </div>
  );
};

// Demo Player Component
const DemoPlayer = ({ demo, onBack }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

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
      <h2 style={styles.videoTitle}>{currentStep.title}</h2>
      <p style={styles.description}>{currentStep.description}</p>
      <video width="400" controls style={styles.video}>
        <source src={currentStep.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.scrollContainer}>
        <button onClick={onBack} style={styles.scrollButton}>Back</button> {/* Back Button */}
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
  );
};

// Scroll Buttons Component
const ScrollButtons = ({ currentStepIndex, totalSteps, onNext, onPrevious }) => {
  return (
    <div style={styles.scrollContainer}>
      <button onClick={onPrevious} disabled={currentStepIndex === 0} style={styles.scrollButton}>
        Previous
      </button>
      <button onClick={onNext} disabled={currentStepIndex === totalSteps - 1} style={styles.scrollButton}>
        Next
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
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '50px auto', // Larger top margin
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    justifyContent: 'space-between',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    borderRadius: '8px',
    paddingBottom: '30px',
    paddingTop: '30px',

    borderBottom: '2px solid black',
    borderTop: '2px solid black',


    marginBottom: '0px',
    marginTop: '100px'
  },
  subHeader: {
   
    marginTop: '-200px',
    margin: '20px 0',
    color: '#555',
  },
  demoSelection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    margin: '5px 0',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  demoPlayer: {
    textAlign: 'center',
    flex: '1', // To grow and shrink within the container
    display: 'flex',
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
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  scrollContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  },
  scrollButton: {
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  progressBarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginTop: '20px',
  },
  progressBubble: {
    width: '20px',
    height: '10px',
    borderRadius: '15px',
    margin: '0 5px',
    transition: 'background-color 0.3s',
  },
};

export default ParentComponent;
