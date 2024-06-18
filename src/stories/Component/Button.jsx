import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 * 
 * @param {string} type - The button type (e.g., 'primary', 'border', 'warning')
 * @param {string} backgroundColor - The background color of the button
 * @param {string} color - The text color of the button
 * @param {string} size - The size of the button ('small', 'medium', 'large')
 * @param {string} label - The text label of the button
 * @param {string} width - The width of the button, can be in px or % to fit container
 * @param {string} height - The height of the button
 * @param {Object} props - Other props passed to the button
 */
export const Button = ({ type, backgroundColor, color, size, label, width, height, ...props }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  let mode = 'storybook-button--primary';
  if (hover && type === 'border') {
    mode = 'storybook-button--primary'; // Change to primary on hover if type is border
  } else {
    switch (type) {
      case 'border':
        mode = 'storybook-button--border';
        break;
      case 'warning':
        mode = 'storybook-button--warning';
        break;
      default:
        mode = 'storybook-button--primary'; // Ensures default is primary
        break;
    }
  }

  const style = {
    backgroundColor,
    color,
    width, // Can be a percentage or pixel value to adjust to the container size
    height
  };

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'border', 'warning']),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  width: PropTypes.string, // Can be a percentage ('50%') or pixels ('200px')
  height: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  color: null,
  primary: false,
  size: 'medium',
  width: '100%', // Default width now set to 100% for full width by default
  height: '56px',
  disabled: false,
  onClick: undefined,
};
