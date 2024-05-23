import React, { useState } from 'react';

const TextBox = ({ placeholder, maxLength }) => {
  const [value, setValue] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxLength) {
      setValue(inputValue);
      setCharCount(inputValue.length);
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

export default TextBox;
