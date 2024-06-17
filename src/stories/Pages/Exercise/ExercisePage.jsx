import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Component/Button';
import styled from 'styled-components';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import NavBar from '../../Component/NavBar';
import Card from '../../Component/Card';
import IconButton from '../../Component/IconButton';
import ProgressBar from '../../Component/ProgressBar';
import CircularProgressBar from '../../Component/CircularProgressBar';
import GymButton from '../../Component/GymButton';
import { ChangeR } from '../../Component/ButtonS';

const ExercisePage = () => {
    return (
        <div>
            <Container>
                
                <HeadContainer>
                    <Titles>
                        <div>
                            <Title>여긴루틴이름임</Title>
                            <Subtitle>오늘도 맛있는 운동 되세요!</Subtitle> </div>
                        <ChangeR/>
                    </Titles>
                    <img src='/Characters/Sunglasses1_Black.svg'/>
                </HeadContainer>

                <Card
                    height="102px"
                    shadow={false}
                    borderRadius="10px"
                    background='#EEF0FF'
                >
                    <CardContentCenter>
                        <IconButton width='36px' height='51px' src='/Icons/Icon_time_c.svg' text='40분' disabledFontcolor='#495ef6' textSize='16px' disabled={true} />
                        <Divider />
                        <IconButton width='36px' height='51px' src='/Icons/Icon_exercise_c.svg' text='5개' disabledFontcolor='#495ef6' textSize='16px' disabled={true} />
                        <Divider />
                        <IconButton width='36px' height='51px' src='/Icons/Icon_muscle_c.svg' text='300cal' disabledFontcolor='#495ef6' textSize='16px' disabled={true} />
                    </CardContentCenter>
                </Card>

                <ButtonContainer>
                    <Button width='45%' height='45px' label='운동 직접 선택' type='border' />
                    <Button width='45%' height='45px' label='루틴 추천 받기' type='primary' />
                </ButtonContainer>

                <Card>
                    <TitleSection>
                        이번주 운동목표
                    </TitleSection>
                    <ProgressContainer>
                        <ProgressBarSection>
                            {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
                                <DayProgressContainer key={index}>
                                    <ProgressBar direction='vertical' width='8px' height='80px' totalSteps={100} currentStep={40} />
                                    <Day>{day}</Day>
                                </DayProgressContainer>
                            ))}
                        </ProgressBarSection>
                        <CircularProgressBar totalSteps={100} currentStep={40} />
                    </ProgressContainer>
                </Card>
            </Container>
            <GymButton/>
            <FixedButtonContainer>
                <NavBar activeState='Exercise' />
            </FixedButtonContainer>
        </div>
    );
};

export default ExercisePage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15%; /* Add padding to ensure content is not hidden behind the Header */
    padding-bottom: 15%; /* Add padding to ensure content is not hidden behind the NavBar */
    gap: 45px; /* Ensure 45px space between each Card */
`;

const HeadContainer = styled.div`
    width: 332px;
    height: 127px;
    padding-right: 21px;
    padding-left: 21px;
    gap: 28px;
    display: flex;

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

const Titles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 163px;
    height: 84px;
    padding-top: 21px;
`;

const Title = styled.div`
    color: var(--Active, #495EF6);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: -0.096px;
`;

const Subtitle = styled.div`
    color: #404040;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.48px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
`;

const Divider = styled.div`
    width: 0.5px;
    height: 34px;
    background-color: #9BC3FF;
`;

const TitleSection = styled.div`
    color: var(--Active, #495EF6);
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 10px;
`;

const ProgressContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;
`;

const ProgressBarSection = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 85%;
`;

const DayProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Day = styled.div`
    color: #000;
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;
`;
