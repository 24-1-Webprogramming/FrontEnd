import React from 'react';
import NavBar from '../../Component/NavBar';
import styled from 'styled-components';
import CryImage from '../../assets/DumbbellCrying2.svg';
import Image from '../../Component/Image';
import { Button } from '../../Component/Button';
import { Link } from 'react-router-dom';

const GroupEmpty = () => {
    return (
        <>
            <Container>
                <TopBox>
                    <Image
                        src={CryImage}
                        alt="눈물 또르륵.."
                        width="144px"
                        height="240px"
                    />
                    <Text><b>현재 그룹이 없습니다</b>
                        <br/>그룹을 개설하거나 가입해보세요!</Text>
                </TopBox>

                <BottomBox>
                    <Link to="/group/create">
                        <Button
                            label="개설하기"
                            width={350}
                            height={60}
                        />
                    </Link>
                    <Link to="/group/join">
                        <Button
                            label="가입하기"
                            type="border"
                            width={350}
                            height={60}
                        />
                    </Link> 
                </BottomBox>
            </Container>
            <NavBar activeState="Group" />
        </>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 62px;
    height: 100vh;
`

const TopBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 62px;
`

const Text = styled.div`
    color: var(--deprecated-Gray-01, #252525);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 21.6px */
    letter-spacing: -0.54px;
`

const BottomBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
`


export default GroupEmpty;