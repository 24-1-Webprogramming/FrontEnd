import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../Component/Card';
import Image from '../../Component/Image';
import IconButton from '../../Component/IconButton';
import {Button} from '../../Component/Button';
import FixedButtonContainer from '../../Component/FixedButtonContainer';

const ExerciseComplete = () => {
    const [totalTime, setTotalTime] = useState('');
    const [routineCount, setRoutineCount] = useState(0);
    const [date, setDate] = useState('');

    useEffect(() => {
        // Fetch total time from localStorage
        const storedTime = localStorage.getItem('stopwatchTime'); // Ensure this key is consistent with what you've used in the stopwatch component
        if (storedTime) {
            const totalSeconds = parseInt(storedTime, 10);
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            setTotalTime(`${minutes}분 ${seconds}초`);
        }

        // Fetch routine details
        const currentRoutine = JSON.parse(localStorage.getItem('currentRoutine'));
        if (currentRoutine && currentRoutine.exercises) {
            setRoutineCount(currentRoutine.exercises.length);
        }

        // Set today's date
        const today = new Date();
        const formattedDate = `${today.getFullYear()}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getDate().toString().padStart(2, '0')}`;
        setDate(formattedDate);
    }, []);

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
                    <Text>{date}</Text>
                    <TimeContainer>
                        <LeftAlign>
                            <IconButton width='36px' height='36px' src='/Icons/Icon_time.svg' text='' disabledFontcolor='#495ef6' textSize='16px' disabled={true} />
                            <Text>운동 시간</Text>
                        </LeftAlign>
                        <RightAlign>
                            <Text>{totalTime}</Text>
                        </RightAlign>
                    </TimeContainer>
                    <RoutineContainer>
                        <LeftAlign>
                            <IconButton width='36px' height='36px' src='/Icons/Icon_exercise_w.svg' text='' disabledFontcolor='#495ef6' textSize='16px' disabled={true} />
                            <Text>오늘의 루틴</Text>
                        </LeftAlign>
                        <RightAlign>
                            <Text>{routineCount}개</Text>
                        </RightAlign>
                    </RoutineContainer>
                </CardContentCenter>
            </Card>
            <FixedButtonContainer>
                <StyledLink to='/exercise/main'>
                    <Button width='100%' height='45px' label='완료하기' backgroundColor='#FFF' color='#495EF6' type='border' />
                </StyledLink>
                <StyledLink to='/exercise/write'>
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
    font-weight: 500;
    color: #FFF;
`;

const StyledLink = styled(Link)`
    width: 50%;
`;
