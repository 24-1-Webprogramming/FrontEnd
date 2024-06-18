import React from 'react';
import styled from 'styled-components';

const HomeScrolldownWeight = () => {
  return (
    <Container>
      <Title>체중 관리</Title>
      <Box>
        <TextBox>
          <Text>오늘의 물 섭취량</Text>
          <WaterAmount>0.0L</WaterAmount>
        </TextBox>
        <Button>기록하기</Button>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  // Aligns children (Title and Box) to the left
  width: 100%;  // Ensures Container takes full width
`

const Box = styled.div`
  display: flex;
  width: 60%;  // Adjust this if needed to fit within a specific width
  min-width: 300px;  // Ensures Box doesn't shrink too small on smaller screens
  height: 241px;
  padding: 26px 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eef0ff;
  border-radius: 10px;
  margin-top: 20px;  // Adds space between Title and Box
`;

const Title = styled.h2`
  font-size: 20px;
  margin-left: 10.5%;
  font-weight: bold;
  align-self: start;  // Ensures the title aligns to the start of the Container
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

export default HomeScrolldownWeight;
