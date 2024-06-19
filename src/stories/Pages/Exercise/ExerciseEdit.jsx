import React, { useState } from 'react';
import styled from 'styled-components';
import ExerciseListE from '../../Component/ExerciseListE';
import Header from '../../Component/Header';

const exerciseData = [
    { exercise: '컨벤셔널 데드리프트', mark: false, category: '등', check: false },
    { exercise: '스모 데드리프트', mark: true, category: '가슴', check: false },
    { exercise: '루마니안 데드리프트', mark: false, category: '팔', check: false },
    { exercise: '스티프 레그 데드리프트', mark: true, category: '하체', check: false },
    { exercise: 'ㅇㅇ 레그 데드리프트', mark: true, category: '상체', check: false },
];

const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: auto;
    margin-top: 10%;
`;

const ExerciseEdit = () => {
    const handleCheckedExercisesChange = (checkedExercises) => {
        console.log("Checked Exercises: ", checkedExercises);
    };

    return (
        <Container>
            <Header text='루틴명'/>
            <ExerciseListE exercises={exerciseData} onSelectedExercisesChange={handleCheckedExercisesChange} />
        </Container>
    );
};

export default ExerciseEdit;
