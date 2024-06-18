import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const SetPlus = () => {
    return (
        <SetContainer>
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="11" r="11" fill="#FF453A"/>
                <path d="M8.04224 11.6812H15.9507C16.1584 11.6812 16.3377 11.6033 16.4888 11.4475C16.6445 11.2917 16.7224 11.1077 16.7224 10.8953C16.7224 10.6829 16.6445 10.4988 16.4888 10.343C16.3377 10.1873 16.1584 10.1094 15.9507 10.1094H8.04224C7.84399 10.1094 7.66463 10.1873 7.50415 10.343C7.34839 10.4988 7.27051 10.6829 7.27051 10.8953C7.27051 11.1077 7.34839 11.2917 7.50415 11.4475C7.66463 11.6033 7.84399 11.6812 8.04224 11.6812Z" fill="white"/>
            </svg>
            <SetText>세트삭제</SetText>
        </SetContainer>
    );
};

export const SetMinus = () => {
    return (
        <SetContainer>
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="11" r="11" fill="#5467F5"/>
<path d="M7.26343 10.8882C7.26343 10.6758 7.33895 10.4941 7.48999 10.343C7.64575 10.1873 7.83219 10.1094 8.04932 10.1094H11.2141V6.9375C11.2141 6.7251 11.292 6.54102 11.4478 6.38525C11.6035 6.22949 11.7876 6.15161 12 6.15161C12.2171 6.15161 12.4012 6.22949 12.5522 6.38525C12.7033 6.54102 12.7788 6.7251 12.7788 6.9375V10.1094H15.9578C16.1702 10.1094 16.3519 10.1873 16.5029 10.343C16.6587 10.4941 16.7366 10.6758 16.7366 10.8882C16.7366 11.1053 16.6587 11.2917 16.5029 11.4475C16.3519 11.5986 16.1702 11.6741 15.9578 11.6741H12.7788V14.8459C12.7788 15.0583 12.7033 15.2424 12.5522 15.3982C12.4012 15.554 12.2171 15.6318 12 15.6318C11.7876 15.6318 11.6035 15.554 11.4478 15.3982C11.292 15.2424 11.2141 15.0583 11.2141 14.8459V11.6741H8.04932C7.83219 11.6741 7.64575 11.5986 7.48999 11.4475C7.33895 11.2917 7.26343 11.1053 7.26343 10.8882Z" fill="white"/>
</svg>
            <SetText>세트추가</SetText>
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
    padding: 5px 5px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
        color: #FF453A;
        cursor: pointer;

        // svg path {
        //     fill: #FF453A;
        // }
    }
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
    padding: 5px 5px;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        background-color: #f0f0f0;
        cursor: pointer;
    }
`;

const Primary = styled.div`
    color: #4D61F5;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
