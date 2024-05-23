// ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: '100%', height: '10px', backgroundColor: '#e0e0e0', marginBottom: '20px' }}>
      <div 
        style={{ 
          width: `${progress}%`, 
          height: '100%', 
          backgroundColor: '#5467f5', 
          transition: 'width 0.5s ease-in-out' 
        }} 
      />
    </div>
  );
};

export default ProgressBar;
