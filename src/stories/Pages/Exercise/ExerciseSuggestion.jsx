import React, { useEffect, useState } from 'react';
import { Button } from '../../Component/Button';
import styled from 'styled-components';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import Header from '../../Component/Header';
import Card from '../../Component/Card';
import IconButton from '../../Component/IconButton';
import Xset from '../../Component/Xset';

const ExerciseSuggestion = () => {
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
    <Container>
      <Header text="루틴 추천" />

      <h1>
        {nickname}님에게<span style={{ color: '#495EF6' }}> 꼭 맞는 운동</span>을
        <br />
        추천해 드릴게요 !
      </h1>

      <h3>6월 14일, 하체 강화 운동</h3>

      <Card
        height="102px"
        shadow={false}
        borderRadius="10px"
        background="#EEF0FF"
      >
        <CardContentCenter>
          <IconButton
            width="36px"
            height="51px"
            src="/Icons/Icon_time_c.svg"
            text="40분"
            disabledFontcolor="#495ef6"
            textSize="16px"
            disabled={true}
          />
          <Divider />
          <IconButton
            width="36px"
            height="51px"
            src="/Icons/Icon_exercise_c.svg"
            text="5개"
            disabledFontcolor="#495ef6"
            textSize="16px"
            disabled={true}
          />
          <Divider />
          <IconButton
            width="36px"
            height="51px"
            src="/Icons/Icon_muscle_c.svg"
            text="300cal"
            disabledFontcolor="#495ef6"
            textSize="16px"
            disabled={true}
          />
        </CardContentCenter>
      </Card>

      <h3>수행 운동 정보</h3>

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

      <FixedButtonContainer>
        <Button width="100%" height="45px" label="운동 시작" type="primary" />
      </FixedButtonContainer>
    </Container>
  );
};

export default ExerciseSuggestion;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15%;
  padding-bottom: 15%;
  gap: 45px;
`;

const CardContentCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 13px 30px;
  gap: 15px;
`;

const Divider = styled.div`
  width: 0.5px;
  height: 34px;
  background-color: #9bc3ff;
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
