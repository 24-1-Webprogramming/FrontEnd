import React from 'react';
import styled from 'styled-components';

const HomeScrollDownWater = () => {
  return (
    <Box>
      <TextBox>
        <Text>오늘의 물 섭취량</Text>
        <WaterAmount>0.0L</WaterAmount>
      </TextBox>
      <Button>기록하기</Button>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  width: 60%;
  height: 241px;
  padding: 26px 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eef0ff;
  border-radius: 10px;
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
  justify-content : center;
  align-items: center;
  gap: 16px;
`
const WaterAmount = styled.p`
  font-family: Pretendard;
  font-size: 38px;
  font-weight: bold;
  color: #4A4A4A;
  margin-top: -20px;
`;

const Button = styled.button`
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 400;
  letter-spacing: 0.2px;
  padding: 12px 90px;
  border: none;
  border-radius: 7px;
  background-color: #5467f5;
  color: #fff;
`;

export default HomeScrollDownWater;
