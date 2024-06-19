import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Component/Button';
import styled from 'styled-components';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import Header from '../../Component/Header';
import Stopwatch from '../../Component/Stopwatch';
import ExerciseStop from '../../Component/ExerciseStop';

const ExercisePlay = () => {
    const [currentRoutine, setCurrentRoutine] = useState(null); // Set initial state to null
    const [routineData, setRoutineData] = useState([]);

    useEffect(() => {
        const savedCurrentRoutine = localStorage.getItem('currentRoutine');
        if (savedCurrentRoutine) {
            setCurrentRoutine(JSON.parse(savedCurrentRoutine)); // Parse the JSON string
        }
        const storedRoutineData = JSON.parse(localStorage.getItem('routineData')) || []; // Parse JSON from localStorage or initialize as empty array
        setRoutineData(storedRoutineData);
    }, []);

    return (
        <Container>
            <Header text={currentRoutine ? currentRoutine.name : 'No Routine Selected'} />

            <Stopwatch />

            {currentRoutine && currentRoutine.exercises && (
                currentRoutine.exercises.map((exercise, index) => (
                    <ExerciseStop key={index} exerciseName={exercise.exercise} /> // Pass exercise.exercise as exerciseName
                ))
            )}

            <FixedButtonContainerStyled>
                <StyledLink to='/exercise/routine/:id/edit'>
                    <Button width='100%' height='45px' label='루틴편집' type='border' />
                </StyledLink>
                <StyledLink to='/exercise/routine/:id/complete'>
                    <Button width='100%' height='45px' label='운동완료' type='primary' />
                </StyledLink>
            </FixedButtonContainerStyled>
        </Container>
    );
};

export default ExercisePlay;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15%;
    padding-bottom: 130px;
    gap: 36px;
`;

const StyledLink = styled(Link)`
    width: 50%;
`;

const FixedButtonContainerStyled = styled(FixedButtonContainer)`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    padding: 30px;
`;
