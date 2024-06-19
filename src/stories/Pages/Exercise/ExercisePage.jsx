import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Component/Button';
import styled from 'styled-components';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import NavBar from '../../Component/NavBar';
import Card from '../../Component/Card';
import ProgressBar from '../../Component/ProgressBar';
import CircularProgressBar from '../../Component/CircularProgressBar';
import GymButton from '../../Component/GymButton';
import { ChangeR } from '../../Component/ButtonS';
import Xset from '../../Component/Xset';
import { ExerciseCard } from '../../Component/CardS';

const ExercisePage = () => {
    const [nickname, setNickname] = useState('');
    const [exerciseData, setExerciseData] = useState([]);
  
    useEffect(() => {
      const savedNickname = localStorage.getItem('nickname');
      if (savedNickname) {
        setNickname(savedNickname);
      }
      // Simulate fetching data from an API
      const suggestionData = [
        {
          id: 1,
          number: 1,
          bodyPart: '하체',
          exercise: '스쿼트',
          sets: 4,
          weight: 20,
          reps: 12,
        },
        {
          id: 2,
          number: 2,
          bodyPart: '상체',
          exercise: '벤치 프레스',
          sets: 3,
          weight: 30,
          reps: 10,
        },
        {
          id: 3,
          number: 3,
          bodyPart: '하체',
          exercise: '레그 프레스',
          sets: 5,
          weight: 50,
          reps: 15,
        },
        {
          id: 4,
          number: 4,
          bodyPart: '상체',
          exercise: '숄더 프레스',
          sets: 3,
          weight: 25,
          reps: 12,
        },
        {
          id: 5,
          number: 5,
          bodyPart: '하체',
          exercise: '데드리프트',
          sets: 4,
          weight: 40,
          reps: 8,
        },
        {
          id: 6,
          number: 6,
          bodyPart: '상체',
          exercise: '풀업',
          sets: 3,
          weight: 0,
          reps: 8,
        },
        {
          id: 7,
          number: 7,
          bodyPart: '하체',
          exercise: '레그 컬',
          sets: 4,
          weight: 15,
          reps: 12,
        },
        {
          id: 8,
          number: 8,
          bodyPart: '상체',
          exercise: '바벨 로우',
          sets: 3,
          weight: 35,
          reps: 10,
        },
      ];
      setExerciseData(suggestionData);
    }, []);

    return (
        <div>
            <Container>
                
                <HeadContainer>
                    <Titles>
                        <div>
                            <Title>여긴루틴이름임</Title>
                            <Subtitle>오늘도 맛있는 운동 되세요!</Subtitle> </div>
                        <StyledLink to = "/exercise/routine/list">
                          <ChangeR/>
                        </StyledLink>
                    </Titles>
                    <img src='/Characters/Sunglasses1_Black.svg'/>
                </HeadContainer>

                <Button width='80%' label='운동시작'/>

                <ExerciseCard />

                <XsetContainer>
                    <XsetList>
                    {exerciseData.map((exercise) => (
                        <XsetItem key={exercise.id}>
                        <Xset
                            number={exercise.number}
                            bodyPart={exercise.bodyPart}
                            exercise={exercise.exercise}
                            sets={exercise.sets}
                            weight={exercise.weight}
                            reps={exercise.reps}
                        />
                        </XsetItem>
                    ))}
                    </XsetList>
                </XsetContainer>

                <Card>
                    <TitleSection>
                        이번주 운동목표
                    </TitleSection>
                    <ProgressContainer>
                        <ProgressBarSection>
                            {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
                                <DayProgressContainer key={index}>
                                    <ProgressBar direction='vertical' width='8px' height='80px' totalSteps={100} currentStep={40} />
                                    <Day>{day}</Day>
                                </DayProgressContainer>
                            ))}
                        </ProgressBarSection>
                        <CircularProgressBar totalSteps={100} currentStep={40} />
                    </ProgressContainer>
                </Card>
                
            <GymButton/>
            <FixedButtonContainer>
                <NavBar activeState='Exercise' />
            </FixedButtonContainer>
            </Container>
        </div>
    );
};

export default ExercisePage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15%; /* Add padding to ensure content is not hidden behind the Header */
    padding-bottom: 15%; /* Add padding to ensure content is not hidden behind the NavBar */
    gap: 20px; /* Ensure 45px space between each Card */
`;

const HeadContainer = styled.div`
    width: 332px;
    height: 127px;
    padding-right: 21px;
    padding-left: 21px;
    gap: 28px;
    display: flex;

`;

const Titles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 163px;
    height: 84px;
    padding-top: 21px;
`;

const Title = styled.div`
    color: var(--Active, #495EF6);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.096px;
`;

const Subtitle = styled.div`
    color: #404040;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.48px;
`;

const TitleSection = styled.div`
    color: var(--Active, #495EF6);
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 10px;
`;

const ProgressContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;
`;

const ProgressBarSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 85%;
`;

const DayProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Day = styled.div`
    color: #000;
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;
`;

const XsetContainer = styled.div`
  align-self: flex-start;
  margin-left: 10%;
  width: 80%;
  max-width: 80%;
  max-height: 220px;
  overflow-y: scroll;
  border-radius: 10px;
  padding: 10px;
  background: #fff;
  border: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #5467f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const XsetList = styled.div`
  display: flex;
  flex-direction: column;
`;

const XsetItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px;
  border-bottom: 1px solid #eee;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;