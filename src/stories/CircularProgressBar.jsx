import React from 'react';
import PropTypes from 'prop-types';

const CircularProgressBar = ({ totalSteps, currentStep, radius, strokeWidth, showPercentage, showCustomText, customText }) => {
  // 각도 계산
  const progressAngle = (currentStep / totalSteps) * 360;

  // 반지름 및 선의 두께 설정
  const circleRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * circleRadius;

  // 진행 바의 스타일
  const progressStyle = {
    strokeDasharray: `${circumference}px`,
    strokeDashoffset: `${(100 - (currentStep / totalSteps) * 100) / 100 * circumference}px`,
    transition: 'stroke-dashoffset 0.5s ease-in-out', // transition 효과 추가
  };

  // 진행도의 퍼센티지를 계산
  const percentage = ((currentStep / totalSteps) * 100).toFixed(0);

  // customText의 위치를 설정
  const customTextStyle = {
    display: showCustomText ? 'block' : 'none',
    fill: '#000000', // 검은색으로 설정
    fontSize: '16px',
    textAnchor: 'middle',
    dominantBaseline: 'middle',
  };

  // Percentage와 customText의 중앙 위치 계산
  const percentageY = showCustomText ? '45%' : '50%';
  const customTextY = showPercentage ? '55%' : '50%';

  return (
    <svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
      <circle
        cx={radius}
        cy={radius}
        r={circleRadius}
        fill="transparent"
        stroke="#d9d9ec"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={radius}
        cy={radius}
        r={circleRadius}
        fill="transparent"
        stroke="#5467f5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        style={progressStyle}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      {showPercentage && (
        <text
          x="50%"
          y={percentageY}
          fill="#5467f5"
          fontSize="26px"
          fontWeight="800"
          lineweight="normal"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {percentage}%
        </text>
      )}
      {showCustomText && (
        <text
          x="50%"
          y={customTextY}
          style={customTextStyle}
        >
          {customText}
        </text>
      )}
    </svg>
  );
};

CircularProgressBar.propTypes = {
  totalSteps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  showPercentage: PropTypes.bool.isRequired,
  showCustomText: PropTypes.bool.isRequired,
  customText: PropTypes.string,
};

CircularProgressBar.defaultProps = {
  radius: 50, // 기본 반지름
  strokeWidth: 10, // 기본 선의 두께
  showPercentage: false, // 기본값은 false
  showCustomText: false, // 기본값은 false
  customText: '', // 기본값은 빈 문자열
};

export default CircularProgressBar;
