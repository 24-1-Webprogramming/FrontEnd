import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const SetPlus = () => {
    return (
        <SetContainer>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <circle cx="11" cy="11" r="11" fill="#FF3B30"/>
</svg>
            <SetText>세트삭제</SetText>
        </SetContainer>
    );
};

export const ChangeR = () => {
    return (
        <RoutineContainer>
            <Primary>루틴변경</Primary>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
  <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="#4D61F5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </RoutineContainer>
    );
};

const SetContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 22px;
    background-color: transparent;
    gap: 10px;
`;

const SetText = styled.div`
    color: #000;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Pretendard;
    font-size: 14.5px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 151.724% */                                                                   
`;

const RoutineContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Primary = styled.div`
    color: #4D61F5;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;