import React from 'react';

const ServiceList = ({ SyntaxServices, AuthorityServices, onServiceClick }) => {
  const commonItemStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '10px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <h3 style={{ color: 'tan' }}>ERP Transformers</h3>
          <div style={{ padding: '20px', color: 'tan' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {SyntaxServices.map((service, index) => (
                <h3
                  key={index}
                  style={commonItemStyle}
                  onClick={() => onServiceClick(service)}
                >
                  {service.title}
                </h3>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 style={{ color: 'tan' }}>Authority Transformers</h3>
          <div style={{ padding: '20px',  color: 'tan' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {AuthorityServices.map((service, index) => (
                <h3
                  key={index}
                  style={commonItemStyle}
                  onClick={() => onServiceClick(service)}
                >
                  {service.title}
                </h3>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
