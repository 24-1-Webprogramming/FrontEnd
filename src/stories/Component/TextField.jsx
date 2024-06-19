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
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
  color: gray;
  width: 100%;
  text-align: left;
`;

const StyledTextField = styled.input`
  outline: none;
  font-family: Pretendard;
  border: none;
  padding: 8px;
  border-radius: 0px;
  font-size: ${props => props.fontSize || '20px'}; // 폰트 크기를 props에서 받거나 기본값으로 20px 사용
  background-color: transparent;
  transition: 200ms;
  border-bottom: 2px solid gray;
  width: ${props => props.width || '321px'}; // 너비를 props에서 받거나 기본값으로 321px 사용
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
  color: #4d4d4d;
  font-size: 18px;
  font-weight: 500;
  margin-right: 50px;
  margin-bottom: 10px;
`;

const TextField = React.forwardRef(function TextField({ label, maxLength, allowedCharsType, customText, showCharCount, width, fontSize, ...props }, ref) {
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
        width={width} // 너비 prop 전달
        fontSize={fontSize} // 폰트 크기 prop 전달
        {...props}
      />
      {showCharCount && maxLength && (
        <MaxLength>
          <span>{length}</span> / {maxLength}
        </MaxLength>
      )}
      {!showCharCount && customText && (
        <CustomText>{customText}</CustomText>
      )}
    </Div>
  );
});

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  showCharCount: PropTypes.bool,
  allowedCharsType: PropTypes.oneOf(['alphanumeric', 'numeric', 'numericWithDecimal', 'alphabetic', '']),
  customText: PropTypes.string,
  width: PropTypes.string, // 너비 속성 추가
  fontSize: PropTypes.string, // 폰트 크기 속성 추가
};

TextField.defaultProps = {
  showCharCount: false,
  allowedCharsType: '',
  customText: '',
  width: '321px', // 기본 너비 설정
  fontSize: '20px', // 기본 폰트 크기 설정
};

export default TextField;
