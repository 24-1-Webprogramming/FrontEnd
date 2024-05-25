// TextBox.jsx

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const allowedCharsMap = {
  alphanumeric: 'a-zA-Z0-9',
  numeric: '0-9',
  numericWithDecimal: '0-9.',
  alphabetic: 'a-zA-Z',
};

const TextBox = ({ value: propValue, placeholder, maxLength, showCharCount, allowedCharsType, customText, onChange }) => {
  const [value, setValue] = useState(propValue || '');
  const [charCount, setCharCount] = useState((propValue || '').length);

  useEffect(() => {
    setValue(propValue);
    setCharCount((propValue || '').length);
  }, [propValue]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const allowedChars = allowedCharsMap[allowedCharsType] || '';

    if (allowedChars) {
      const regex = new RegExp(`^[${allowedChars}]*$`);
      if (!regex.test(inputValue)) return;
    }

    if (inputValue.length <= maxLength) {
      setValue(inputValue);
      setCharCount(inputValue.length);
      // onChange prop을 호출하여 부모 컴포넌트로 변경된 값을 전달
      if (typeof onChange === 'function') {
        onChange(inputValue);
      }
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '10px',
          border: 'none',
          borderBottom: '2px solid #ccc',
          transition: 'border-bottom-color 0.3s ease',
          outline: 'none',
        }}
      />
      {customText && !showCharCount && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            color: '#ccc',
            fontSize: '12px',
            marginRight: '10px',
            marginBottom: '8px',
          }}
        >
          {customText}
        </div>
      )}
      {showCharCount && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            color: charCount > maxLength ? 'red' : '#ccc',
            fontSize: '12px',
            marginRight: '10px',
            marginBottom: '8px',
          }}
        >
          {charCount}/{maxLength}
        </div>
      )}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: value ? '#5467f5' : '#ccc',
          transition: 'background-color 0.3s ease',
        }}
      />
    </div>
  );
};

TextBox.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  showCharCount: PropTypes.bool,
  allowedCharsType: PropTypes.oneOf(['alphanumeric', 'numeric', 'numericWithDecimal', 'alphabetic', '']),
  customText: PropTypes.string,
  onChange: PropTypes.func, // onChange prop 추가
};

TextBox.defaultProps = {
  showCharCount: true,
  allowedCharsType: '',
  customText: '',
};

export default TextBox;
