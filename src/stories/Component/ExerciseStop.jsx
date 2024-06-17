import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {Switch} from './Switch';
import TextField from './TextField';
import { PlayIcon, StopIcon, ResetIcon } from './icon';
import { SetPlus } from './ButtonS';

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 30px var(--FormSm-FormSmVerticalPadding, 0px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 22px;
    border-radius: 17px;
    border: 1px solid var(--Primary, #5467F5);
`;

const WatchContainer = styled.div`
    display: flex;
    padding: var(--FormSm-FormSmVerticalPadding, 0px) 10px 16px 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-bottom: 0.6px solid var(--deactive, #B2BAC2);
    width: 261px;
`;

const ExerciseText = styled.div`
    color: #404040;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
    align-items: center;
`;

const TimeDisplay = styled.div`
  color: var(--Primary, #5467F5);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-self: flex-end;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: white;

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const Sub = styled.div`
    display: flex;
    width: 30px;
    height: 18px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const SwitchContainer = styled.div`
    display: flex;
    width: 50px;
    height: 38px;
    justify-content: left;
    align-items: start;
`;

const Text = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const ExerciseStop = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <Container>
        <WatchContainer>
            <ExerciseText>원레그 익스텐션</ExerciseText>
            <TimeDisplay>{formatTime(time)}</TimeDisplay>
            <ButtonContainer>
                {time === 0 ? (
                <Button onClick={startTimer}>
                    <PlayIcon/>
                </Button>
                ) : isRunning ? (
                <Button onClick={stopTimer}>
                    <StopIcon/>
                </Button>
                ) : (
                <>
                    <Button onClick={resetTimer}>
                    <ResetIcon/>
                    </Button>
                    <Button onClick={startTimer}>
                    <PlayIcon/>
                    </Button>
                </>
                )}
            </ButtonContainer>
        </WatchContainer>
        <RowContainer>
            <Row>
                <Sub>SET</Sub>
                <Sub><Text>KG</Text></Sub>
                <Sub><Text>횟수</Text></Sub>
                <Sub><Text>완료</Text></Sub>
            </Row>
            <Row>
                <Sub><Text>1</Text></Sub>
                <Sub><TextField width='100%' fontSize='16px'/></Sub>
                <Sub><TextField width='100%' fontSize='16px'/></Sub>
                <SwitchContainer><Switch/></SwitchContainer>
            </Row>
            <Row>
                <Sub><Text>2</Text></Sub>
                <Sub><TextField width='100%' fontSize='16px'/></Sub>
                <Sub><TextField width='100%' fontSize='16px'/></Sub>
                <SwitchContainer><Switch/></SwitchContainer>
            </Row>
        </RowContainer>
        <ButtonContainer>
            <SetPlus/>
        </ButtonContainer>
    </Container>
  );
};

export default ExerciseStop;
