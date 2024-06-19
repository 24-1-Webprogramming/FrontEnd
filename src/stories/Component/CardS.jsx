import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

export const ExerciseCard = () => {
    const [currentRoutine, setCurrentRoutine] = useState(null); // Set initial state to null
    const [routineData, setRoutineData] = useState([]); // State to hold routine data

    useEffect(() => {
        const savedCurrentRoutine = localStorage.getItem('currentRoutine');
        if (savedCurrentRoutine) {
            setCurrentRoutine(savedCurrentRoutine);
        }

        const storedRoutineData = JSON.parse(localStorage.getItem('routineData')) || [];
        setRoutineData(storedRoutineData);
    }, []);

    // Find the routine that matches currentRoutine
    const matchedRoutine = routineData.find(routine => routine.name === currentRoutine);

    // Calculate total minutes and sets length from matchedRoutine
    let totalMinutes = 0;
    let totalSetsLength = 0;

    if (matchedRoutine) {
        totalMinutes = matchedRoutine.minutes;
        totalSetsLength = matchedRoutine.exercises.reduce((total, exercise) => total + exercise.sets.length, 0);
    }

    return (
        <Card
            height="60px"
            width="350px"
            shadow={false}
            borderRadius="10px"
            background='#ffffff'
        >
            <CardContentCenter>
                <Container>
                    <img src='/Icons/Icon_time_c.svg' width="35px" alt='time' />
                    <Text>{totalMinutes}분</Text>
                    <Margin />
                </Container>
                <Divider />
                <Container>
                    <img src='/Icons/Icon_exercise_c.svg' width="45px" alt='exercise' />
                    <Margin />
                    <Text>{totalSetsLength}개</Text>
                </Container>
                <Divider />
                <Container>
                    <img src='/Icons/Icon_muscle_c.svg' width="35px" alt='muscle' />
                    <Text>{matchedRoutine ? `${matchedRoutine.kcal}cal` : '0cal'}</Text>
                </Container>
            </CardContentCenter>
        </Card>
    );
};

const CardContentCenter = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 100px;
    padding: 13px 30px;
    gap: 25px;
`;

const Margin = styled.div`
    margin-top: 1px;
`;

const Text = styled.div`
    color: var(--Active, #495EF6);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Container = styled.div`
    display: flex;
    width: 60px;
    height: 30px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
`;

const Divider = styled.div`
    width: 0.5px;
    height: 34px;
    background-color: #9BC3FF;
`;
