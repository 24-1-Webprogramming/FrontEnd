import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = ({ src, text, textSize, textColor, borderRadius, width, height, iconWidth, iconHeight, iconTextSpacing, disabled, currentBackgroundColor, hoverBackgroundColor, disabledIcon, disabledFontcolor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    borderRadius,
    width,
    height,
    backgroundColor: isHovered ? hoverBackgroundColor : currentBackgroundColor,
    cursor: disabled ? '' : 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    flexDirection: 'column', // 아이콘과 텍스트를 상하로 정렬하기 위해 추가
    justifyContent: 'center', // 아이콘과 텍스트를 수직 가운데 정렬하기 위해 추가
    alignItems: 'center', // 아이콘과 텍스트를 수평 가운데 정렬하기 위해 추가
  };

  const iconStyle = {
    width: `${iconWidth}px`, // 픽셀 단위로 변경
    height: `${iconHeight}px`, // 픽셀 단위로 변경
  };

  const textStyle = {
    fontSize: textSize,
    color: disabled ? disabledFontcolor : textColor, // disabled 상태일 때 텍스트 색상 변경
    marginTop: `${iconTextSpacing}px`, // 아이콘과 텍스트 사이의 간격을 props로 설정된 값으로 지정
    whiteSpace: 'nowrap', // 텍스트가 너무 길어질 경우 줄바꿈을 방지하기 위해 추가
  };

  const iconSrc = disabled && disabledIcon ? disabledIcon : src; // disabled 상태일 때 아이콘 이미지 변경

  return (
    <button 
      className="icon-button" 
      style={buttonStyle} 
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={iconSrc} alt="" style={iconStyle} />
      {text && <span style={textStyle}>{text}</span>}
    </button>
  );
};

IconButton.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string,
  textSize: PropTypes.string,
  textColor: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  iconWidth: PropTypes.number.isRequired, // 픽셀 단위로 변경
  iconHeight: PropTypes.number.isRequired, // 픽셀 단위로 변경
  iconTextSpacing: PropTypes.number,
  disabled: PropTypes.bool,
  currentBackgroundColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  disabledIcon: PropTypes.string, // disabled 상태일 때 아이콘의 경로
  disabledFontcolor: PropTypes.string, // disabled 상태일 때 텍스트의 색상
};

IconButton.defaultProps = {
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  iconWidth: 24, // 기본 아이콘 너비
  iconHeight: 24, // 기본 아이콘 높이
  iconTextSpacing: 6, // 기본 아이콘과 텍스트 사이의 간격
  disabled: false,
  currentBackgroundColor: 'transparent',
  hoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
  textSize: '11px', // 기본 텍스트 크기
  textColor: '#B2BAC2', // 기본 텍스트 색상
  disabledIcon: null,
  disabledFontcolor: '#495EF6', // disabled 상태일 때 기본 텍스트 색상
};

export default IconButton;
