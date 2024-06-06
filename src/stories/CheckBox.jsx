import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ checked, type }) => {
  const commonStyle = {
    width: '20px',
    height: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '16px',
    userSelect: 'none',
  };

  return (
    <div style={commonStyle}>
      {type === 'star' && !checked && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
          <path d="M4.5784 17.9616L5.93714 12.0877L6.00498 11.7944L5.77753 11.5972L1.22002 7.64598L7.24324 7.12313L7.5433 7.09708L7.66056 6.81965L10 1.28436L12.3394 6.81965L12.4567 7.09708L12.7568 7.12313L18.78 7.64598L14.2225 11.5972L13.995 11.7944L14.0629 12.0877L15.4216 17.9616L10.2583 14.8469L10 14.6911L9.74173 14.8469L4.5784 17.9616Z" stroke="#495EF6"/>
        </svg>
      )}
      {type === 'star' && checked && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="#495EF6">
          <path d="M10 1.28436L12.3394 6.81965L12.4567 7.09708L12.7568 7.12313L18.78 7.64598L14.2225 11.5972L13.995 11.7944L14.0629 12.0877L15.4216 17.9616L10.2583 14.8469L10 14.6911L9.74173 14.8469L4.5784 17.9616L5.93714 12.0877L6.00498 11.7944L5.77753 11.5972L1.22002 7.64598L7.24324 7.12313L7.5433 7.09708L7.66056 6.81965L10 1.28436Z"/>
        </svg>
      )}
      {type === 'square' && !checked && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" stroke="#495EF6"/>
        </svg>
      )}
      {type === 'square' && checked && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" fill="#495EF6" stroke="#495EF6"/>
          <path d="M6.5 9L9.32105 13.6196C9.44305 13.8194 9.73664 13.8087 9.8438 13.6006L13.5001 6.50015" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )}
    </div>
  );
};

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['star', 'square']).isRequired,
};

export default CheckBox;
