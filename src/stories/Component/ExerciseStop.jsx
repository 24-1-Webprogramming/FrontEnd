import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {Switch} from './Switch';
import TextField from './TextField';

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
  <path d="M22.5 12.9996C22.5008 13.3392 22.4138 13.6732 22.2473 13.9691C22.0808 14.265 21.8406 14.5128 21.55 14.6884L3.54 25.7059C3.23636 25.8918 2.88858 25.9933 2.5326 25.9999C2.17661 26.0065 1.82532 25.918 1.515 25.7434C1.20764 25.5715 0.951595 25.3209 0.773205 25.0173C0.594814 24.7137 0.500514 24.368 0.5 24.0159V1.9834C0.500514 1.63125 0.594814 1.2856 0.773205 0.981986C0.951595 0.678371 1.20764 0.42775 1.515 0.255897C1.82532 0.081333 2.17661 -0.00722598 2.5326 -0.00063363C2.88858 0.00595872 3.23636 0.107464 3.54 0.293398L21.55 11.3109C21.8406 11.4865 22.0808 11.7343 22.2473 12.0302C22.4138 12.3261 22.5008 12.6601 22.5 12.9996Z" fill="#5467F5"/>
</svg>
                </Button>
                ) : isRunning ? (
                <Button onClick={stopTimer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
  <path d="M22.5 2V22C22.5 22.5304 22.2893 23.0391 21.9142 23.4142C21.5391 23.7893 21.0304 24 20.5 24H15.5C14.9696 24 14.4609 23.7893 14.0858 23.4142C13.7107 23.0391 13.5 22.5304 13.5 22V2C13.5 1.46957 13.7107 0.960859 14.0858 0.585786C14.4609 0.210714 14.9696 0 15.5 0H20.5C21.0304 0 21.5391 0.210714 21.9142 0.585786C22.2893 0.960859 22.5 1.46957 22.5 2ZM7.5 0H2.5C1.96957 0 1.46086 0.210714 1.08579 0.585786C0.710714 0.960859 0.5 1.46957 0.5 2V22C0.5 22.5304 0.710714 23.0391 1.08579 23.4142C1.46086 23.7893 1.96957 24 2.5 24H7.5C8.03043 24 8.53914 23.7893 8.91421 23.4142C9.28929 23.0391 9.5 22.5304 9.5 22V2C9.5 1.46957 9.28929 0.960859 8.91421 0.585786C8.53914 0.210714 8.03043 0 7.5 0Z" fill="#5467F5"/>
</svg>
                </Button>
                ) : (
                <>
                    <Button onClick={resetTimer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <g clip-path="url(#clip0_972_7840)">
    <path d="M27.5 7V25C27.5 25.5304 27.2893 26.0391 26.9142 26.4142C26.5391 26.7893 26.0304 27 25.5 27H7.5C6.96957 27 6.46086 26.7893 6.08579 26.4142C5.71071 26.0391 5.5 25.5304 5.5 25V7C5.5 6.46957 5.71071 5.96086 6.08579 5.58579C6.46086 5.21071 6.96957 5 7.5 5H25.5C26.0304 5 26.5391 5.21071 26.9142 5.58579C27.2893 5.96086 27.5 6.46957 27.5 7Z" fill="#5467F5"/>
  </g>
  <defs>
    <clipPath id="clip0_972_7840">
      <rect width="32" height="32" fill="white" transform="translate(0.5)"/>
    </clipPath>
  </defs>
</svg>
                    </Button>
                    <Button onClick={startTimer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
  <g clip-path="url(#clip0_972_7837)">
    <path d="M30.5 15.9996C30.5008 16.3392 30.4138 16.6732 30.2473 16.9691C30.0808 17.265 29.8406 17.5128 29.55 17.6884L11.54 28.7059C11.2364 28.8918 10.8886 28.9933 10.5326 28.9999C10.1766 29.0065 9.82532 28.918 9.515 28.7434C9.20764 28.5715 8.9516 28.3209 8.7732 28.0173C8.59481 27.7137 8.50051 27.368 8.5 27.0159V4.9834C8.50051 4.63125 8.59481 4.2856 8.7732 3.98199C8.9516 3.67837 9.20764 3.42775 9.515 3.2559C9.82532 3.08133 10.1766 2.99277 10.5326 2.99937C10.8886 3.00596 11.2364 3.10746 11.54 3.2934L29.55 14.3109C29.8406 14.4865 30.0808 14.7343 30.2473 15.0302C30.4138 15.3261 30.5008 15.6601 30.5 15.9996Z" fill="#5467F5"/>
  </g>
  <defs>
    <clipPath id="clip0_972_7837">
      <rect width="32" height="32" fill="white" transform="translate(0.5)"/>
    </clipPath>
  </defs>
</svg>
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

        </ButtonContainer>
    </Container>
  );
};

export default ExerciseStop;
