import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const allowedCharsMap = {
  alphanumeric: 'a-zA-Z0-9',
  numeric: '0-9',
  numericWithDecimal: '0-9.',
  alphabetic: 'a-zA-Z',
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  color: gray;
`;

const StyledTextField = styled.input`
  outline: none;
  border: none;
  padding: 8px;
  border-radius: 0px;
  font-size: 20px;
  background-color: transparent;
  transition: 200ms;
  border-bottom: 2px solid gray;
  &:focus {
    border-bottom: 2px solid blue;
  }
`;

const MaxLength = styled.span`
  position: absolute;
  bottom: 14px;
  right: 8px;
  font-size: 16px;
  color: gray;
  letter-spacing: -5%;
  span {
    color: black;
  }
`;

const CustomText = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
  margin-bottom: 8px;
`;

export const TextBox = React.forwardRef(function TextBox({ label, maxLength, allowedCharsType, customText, showCharCount, ...props }, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);

  const [length, setLength] = useState(0);

  useEffect(() => {
    const current = inputRef.current;

    const handler = (e) => {
      setTimeout(() => {
        const target = e.target;
        let inputValue = target.value;
        const allowedChars = allowedCharsMap[allowedCharsType] || '';

        if (allowedChars) {
          const regex = new RegExp(`^[${allowedChars}]*$`);
          if (!regex.test(inputValue)) {
            inputValue = inputValue.slice(0, inputValue.length - 1);
          }
        }

        if (inputValue.length <= maxLength) {
          target.value = inputValue;
          setLength(inputValue.length);
        } else {
          target.value = inputValue.slice(0, maxLength);
          setLength(maxLength);
        }
      }, 0);
    };

    if (current) {
      current.addEventListener("input", handler);
    }

    return () => {
      if (current) {
        current.removeEventListener("input", handler);
      }
    };
  }, [maxLength, allowedCharsType]);

  return (
    <Div>
      {label && <Label>{label}</Label>}
      <StyledTextField
        ref={inputRef}
        maxLength={maxLength}
        {...props}
      />
      {showCharCount && maxLength && (
        <MaxLength>
          <span>{length}</span> / {maxLength}
        </MaxLength>
      )}
      {!showCharCount && customText && (
        <CustomText>
          {customText}
        </CustomText>
      )}
    </Div>
  );
});

TextBox.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  showCharCount: PropTypes.bool,
  allowedCharsType: PropTypes.oneOf(['alphanumeric', 'numeric', 'numericWithDecimal', 'alphabetic', '']),
  customText: PropTypes.string,
};

TextBox.defaultProps = {
  showCharCount: false,
  allowedCharsType: '',
  customText: '',
};

export default TextBox;
