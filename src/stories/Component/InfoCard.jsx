import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const InfoCard = () => {
    return (
        <Card
        height="448px"
        shadow={false}
        borderRadius="10px"
        >
            <Name>으악</Name>
        </Card>
    );

};

const Card = styled.div`
    display: inline-flex;
    padding: 27px 33px;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    border-radius: 31px;
    background: #FFF;
`;

const Name = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.8px;
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

export default InfoCard;