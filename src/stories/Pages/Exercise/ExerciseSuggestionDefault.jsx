import React, { useEffect, useState } from 'react';
import { Button } from '../../Component/Button';
import styled from 'styled-components';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import Header from '../../Component/Header';
import Stopwatch from '../../Component/Stopwatch';
import ExerciseStop from '../../Component/ExerciseStop'; // ExerciseStop 컴포넌트를 가져옴

const ExerciseSuggestion = () => {
    const [nickname, setNickname] = useState('');
    const [exerciseData, setExerciseData] = useState([{ name: '스쿼트' }]);

    useEffect(() => {
        const savedNickname = localStorage.getItem('nickname');
        if (savedNickname) {
            setNickname(savedNickname);
        }
    }, []);

    return (
        <Container>
            <Header text="">
                <Button label="운동완료" type="primary" />
            </Header>

            <Stopwatch />

            {exerciseData.map((exercise, index) => (
                <ExerciseStop key={index} name={exercise.name} /> // name 속성만 전달
            ))}

            <FixedButtonContainer>
                <Button width="100%" height="45px" label="운동추가" type="border" />
                <Button width="100%" height="45px" label="운동완료" type="primary" />
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
    gap: 36px;
`;
