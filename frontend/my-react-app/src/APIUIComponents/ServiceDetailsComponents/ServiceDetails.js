// import React from 'react';
// import BackButton from './BackButton';
// import Title from './Title';
// import TransformerForm from './TransformerForm';
// import SiloActions from './SiloActions';
// import TrainingData from './TrainingData';
// import ModelActions from './ModelActions';
// import IAMActions from './IAMActions';

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
      <BackButton onBack={onBack} />

      {selectedSubServiceLevel2 ? (
        <div style={{ color: 'tan', marginTop: '0px', marginBottom: '150px', width: '100%' }}>
          <Title title={getTitle()} />

          {selectedSubServiceLevel2.title === 'create title here' ? (
            <TransformerForm />
          ) : (
            <div>
              <h2 style={{ color: 'white', fontSize: '24px', textAlign: 'left' }}>&rarr; {selectedSubServiceLevel2.title}</h2>
              <div style={{ color: 'white', marginTop: '25px' }}>{selectedSubServiceLevel2.description}</div>
            </div>
          )}

          {selectedSubServiceLevel2.type === 'createTransformer' && (
            <>
              <SiloActions />
              <TrainingData />
              <ModelActions />
              <IAMActions />
            </>
          )}
        </div>
      ) : (
        // Handle case where no sub-service is selected
    
        <div>
          <Title title={getTitle()} />

          {getSubServices().map((subService) => (
            <div
              key={subService.id}
              style={{
                color: 'white',
                cursor: 'pointer',
                padding: '10px',
                borderBottom: '1px solid #ddd',
                marginBottom: '10px',
                borderRadius: '5px',
              }}
              onClick={() => onSubServiceLevel1Click(subService)}
            >
              <h3 style={{ margin: '0' }}>{subService.title}</h3>
              <p style={{ margin: '0' }}>{subService.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
