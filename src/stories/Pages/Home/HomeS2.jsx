import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../Component/Card';
import { Button } from '../../Component/Button';

export const DDay = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dday-add');
  };

  return (
    <StyledCard shadow={false} background='#EEF0FF' width='300px' height='290px'>
      <TextContainer>
        <MainText>중요한 날이 있나요?</MainText>
        <SubText>잊지말고 등록해보세요!</SubText>
      </TextContainer>
      <Button onClick={handleClick} label='기록하기' width='80%' />
    </StyledCard>
  );
};

export const Water = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/entry/water');
  };

  return (
    <StyledCard shadow={false} background='#EEF0FF' width='300px' height='290px'>
      <TextContainer>
        <MainText>오늘의 내 체중</MainText>
        <SubText>00.0KG</SubText>
      </TextContainer>
      <Button onClick={handleClick} label='기록하기' width='80%' />
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  gap: 10px; /* 자식 요소 간의 간격을 설정합니다 */
`;

const MainText = styled.h2`
  font-family: 'Pretendard Variable';
  font-weight: 700;
  font-size: 20px;
  color: #5467f5;
  margin: 0;
`;

const SubText = styled.p`
  font-family: 'Pretendard Variable';
  font-size: 20px;
  color: #000;
  margin: 0;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

export default DDay;