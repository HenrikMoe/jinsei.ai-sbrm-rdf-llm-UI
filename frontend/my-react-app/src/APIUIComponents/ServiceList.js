import React from 'react';

const ServiceList = ({ SyntaxServices, AuthorityServices, onServiceClick }) => {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: 'tan' }}>Jinsei Syntax Transformers</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {SyntaxServices.map((service, index) => (
            <li key={index} style={{ marginBottom: '10px', cursor: 'pointer', color: 'white' }} onClick={() => onServiceClick(service)}>
              {service.title}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 style={{ color: 'tan' }}>Jinsei Authority Transformers</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {AuthorityServices.map((service, index) => (
            <li key={index} style={{ marginBottom: '10px', cursor: 'pointer', color: 'white' }} onClick={() => onServiceClick(service)}>
              {service.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceList;
