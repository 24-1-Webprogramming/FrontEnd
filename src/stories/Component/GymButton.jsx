import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #5467F5;
        cursor: pointer;
    }

    z-index: 1000;
`;

const GymIcon = styled.svg`
    width: 36px;
    height: 33px;
    fill: var(--Primary, #5467F5);
    transition: fill 0.3s ease;

    ${Container}:hover & {
        fill: #FFF;
    }
`;

const ButtonText = styled.div`
    color: var(--Primary, #5467F5);
    text-align: center;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.36px;
    margin-top  : 5px;
    transition: color 0.3s ease;

    ${Container}:hover & {
        color: #FFF;
    }
`;

const GymButton = ({ onClick }) => {
    return (
        <Link to = "/gym">
        <Container onClick={onClick}>
            <GymIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 33">
                <path d="M34.9817 3.04064C34.8205 2.9123 34.6327 2.82316 34.4327 2.77998C34.2327 2.7368 34.0257 2.74072 33.8274 2.79143L23.5411 5.41766L13.2178 0.144566C12.9302 -0.0019744 12.6007 -0.0385537 12.2889 0.0414417L1.51971 2.79143C1.22849 2.86578 0.969947 3.03743 0.785186 3.27909C0.600426 3.52075 0.500045 3.81855 0.5 4.12517V28.875C0.500031 29.084 0.546676 29.2901 0.636394 29.4779C0.726111 29.6657 0.85654 29.8301 1.01778 29.9586C1.17901 30.0872 1.36681 30.1766 1.56691 30.2199C1.76701 30.2632 1.97415 30.2594 2.1726 30.2088L12.4589 27.5825L22.7822 32.8556C22.9696 32.95 23.1757 32.9994 23.3846 33C23.4947 32.9999 23.6043 32.9861 23.7111 32.9587L34.4803 30.2088C34.7715 30.1344 35.0301 29.9628 35.2148 29.7211C35.3996 29.4794 35.5 29.1816 35.5 28.875V4.12517C35.5 3.91604 35.4534 3.70966 35.3636 3.52172C35.2738 3.33379 35.1432 3.16926 34.9817 3.04064ZM12.6154 24.75C12.5053 24.7501 12.3957 24.764 12.2889 24.7913L3.19231 27.1133V5.19938L12.4589 2.83268L12.6154 2.91174V24.75ZM32.8077 27.8008L23.5411 30.1675L23.3846 30.0885V8.25014C23.4946 8.25064 23.6042 8.23736 23.7111 8.21061L32.8077 5.88688V27.8008Z" />
            </GymIcon>
            <ButtonText>주변 헬스장</ButtonText>
        </Container>
        </Link>
    );
}

export default GymButton;
