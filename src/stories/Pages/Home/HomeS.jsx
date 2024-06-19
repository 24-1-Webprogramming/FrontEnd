import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CharacterIcon from '../../assets/DumbbellCrying2.svg';
import ProgressBar from '../../Component/ProgressBar';

const calculateDDay = (targetDate) => {
  const today = new window.Date();
  const target = new window.Date(targetDate);
  const diffTime = target - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `D-${diffDays}`;
};

export const HeadLine = ({ dDayLabel, targetDate }) => {
  const [currentDate, setCurrentDate] = React.useState('');
  const [dDay, setDDay] = React.useState('');

  React.useEffect(() => {
    const today = new window.Date();
    const formattedDate = today.toISOString().slice(0, 10).replace(/-/g, '.');
    setCurrentDate(formattedDate);

    if (targetDate) {
      setDDay(calculateDDay(targetDate));
    }
  }, [targetDate]);

  return (
    <Line>
      <LeftContainer>
        <DDayLabel>{dDayLabel}</DDayLabel>
        <DDay>{dDay}</DDay>
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
            height="10px"
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
            height="10px"
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
            height="10px"
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
            height="10px"
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
  position: fixed;
  top: 79px;
  width: 520px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  background-color: #5467f5;
`;

const TopLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  z-index: 1000;
  padding: 10px 10px 20px 10px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 30px;
`;

const DDayLabel = styled.button`
  border-radius: 7px;
  background: #fff;
  display: flex;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  border: none;
  color: #2f4bf7;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 800;
`;

const DDay = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 19px;
  font-weight: 500;
  letter-spacing: 0.4px;
  justify-content: center;
  padding-top: 2px;
`;

const Date = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 400;
  margin-right: 40px;
  letter-spacing: 0.4px;
`;

const CharacterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 140px;
  margin-left: 30px;
`;

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterMessageContainer = styled.div`
  background-color: #e0e7ff;
  border-radius: 20px;
  padding: 2px 14px;
  margin-bottom: 10px;
`;

const CharacterMessage = styled.span`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 700;
  color: #4f46e5;
`;

const ExerciseInfo = styled.div`
  margin-left: 30px;
  width: 50%;
`;

const ExerciseDaysText = styled.span`
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 12px;
  color: #404040;
`;

const Spacer = styled.div`
  height: 10px;
`;

const ExerciseCountText = styled.span`
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 10px;
  letter-spacing: 0.2px;
  color: #4d61f5;
`;

const Divider = styled.div`
  width: 80%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 10px 0;
`;

const ProgressBars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProgressLabel = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  color: #404040;
  width: 50px;
`;