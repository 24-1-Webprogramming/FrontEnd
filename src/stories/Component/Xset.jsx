import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components

const XsetContainer = styled.div`
  display: flex;
  width: 100%;
  height: 77px;
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
  gap: 10px;
`;

const ExerciseStats = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const NumberText = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #495EF6;
`;

const ExerciseText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #404040;
`;

const ExerciseSets = styled(ExerciseText)`
  font-size: 16px;
  font-weight: 500;
`;

const ExerciseWeight = styled(ExerciseText)`
  font-size: 15px;
  font-weight: 400;
`;

const ExerciseReps = styled(ExerciseWeight)`
  font-size: 15px;
  font-weight: 400;
`;

const ExerciseTotalWeight = styled(ExerciseText)`
  font-size: 16px;
  font-weight: 500;
`;

const ExerciseKg = styled(ExerciseText)`
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
          <NumberText>{number}</NumberText>
          <ExerciseText>{bodyPart} | {exercise}</ExerciseText>
          <ExerciseSets>{sets}세트</ExerciseSets>
        </ExerciseDetails>
        <ExerciseStats>
          <div>
            <ExerciseWeight>{weight}kg</ExerciseWeight>
            <ExerciseText> X </ExerciseText>
            <ExerciseReps>{reps}회</ExerciseReps>
          </div>
          <ExerciseTotalWeight>{totalWeight}kg</ExerciseTotalWeight>
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
