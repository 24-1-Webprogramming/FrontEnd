import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Switch } from './Switch';
import TextField from './TextField';
import { PlayIcon, StopIcon, ResetIcon } from './icon';
import { SetPlus, SetMinus } from './ButtonS';

const Container = styled.div`
    display: flex;
    width: 80%;
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
    height: 49px;
    position: relative;
`;

const ExerciseText = styled.div`
    color: #404040;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
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
    position: absolute;
    top: 0;
    right: 0;
`;

const SetButtonContainer = styled.div`
    display: flex;
    gap: 35px;
    align-self: center;
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
    const [rows, setRows] = useState([{ id: 1 }]); // 초기에 하나의 Row를 가지고 시작

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

    const addRow = () => {
        const newRow = {
            id: rows.length + 1,
        };
        setRows([...rows, newRow]);
    };

    const removeRow = () => {
        if (rows.length > 1) {
            const newRows = [...rows];
            newRows.pop();
            setRows(newRows);
        }
    };

    return (
        <Container>
            <WatchContainer>
                <ExerciseText>원레그 익스텐션</ExerciseText>
                <TimeDisplay>{formatTime(time)}</TimeDisplay>
                <ButtonContainer>
                    {time === 0 ? (
                        <Button onClick={startTimer}>
                            <PlayIcon />
                        </Button>
                    ) : isRunning ? (
                        <Button onClick={stopTimer}>
                            <StopIcon />
                        </Button>
                    ) : (
                        <>
                            <Button onClick={resetTimer}>
                                <ResetIcon />
                            </Button>
                            <Button onClick={startTimer}>
                                <PlayIcon />
                            </Button>
                        </>
                    )}
                </ButtonContainer>
            </WatchContainer>
            <RowContainer>
              <Row>
                    <Sub>SET</Sub>
                    <Sub>
                        <Text>KG</Text>
                    </Sub>
                    <Sub>
                        <Text>횟수</Text>
                    </Sub>
                    <Sub>
                        <Text>완료</Text>
                    </Sub>
                </Row>
                {rows.map((row, index) => (
                    <Row key={index}>
                        <Sub>
                            <Text>{row.id}</Text>
                        </Sub>
                        <Sub>
                            <TextField width="100%" fontSize="16px" allowedCharsType='numeric' maxlength='3'/>
                        </Sub>
                        <Sub>
                            <TextField width="100%" fontSize="16px" allowedCharsType='numeric' maxlength='3'/>
                        </Sub>
                        <SwitchContainer>
                            <Switch />
                        </SwitchContainer>
                    </Row>
                ))}
            </RowContainer>
            <SetButtonContainer>
                <SetPlus onClick={addRow} />
                <SetMinus onClick={removeRow} />
            </SetButtonContainer>
        </Container>
    );
};

export default ExerciseStop;
