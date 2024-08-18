import React, { useState } from 'react';

const ServiceList = ({ SyntaxServices, AuthorityServices, onServiceClick }) => {
  const [showSyntax, setShowSyntax] = useState(false);
  const [showAuthority, setShowAuthority] = useState(false);
  const [showUtility, setShowUtility] = useState(false);

  const commonItemStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '10px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  const buttonStyle = {
    backgroundColor: '#ff6347',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    marginBottom: '10px',
    fontSize: '16px',
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <button style={buttonStyle} onClick={() => setShowSyntax(!showSyntax)}>
          Enterprise Finance
          </button>
          {showSyntax && (
            <div>
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
          )}
        </div>

        <div>
          <button style={buttonStyle} onClick={() => setShowAuthority(!showAuthority)}>
            Authority Filing
          </button>
          {showAuthority && (
            <div>
              <div style={{ padding: '20px', color: 'tan' }}>
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
          )}
        </div>
        <div>
          <button style={buttonStyle} onClick={() => setShowUtility(!showUtility)}>
            Utility Miscellaneous
          </button>
          {showUtility && (
            <div>
              <div style={{ padding: '20px', color: 'tan' }}>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
