import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Component/Button';
import styled from 'styled-components';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import Header from '../../Component/Header';
import Card from '../../Component/Card';
import IconButton from '../../Component/IconButton';
import Stopwatch from '../../Component/Stopwatch';
import ExerciseStop from '../../Component/ExerciseStop';

const ExerciseSuggestion = () => {

    const [nickname, setNickname] = useState('');

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

    return (
        <Container>
            <Header text = ''>
                <Button label='운동완료' type='primary' />
            </Header>

            <Stopwatch />

            <ExerciseStop />

            <FixedButtonContainer>
                <Button width='100%' height='45px' label='운동추가' type='border'/>
                <Button width='100%' height='45px' label='운동완료' type='primary'/>
            </FixedButtonContainer>
        </Container>
    );
};

export default ExerciseSuggestion;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15%; /* Add padding to ensure content is not hidden behind the Header */
    padding-bottom: 15%; /* Add padding to ensure content is not hidden behind the NavBar */
    gap: 36px; /* Ensure 45px space between each Card */
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
    background-color: #9BC3FF;
`;