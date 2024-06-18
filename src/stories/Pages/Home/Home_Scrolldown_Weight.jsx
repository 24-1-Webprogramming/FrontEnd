import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeScrolldownWeight = () => {
  const [weightAmount, setWeightAmount] = useState('00.0kg'); // This state could be updated based on an API call
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/entry/weight'); // Update with the actual path you want to navigate to
  };

  return (
    <Container>
      <Title>체중 관리</Title>
      <Box>
        <TextBox>
          <Text>오늘의 내 체중</Text>
          <WaterAmount>{weightAmount}</WaterAmount>
        </TextBox>
        <Button onClick={handleButtonClick}>기록하기</Button>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  width: 60%;
  min-width: 300px;
  height: 241px;
  padding: 26px 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eef0ff;
  border-radius: 10px;
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-left: 10.5%;
  font-weight: bold;
  align-self: start;
`;

const Text = styled.p`
  font-family: Pretendard;
  font-size: 18px;
  color: #4A4A4A;
  margin-bottom: 16px;
  font-weight: bold;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const WaterAmount = styled.p`
  font-family: Pretendard;
  font-size: 38px;
  font-weight: bold;
  color: #4A4A4A;
  margin-top: -20px;
`;

const Button = styled.button`
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 500;
  letter-spacing: 0.2px;
  padding: 14px 100px;
  border: none;
  border-radius: 7px;
  background-color: #5467f5;
  color: #fff;
  cursor: pointer; // Changes the cursor to indicate clickability
  transition: background-color 0.3s; // Smooth transition for background color

  &:hover {
    background-color: #4154b3; // Darker shade on hover
  }
`;

export default HomeScrolldownWeight;
