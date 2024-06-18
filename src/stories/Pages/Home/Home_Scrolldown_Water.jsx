import React from 'react';
import styled from 'styled-components';

const HomeScrollDownWater = () => {
  return (
    <WaterBox>
      <Text>오늘의 물 섭취량</Text>
      <WaterAmount>0.0L</WaterAmount>
      <Button>기록하기</Button>
    </WaterBox>
  );
};

const WaterBox = styled.div`
  display: flex;
  width: 270px;
  height: 241px;
  padding: 26px 22px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: #eef0ff;
  border-radius: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 16px;
  font-weight: bold;
`;

const WaterAmount = styled.p`
  font-size: 38px;
  font-weight: bold;
  color: #000;
  margin-top: -20px;
`;

const Button = styled.button`
  font-size: 18px;
  margin-top: -4px;
  font-weight: bold;
  padding: 10px 70px;
  border: none;
  border-radius: 5px;
  background-color: #5467f5;
  color: #fff;
`;

export default HomeScrollDownWater;
