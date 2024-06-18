import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Component/Button';
import styled from 'styled-components';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import Header from '../../Component/Header';
import Card from '../../Component/Card';
import IconButton from '../../Component/IconButton';
import Xtab from '../../Component/Xtab';

const ExerciseSuggestionAdd = () => {
    const [nickname, setNickname] = useState('');
    const [exerciseList, setExerciseData] = useState([]);

    useEffect(() => {
        const savedNickname = localStorage.getItem('nickname');
        if (savedNickname) {
            setNickname(savedNickname);
        }
        // Simulate fetching data from an API
        const exerciseList = [
            { exercise: '컨벤셔널 데드리프트'},
            { exercise: '스모 데드리프트'},
            { exercise: '루마니안 데드리프트'},
            { exercise: '스티프 레그 데드리프트'},
        ];
        setExerciseData(exerciseList);
    } , []);

    return (
        <Container>
            <Header text = '운동 직접 선택'/>

            <h1>운동 검색하기</h1>

            <XtabContainer>
                <XtabList>
                    {exerciseList.map((exercise) => (
                        <XtabItem>
                            <Xtab exercise={exercise.exercise}/>
                        </XtabItem>
                    ))}
                </XtabList>
            </XtabContainer>
            
            <FixedButtonContainer>
                <Button width='100%' height='45px' label='2개의 운동 추가하기' type='primary'/>
            </FixedButtonContainer>
        </Container>
    );
};

export default ExerciseSuggestionAdd;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15%; /* Add padding to ensure content is not hidden behind the Header */
    padding-bottom: 15%; /* Add padding to ensure content is not hidden behind the NavBar */
    gap: 45px; /* Ensure 45px space between each Card */
`;

const XtabContainer = styled.div`
align-self: center;
  width: 95%;
  max-width: 95%;
  max-height: 220px;
  overflow-y: scroll;
  border-radius: 10px;
  padding: 10px;
  background: #fff;
  border: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #5467f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const XtabList = styled.ul`
    display: flex;
  flex-direction: column;
`;

const XtabItem = styled.li`
    display: flex;
  align-items: center;
  gap: 12px;
  padding: 0px;
  border-bottom: 1px solid #eee;
`;