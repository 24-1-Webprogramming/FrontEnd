import React, { useState, useEffect } from 'react';
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

const ExerciseEdit = () => {
    // 상태 초기화
    const [currentRoutine, setCurrentRoutine] = useState('');
    const [routineData, setRoutineData] = useState([]);
    const [enhancedExerciseData, setEnhancedExerciseData] = useState([]);

    useEffect(() => {
        // 로컬 스토리지에서 currentRoutine과 routineData 가져오기
        const savedCurrentRoutine = localStorage.getItem('currentRoutine');
        if (savedCurrentRoutine) {
            setCurrentRoutine(savedCurrentRoutine);
        }

        const storedRoutineData = JSON.parse(localStorage.getItem('routineData')) || [];
        setRoutineData(storedRoutineData);

        // exerciseInfo 배열을 새로운 배열로 변환하여 mark와 check 속성 추가
        const enhancedExerciseData = exerciseInfo.map(exercise => ({
            ...exercise,
            mark: false,
            check: false
        }));

        // 현재 루틴에 포함된 운동을 체크
        if (savedCurrentRoutine) {
            const routine = storedRoutineData.find(routine => routine.name === savedCurrentRoutine);
            if (routine) {
                const exercisesInRoutine = routine.exercises.map(ex => ex.exercise);
                enhancedExerciseData.forEach(exercise => {
                    if (exercisesInRoutine.includes(exercise.exercise)) {
                        exercise.check = true;
                    }
                });
            }
        }

        setEnhancedExerciseData(enhancedExerciseData);
    }, []);

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

export default ExerciseEdit;
