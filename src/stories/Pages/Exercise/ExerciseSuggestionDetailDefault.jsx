import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Component/Button';
import styled from 'styled-components';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import Header from '../../Component/Header';
import ExerciseStop from '../../Component/ExerciseStop';
import ExerciseStopEdit from '../../Component/ExerciseStopEdit';

const ExerciseSuggestionDetail = () => {

    const [nickname, setNickname] = useState('');

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

    return (
        <Container>
            <Header text = ''/>

            <NameContainer>
                운동루틴명
            </NameContainer>



            <ExerciseStopEdit />

            <FixedButtonContainer>
                <Button width='100%' height='45px' label='루틴추가' type='primary'/>
            </FixedButtonContainer>
        </Container>
    );
};

export default ExerciseSuggestionDetail;

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

const NameContainer = styled.div`
    color: var(--deprecated-Gray-01, #252525);
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 30px */
    letter-spacing: -0.75px;

    display: flex;
    padding: var(--FormSm-FormSmVerticalPadding, 0px) 10px 16px 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-bottom: 2px solid var(--deactive, #B2BAC2);
    width: 80%;
    height: 49px;
    position: relative;
`;