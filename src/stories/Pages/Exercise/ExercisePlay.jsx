import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Component/Button';
import styled from 'styled-components';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import Header from '../../Component/Header';
import Stopwatch from '../../Component/Stopwatch';
import ExerciseStop from '../../Component/ExerciseStop';

const ExercisePlay = () => {

    const [nickname, setNickname] = useState('');
    const [currentRoutine, setCurrentRoutine] = useState(null); // Set initial state to null

  useEffect(() => {
    const savedCurrentRoutine = localStorage.getItem('currentRoutine');
    if (savedCurrentRoutine) {
        setCurrentRoutine(savedCurrentRoutine);
    }
  }, []);

    return (
        <Container>
            <Header text = '루틴명'/>

            <Stopwatch />

            <ExerciseStop />

            <FixedButtonContainer>
                <StyledLink to = '/exercise/routine/:id/edit'>
                    <Button width='100%' height='45px' label='루틴편집' type='border'/>
                </StyledLink>
                <StyledLink to = '/exercise/routine/:id/complete'>
                    <Button width='100%' height='45px' label='운동완료' type='primary'/>
                </StyledLink>
            </FixedButtonContainer>
        </Container>
    );
};

export default ExercisePlay;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15%; /* Add padding to ensure content is not hidden behind the Header */
    padding-bottom: 15%; /* Add padding to ensure content is not hidden behind the NavBar */
    gap: 36px; /* Ensure 45px space between each Card */
`;

const StyledLink = styled(Link)`
    width: 50%;
`;