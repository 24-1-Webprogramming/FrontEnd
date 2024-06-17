import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Component/Button';
import styled from 'styled-components';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import Header from '../../Component/Header';
import Card from '../../Component/Card';
import IconButton from '../../Component/IconButton';

const ExerciseSuggestionAdd = () => {

    return (
        <Container>
            <Header text = '운동 직접 선택'/>

            <h1>운동 검색하기</h1>
            
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