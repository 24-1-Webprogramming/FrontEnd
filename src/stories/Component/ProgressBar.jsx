import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ totalSteps, currentStep, direction, width, height, color }) => {
  const progress = (currentStep / totalSteps) * 100; // 현재 진행 상태 계산
  const isHorizontal = direction === 'horizontal';
  const isReversed = direction === 'vertical' && progress !== 0;
  const containerStyles = {
    width: width,
    height: height,
    backgroundColor: '#d9d9d9',
    flexShrink: '0',
    display: 'flex',
    borderRadius: isHorizontal ? `${parseInt(height) / 2}px` : `${parseInt(width) / 2}px`,
    overflow: 'hidden',
    flexDirection: isHorizontal ? 'row' : 'column-reverse', // Vertical일 때 역방향으로 변경
  };

  const progressBarStyles = {
    width: isHorizontal ? `${progress}%` : '100%',
    height: isHorizontal ? '100%' : `${progress}%`,
    backgroundColor: color,
    transition: 'width 0.5s ease-in-out, height 0.5s ease-in-out',
    alignSelf: isReversed ? 'flex-end' : 'flex-start',
  };

  return (
    <div style={containerStyles}>
      <div style={progressBarStyles} />
    </div>
  );
};

ProgressBar.propTypes = {
  totalSteps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['#495EF6', '#72BBFF']).isRequired,
};

ProgressBar.defaultProps = {
  direction: 'horizontal',
  width: '100%',
  height: '8px',
  color: '#495EF6',
};

export default ProgressBar;
