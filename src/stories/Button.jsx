import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
<<<<<<< HEAD
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
=======
export const Button = ({ type, backgroundColor, size, label, ...props }) => {
  let mode = 'storybook-button--primary';
  switch (type){
    case 'border':
      mode = 'storybook-button--border';
      break;
    case 'warning':
      mode = 'storybook-button--warning';
      break;
  }
>>>>>>> origin/Daun
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
<<<<<<< HEAD
=======
   * Type of Button
   */
  type: PropTypes.oneOf(['primary', 'border', 'warning']),
  /**
>>>>>>> origin/Daun
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
<<<<<<< HEAD
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
=======
   * Disabled status of Button
   */
  disabled: PropTypes.bool,
  /**
   * Selection type of Button
   */
  selection: PropTypes.bool,
  /**
   * width of Button
   */
  width: PropTypes.string,

>>>>>>> origin/Daun
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
<<<<<<< HEAD
=======
  disabled: false,
>>>>>>> origin/Daun
  onClick: undefined,
};
