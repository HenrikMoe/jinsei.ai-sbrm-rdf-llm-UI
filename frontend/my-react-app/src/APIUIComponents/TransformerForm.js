import React from 'react';

const TransformerForm = () => {
  return (
    <div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}> 
        <div><h3 style={{color: 'white'}}>Transformer Title</h3></div>
        <div>
          <input
            type="text"
            style={{
              color: 'white',
              backgroundColor: 'transparent',
              borderLeft: '1px solid white',
              borderBottom: '1px solid white',
              borderRadius: '5px',
              outline: 'none',
              marginTop: '25px',
              marginLeft: '-250px',
              width: '300px',
            }}
            placeholder='Create transformer title'
          />
        </div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '5px'}}>
        <div>
          <h3 style={{color: 'white'}}>Description</h3>
        </div>
        <div>
          <input
            type="text"
            style={{
              color: 'white',
              backgroundColor: 'transparent',
              borderLeft: '1px solid white',
              borderBottom: '1px solid white',
              borderRadius: '5px',
              outline: 'none',
              marginLeft: '-200px',
              marginTop: '25px',
              width: '400px'
            }}
            placeholder='Create transformer description'
          />
        </div>
      </div>
    </div>
  );
};

export default TransformerForm;
