import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CharacterIcon from '../../../Icon/Crying2.svg';
import ProgressBar from '../../Component/ProgressBar';

export const HeadLine = () => {
  const [currentDate, setCurrentDate] = React.useState('');
  React.useEffect(() => {
    const today = new window.Date();
    const formattedDate = today.toISOString().slice(0, 10).replace(/-/g, '.');
    setCurrentDate(formattedDate);
  }, []);

  return (
    <Line>
      <LeftContainer>
        <BodyProfileLabel>바디프로필</BodyProfileLabel>
        <DDay>D-16</DDay>
      </LeftContainer>
      <Date>{currentDate}</Date>
    </Line>
  );
};

export const CharacterSector = ({ continuousExerciseDays, characterMessage, currentSteps}) => (
  <CharacterSection>
    <CharacterContainer>
      <CharacterMessageContainer>
        <CharacterMessage>{characterMessage}</CharacterMessage>
      </CharacterMessageContainer>
      <img src={CharacterIcon} alt="Character" />
    </CharacterContainer>
    <ExerciseInfo>
      <ExerciseDaysText>연속 운동</ExerciseDaysText>
      <Spacer />
      <ExerciseCountText>{continuousExerciseDays}일째..</ExerciseCountText>
      <Divider />
      <ProgressBars>
        <ProgressBarContainer>
          <ProgressLabel>물 섭취</ProgressLabel>
          <ProgressBar
            totalSteps={100}
            currentStep={currentSteps[0]}
            direction="horizontal"
            width="130px"
            height="8px"
            color="#72BBFF"
          />
        </ProgressBarContainer>
        <ProgressBarContainer>
          <ProgressLabel>순탄수</ProgressLabel>
          <ProgressBar
            totalSteps={100}
            currentStep={currentSteps[1]}
            direction="horizontal"
            width="130px"
            height="8px"
            color="#4D61F5"
          />
        </ProgressBarContainer>
        <ProgressBarContainer>
          <ProgressLabel>단백질</ProgressLabel>
          <ProgressBar
            totalSteps={100}
            currentStep={currentSteps[2]}
            direction="horizontal"
            width="130px"
            height="8px"
            color="#4D61F5"
          />
        </ProgressBarContainer>
        <ProgressBarContainer>
          <ProgressLabel>지방</ProgressLabel>
          <ProgressBar
            totalSteps={100}
            currentStep={currentSteps[3]}
            direction="horizontal"
            width="130px"
            height="8px"
            color="#4D61F5"
          />
        </ProgressBarContainer>
      </ProgressBars>
    </ExerciseInfo>
  </CharacterSection>
);

CharacterSector.propTypes = {
  continuousExerciseDays: PropTypes.number.isRequired,
  characterMessage: PropTypes.string.isRequired,
  currentSteps: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

CharacterSector.defaultProps = {
    continuousExerciseDays: 0,
    characterMessage: '',
    currentSteps: [0, 0, 0, 0],
};

const Line = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  background-color: #5467f5;
  margin-top: 20%;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
`;

const BodyProfileLabel = styled.button`
  border-radius: 7px;
  background: #fff;
  display: flex;
  padding: 4px 20px;
  justify-content: center;
  align-items: center;
  border: none;
  color: #2f4bf7;
  font-family: 'Pretendard Variable';
  font-size: 17px;
  font-weight: 800;
`;

const DDay = styled.span`
  color: #fff;
  font-family: 'Pretendard Variable';
  font-size: 17px;
  font-weight: 800;
`;

const Date = styled.span`
  color: #fff;
  font-family: 'Pretendard Variable';
  font-size: 17px;
  font-weight: 500;
  margin-right: 20px;
`;

const CharacterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 140px;
`;

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterMessageContainer = styled.div`
  background-color: #e0e7ff;
  border-radius: 20px;
  padding: 5px 10px;
  margin-bottom: 10px;
`;

const CharacterMessage = styled.span`
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-weight: 700;
  color: #4f46e5;
`;

const ExerciseInfo = styled.div`
  margin-left: 20px;
  width: 50%;
`;

const ExerciseDaysText = styled.span`
  font-family: 'Pretendard Variable';
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #000;
`;

const Spacer = styled.div`
  height: 10px;
`;

const ExerciseCountText = styled.span`
  font-family: 'Pretendard Variable';
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 10px;
  color: #4d61f5;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 10px 0;
`;

const ProgressBars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProgressLabel = styled.span`
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-weight: 500;
  color: #000;
  width: 50px;
`;