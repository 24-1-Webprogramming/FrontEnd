import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Component/Button';
import styled from 'styled-components';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import IconButton from '../../Component/IconButton';
import Card from '../../Component/Card';
import Image from '../../Component/Image';

const ExerciseComplete = () => {
    return (
        <Container>
            <Image src='/ExerciseComplete.svg' width='100%' height='100%' />

            <Card
                height="153px"
                shadow={false}
                borderRadius="10px"
                background='rgba(217, 217, 217, 0.30)'
            >
                <CardContentCenter>
                    <Text>24.05.15.수</Text>
                    <TimeContainer>
                        <LeftAlign>
                            <IconButton width='36px' height='36px' src='/Icons/Icon_time.svg' text='' disabledFontcolor='#495ef6' textSize='16px' disabled={true} />
                            <Text>운동 시간</Text>
                        </LeftAlign>
                        <RightAlign>
                            <Text>40분</Text>
                        </RightAlign>
                    </TimeContainer>
                    <RoutineContainer>
                        <LeftAlign>
                            <IconButton width='36px' height='36px' src='/Icons/Icon_exercise_w.svg' text='' disabledFontcolor='#495ef6' textSize='16px' disabled={true} />
                            <Text>오늘의 루틴</Text>
                        </LeftAlign>
                        <RightAlign>
                            <Text>5개</Text>
                        </RightAlign>
                    </RoutineContainer>
                </CardContentCenter>
            </Card>
            <FixedButtonContainer>
                <StyledLink to='/exercise/main'>
                    <Button width='100%' height='45px' label='완료하기' backgroundColor='#FFF' color='#495EF6' type='border' />
                </StyledLink>
                <StyledLink to='/exercise/routine/:id/record'>
                    <Button width='100%' height='45px' label='기록남기기' backgroundColor='#FFF' color='#495EF6' type='border' />
                </StyledLink>
            </FixedButtonContainer>

        </Container>
    );
};

export default ExerciseComplete;

const Container = styled.div`
    background-color: #495EF6;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    gap: 45px;
    padding-top: 10%;
    padding-bottom: 15%; /* Add padding to ensure content is not hidden behind the NavBar */
`;

const CardContentCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 13px 30px;
    gap: 15px;
`;

const TimeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 5px;
`;

const RoutineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 5px;
`;

const LeftAlign = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const RightAlign = styled.div`
    display: flex;
    align-items: center;
`;

const Text = styled.div`
    font-size: 17px;
    font-weight: 400;
    color: #FFF;
`;

const StyledLink = styled(Link)`
    width: 50%;
`;
