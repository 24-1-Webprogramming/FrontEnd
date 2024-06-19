import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';

const HomeScrolldownDDay = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRecordClick = () => {
    navigate('/entry/dday'); // Navigate to the 'record-day' route when clicked
  };

  return (
    <Container>
      <Title>D-Day 등록</Title>
      <Box>
        <TextBox>
          <Text>
            <span style={{ color: "#5467F5" }}>중요한 날이 있나요?</span>
            <br/>잊지말고 등록해보세요!
          </Text>
        </TextBox>
        <Button onClick={handleRecordClick}>기록하기</Button>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
`

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
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

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

export default HomeScrolldownDDay;
