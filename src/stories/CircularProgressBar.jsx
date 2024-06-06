import React from 'react';
import PropTypes from 'prop-types';

const CircularProgressBar = ({ totalSteps, currentStep, radius, strokeWidth, showPercentage, Text }) => {
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
        stroke="#495EF6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        style={progressStyle}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      {showPercentage && (
        <text
          x="50%"
          y="45%"
          fill="#495EF6"
          fontSize="26px"
          fontWeight="800"
          lineweight="normal"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {percentage}%
        </text>
      )}
      {Text && (
        <text
          x="50%"
          y="70%"
          fill="#000000"
          fontSize="12px"
          fontWeight={700}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {Text}
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
  Text: PropTypes.string,
};

CircularProgressBar.defaultProps = {
  radius: 50, // 기본 반지름
  strokeWidth: 10, // 기본 선의 두께
  showPercentage: false, // 기본값은 false
  Text: '', // 기본값은 빈 문자열
};

export default CircularProgressBar;
