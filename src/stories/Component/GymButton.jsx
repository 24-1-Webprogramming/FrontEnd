import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GymIcon } from './icon';

const Container = styled.div`
    position: fixed;
    bottom: 100px;
    right: 20px;
    display: flex;
    width: 80px;
    height: 80px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    flex-shrink: 0;

    border-radius: 50px;
    background: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.21);
`;

const ButtonText = styled.div`
    color: var(--Primary, #5467F5);
    text-align: center;
    font-family: Pretendard;
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.36px;
`;

const GymButton = ({ onClick}) => {
    return (
        <Container onClick={onClick}>
            <GymIcon />
            <ButtonText>주변 헬스장</ButtonText>
        </Container>
    );
}

export default GymButton;