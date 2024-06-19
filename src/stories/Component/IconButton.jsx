import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = ({ src, text, textSize, textColor, borderRadius, width, height, iconWidth, iconHeight, iconTextSpacing, disabled, currentBackgroundColor, hoverBackgroundColor, disabledIcon, disabledFontcolor, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    borderRadius,
    width,
    height,
    backgroundColor: isHovered ? hoverBackgroundColor : currentBackgroundColor,
    cursor: disabled ? '' : 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const iconStyle = {
    width: `${iconWidth}px`,
    height: `${iconHeight}px`,
  };

  const textStyle = {
    fontSize: textSize,
    color: disabled ? disabledFontcolor : textColor,
    marginTop: `${iconTextSpacing}px`,
    whiteSpace: 'nowrap',
    fontWeight: '500' // 텍스트 굵기를 굵게 설정
  };

  const iconSrc = disabled && disabledIcon ? disabledIcon : src;

  return (
    <button 
      className="icon-button" 
      style={buttonStyle} 
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
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
  onClick: PropTypes.func, // 클릭 이벤트 핸들러
};

IconButton.defaultProps = {
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  iconWidth: '60%', // 기본 아이콘 너비
  iconHeight: '60%', // 기본 아이콘 높이
  iconTextSpacing: 6, // 기본 아이콘과 텍스트 사이의 간격
  disabled: false,
  currentBackgroundColor: 'transparent',
  hoverBackgroundColor: 'rgba(0, 0, 0, 0.1)',
  textSize: '11px', // 기본 텍스트 크기
  textColor: '#B2BAC2', // 기본 텍스트 색상
  disabledIcon: null,
  disabledFontcolor: '#495EF6', // disabled 상태일 때 기본 텍스트 색상
  onClick: null, // 기본 클릭 이벤트 핸들러
};

export default IconButton;