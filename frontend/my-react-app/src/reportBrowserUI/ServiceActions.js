import React, { useState } from 'react';
import { FaPause, FaStop, FaRedo, FaCopy } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

const ServiceActions = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleRebootClick = () => {
    setIsAnimating(true);
    // Remove the animation class after 1 second to allow re-triggering
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div style={styles.container}>
      <Tooltip id="pause-service" place="top" effect="solid">Pause Service</Tooltip>
      <button data-tip="Pause Service" data-for="pause-service" style={styles.button}>
        <FaPause size={24} />
      </button>

      <Tooltip id="stop-service" place="top" effect="solid">Stop Service</Tooltip>
      <button data-tip="Stop Service" data-for="stop-service" style={styles.button}>
        <FaStop size={24} />
      </button>

      <Tooltip id="reboot-service" place="top" effect="solid">Reboot Service</Tooltip>
      <button
        data-tip="Reboot Service"
        data-for="reboot-service"
        style={{ ...styles.button, ...styles.rotateButton(isAnimating) }}
        onClick={handleRebootClick}
      >
        <FaRedo size={24} />
      </button>

      <Tooltip id="copy-service" place="top" effect="solid">Copy Service</Tooltip>
      <button data-tip="Copy Service" data-for="copy-service" style={styles.button}>
        <FaCopy size={24} />
      </button>

      {/* Add keyframes style element */}
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '30px',
    width: '100px'
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '2px',
    color: 'white',
    fontSize: '1px',
    transition: 'color 0.3s ease',
  },
  rotateButton: (isAnimating) => ({
    animation: isAnimating ? 'rotate 1s linear' : 'none',
  }),
};

export default ServiceActions;
