import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import defaultExerciseImage from '../../Icon/health.png'; // 업로드한 예시 이미지

const ExerciseCard = () => {
    const [exerciseData, setExerciseData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedData = localStorage.getItem('exerciseData');
        if (storedData) {
            setExerciseData(JSON.parse(storedData));
        } else {
            // 예시 데이터 사용
            setExerciseData({
                date: '4월 30일 금요일',
                routine: '탄탄한 하체 프로젝트 DAY1',
                exerciseTime: 75,
                exerciseCount: 15,
                caloriesBurned: 1500,
                weight: 45,
                image: defaultExerciseImage,
                diaryEntry: '오늘도 루틴대로 열심히 운동 완료했당ㅎㅎ'
            });
        }
    }, []);

    if (!exerciseData) {
        return <div>Loading...</div>;
    }

    return (
        <StyledCard shadow={false} background='#FFFFFF' width='300px' height='400px'>
            <DateText>{exerciseData.date}</DateText>
            <Image src={exerciseData.image || defaultExerciseImage} alt="운동 사진" />
            <TextContainer>
                <MainText>{exerciseData.routine}</MainText>
                <RoutineText>{exerciseData.diaryEntry}</RoutineText>
            </TextContainer>
            <CardContentCenter>
                <Container>
                    <Icon src='/Icons/Icon_time_c.svg' width="15px" alt='time' />
                    <Text>{exerciseData.exerciseTime}분</Text>
                </Container>
                <Divider />
                <Container>
                    <Icon src='/Icons/Icon_exercise_c.svg' width="15px" alt='exercise' />
                    <Text>{exerciseData.exerciseCount}개</Text>
                </Container>
                <Divider />
                <Container>
                    <Icon src='/Icons/Icon_muscle_c.svg' width="15px" alt='muscle' />
                    <Text>{exerciseData.caloriesBurned}cal</Text>
                </Container>
                <Divider />
                <Container>
                    <Icon src='/Icons/weight.svg' width="15px" alt='weight' />
                    <Text>{exerciseData.weight}kg</Text>
                </Container>
            </CardContentCenter>
        </StyledCard>
    );
};

export default ExerciseCard;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${({ background }) => background};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: ${({ shadow }) => (shadow ? '0px 7px 8px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 텍스트를 왼쪽 정렬 */
  margin: 10px 0;
  text-align: left;
  width: 85%; /* 컨테이너 너비를 지정 */
`;

const MainText = styled.h2`
  margin: 3px 0;
  font-size: 18px;
  color: #333;
`;

const RoutineText = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #666;
`;

const DateText = styled.p`
  margin: 3px 0;
  font-size: 16px;
  color: #666;
`;

const CardContentCenter = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px 20px;
  background-color: #EEF0FF;
  border-radius: 15px;

`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 15px; /* 아이콘 크기 조정 */
  height: 15px;
`;

const Text = styled.span`
  font-size: 12px;
  color: #666;
  margin-left: 5px; /* 아이콘과 텍스트 사이에 여백 추가 */
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #ddd;
  margin: 0 10px;
`;

const Image = styled.img`
  width: 85%;
  height: 45%;
  border-radius: 15px;
  margin-top: 10px;
`;