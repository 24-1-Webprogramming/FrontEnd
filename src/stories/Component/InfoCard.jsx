import React from 'react';
import styled from 'styled-components';

const InfoCard = ({ name, imgSrc, description }) => {
    return (
        <Card height="448px" shadow={false} borderRadius="10px">
            <Container>
                <Name>{name}</Name>
                <img src={imgSrc} alt={name} />
                <Description>{description}</Description>
            </Container>
        </Card>
    );
};

InfoCard.defaultProps = {
    name: 'Name',
    imgSrc: '',
    description: 'Description',
};

const Card = styled.div`
    display: inline-flex;
    padding: 27px 33px;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    border-radius: 31px;
    background: #FFF;
    width: 80%;
    height: 448px;
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
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap: 14px;
`;

const Description = styled.div`
    color: #000;
    text-align: left;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    background: #d9d9d9;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    padding: 15px;
`;

export default InfoCard;
