import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, backgroundColor, size, label, width, height, ...props }) => {
  let mode = 'storybook-button--primary';
  switch (type) {
    case 'border':
      mode = 'storybook-button--border';
      break;
    case 'warning':
      mode = 'storybook-button--warning';
      break;
  }

  const style = {
    backgroundColor,
    width, // Respect the width prop if provided
    height // Respect the height prop if provided
  };

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={style}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'border', 'warning']),
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  width: PropTypes.string,
  height: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  width: '341px', // Default width as prop
  height: '56px', // Default height as prop
  disabled: false,
  onClick: undefined,
};
