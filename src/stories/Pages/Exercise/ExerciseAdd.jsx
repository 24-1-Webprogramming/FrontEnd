import React, { useState } from 'react';
import styled from 'styled-components';
import ExerciseList from '../../Component/ExerciseList';
import Header from '../../Component/Header';
import { exerciseInfo } from '../data/Xinfo'; // Xinfo 모듈에서 데이터 가져오기

const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: auto;
    margin-top: 10%;
`;

const ExerciseAdd = () => {
    // exerciseInfo 배열을 새로운 배열로 변환하여 mark와 check 속성 추가
    const enhancedExerciseData = exerciseInfo.map(exercise => ({
        ...exercise,
        mark: false,
        check: false
    }));

    const handleCheckedExercisesChange = (checkedExercises) => {
        console.log("Checked Exercises: ", checkedExercises);
    };

    return (
        <Container>
            <Header text='루틴 추가'/>
            <ExerciseList exercises={enhancedExerciseData} onSelectedExercisesChange={handleCheckedExercisesChange} />
        </Container>
    );
};

export default ExerciseAdd;
