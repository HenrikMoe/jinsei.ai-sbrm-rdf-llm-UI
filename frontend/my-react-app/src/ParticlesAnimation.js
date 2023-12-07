import React from 'react';
import Particles from 'react-particles-js';

const ParticlesAnimation = () => {
  const particleParams = {
    particles: {
      number: {
        value: 80,
      },
      size: {
        value: 3,
      },
    },
    // Add other particle configuration as needed
  };

  return (
    <Particles
      params={particleParams}
      style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
  );
};

export default ParticlesAnimation;
