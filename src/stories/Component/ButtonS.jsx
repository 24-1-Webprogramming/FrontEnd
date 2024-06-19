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
            <Primary>루틴선택</Primary>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M1.5 1.5L6.5 6L1.5 10.5" stroke="#4D61F5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </RoutineContainer>
    );
};

export const Info = () => {
    return (
        <IconContainer>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1875 7.5C13.1875 9.00842 12.5883 10.4551 11.5217 11.5217C10.4551 12.5883 9.00842 13.1875 7.5 13.1875C5.99158 13.1875 4.54494 12.5883 3.47833 11.5217C2.41172 10.4551 1.8125 9.00842 1.8125 7.5C1.8125 5.99158 2.41172 4.54494 3.47833 3.47833C4.54494 2.41172 5.99158 1.8125 7.5 1.8125C9.00842 1.8125 10.4551 2.41172 11.5217 3.47833C12.5883 4.54494 13.1875 5.99158 13.1875 7.5ZM14.5 7.5C14.5 9.35652 13.7625 11.137 12.4497 12.4497C11.137 13.7625 9.35652 14.5 7.5 14.5C5.64348 14.5 3.86301 13.7625 2.55025 12.4497C1.2375 11.137 0.5 9.35652 0.5 7.5C0.5 5.64348 1.2375 3.86301 2.55025 2.55025C3.86301 1.2375 5.64348 0.5 7.5 0.5C9.35652 0.5 11.137 1.2375 12.4497 2.55025C13.7625 3.86301 14.5 5.64348 14.5 7.5ZM4.81112 4.86625C4.56204 5.24192 4.4375 5.61233 4.4375 5.9775C4.4375 6.15542 4.51625 6.3205 4.67375 6.47275C4.83125 6.625 5.02404 6.70083 5.25213 6.70025C5.64004 6.70025 5.90342 6.48267 6.04225 6.0475C6.18925 5.63158 6.36892 5.31658 6.58125 5.1025C6.79358 4.889 7.12433 4.78225 7.5735 4.78225C7.95733 4.78225 8.27088 4.88812 8.51413 5.09987C8.75679 5.31221 8.87813 5.57238 8.87813 5.88037C8.87918 6.03489 8.83804 6.18677 8.75912 6.31962C8.67805 6.4545 8.57916 6.57782 8.46512 6.68625C8.28114 6.85474 8.09205 7.01756 7.89812 7.1745C7.60063 7.42125 7.36379 7.63417 7.18762 7.81325C7.01263 7.99292 6.87175 8.20088 6.765 8.43713C6.48325 9.5265 7.94625 9.614 8.284 8.83613C8.32483 8.76146 8.38696 8.67863 8.47038 8.58763C8.55438 8.49721 8.66579 8.39221 8.80463 8.27263C9.15865 7.97778 9.50697 7.67614 9.84938 7.36788C10.043 7.18937 10.2102 6.97646 10.3507 6.72913C10.496 6.4658 10.569 6.16877 10.5625 5.86812C10.5625 5.45279 10.4388 5.06779 10.1915 4.71313C9.94475 4.35788 9.59475 4.07729 9.1415 3.87137C8.68825 3.66546 8.16558 3.5625 7.5735 3.5625C6.9365 3.5625 6.37912 3.68588 5.90137 3.93263C5.42362 4.17938 5.06021 4.49117 4.81112 4.86625ZM6.68362 11.0612C6.68362 11.2933 6.77581 11.5159 6.93991 11.68C7.104 11.8441 7.32656 11.9362 7.55863 11.9362C7.79069 11.9362 8.01325 11.8441 8.17734 11.68C8.34144 11.5159 8.43363 11.2933 8.43363 11.0612C8.43363 10.8292 8.34144 10.6066 8.17734 10.4425C8.01325 10.2784 7.79069 10.1862 7.55863 10.1862C7.32656 10.1862 7.104 10.2784 6.93991 10.4425C6.77581 10.6066 6.68362 10.8292 6.68362 11.0612Z" fill="#939393"/>
</svg>
        </IconContainer>
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

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    &:hover {
        cursor: pointer;
        background-color: #f0f0f0;
    }
`;