import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import IconButton from './IconButton';

export const ExerciseCard = () => {
    return (
        <Card
                    height="102px"
                    shadow={false}
                    borderRadius="10px"
                    background='#EEF0FF'
                >
                    <CardContentCenter>
                        <Container>
                            <img src='/Icons/Icon_time_c.svg' alt='time' />
                            <Text>40분</Text>
                        </Container>
                        <Divider />
                        <Container>
                            <img src='/Icons/Icon_exercise_c.svg' alt='exercise' />
                            <Text>5개</Text>
                        </Container>
                        <Divider />
                        <Container>
                            <img src='/Icons/Icon_muscle_c.svg' alt='muscle' />
                            <Text>300cal</Text>
                        </Container>
                    </CardContentCenter>
                </Card>
    );

};

const CardContentCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 13px 30px;
    gap: 15px;
`;

const Text = styled.div`
    color: var(--Active, #495EF6);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Container = styled.div`
    display: flex;
    width: 60px;
    height: 51px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
`;

const Divider = styled.div`
    width: 0.5px;
    height: 34px;
    background-color: #9BC3FF;
`;