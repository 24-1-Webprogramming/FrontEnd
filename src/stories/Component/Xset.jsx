import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components

const XsetContainer = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  background: #FFF;
  padding: 10px;
`;

const ExerciseInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const ExerciseDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const ExerciseStats = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: #747474;
  margin-top: -10px;
`;

const NumberText = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #495EF6;
`;

const ExerciseText = styled.span`
  font-size: 17px;
  font-weight: 500;
  color: #404040;
  font-family: Pretendard;
  font-weight: 500;
`;

const ExerciseWeight = styled(ExerciseText)`
  font-size: 15px;
  font-weight: 400;
`;

// Xset Component
const Xset = ({ number, bodyPart, exercise, sets, weight, reps }) => {
  const totalWeight = reps * weight;
  return (
    <XsetContainer>
      <ExerciseInfo>
        <ExerciseDetails>
          <ExerciseText><b>{bodyPart}</b></ExerciseText>
          <ExerciseText>{exercise}</ExerciseText>
          <ExerciseText>{sets}세트</ExerciseText>
        </ExerciseDetails>
        <ExerciseStats>
            {weight}kg X {reps}회 · {totalWeight}kg
        </ExerciseStats>
      </ExerciseInfo>
    </XsetContainer>
  );
};

// PropTypes and DefaultProps
Xset.propTypes = {
  number: PropTypes.number.isRequired,
  bodyPart: PropTypes.string.isRequired,
  exercise: PropTypes.string.isRequired,
  sets: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired,
};

export default Xset;
