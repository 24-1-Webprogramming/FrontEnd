import React from 'react';
import styled from 'styled-components';
import Home_Scrolldown_Meal from './Home_Scrolldown_Meal';
import Home_Scrolldown_Weight from './Home_Scrolldown_Weight';
import Home_Scrolldown_DDay from './Home_Scrolldown_DDay';
import Home_DDayAdd from './Home_DDayAdd'; // Home_DDayAdd 컴포넌트 임포트
import NavBar from '../../Component/NavBar';

const Home_Scrolldown = () => {
  return (
    <Container>
      <Home_DDayAdd
        continuousExerciseDays={30} // 예시 값
        progressBarsData={[
          { totalSteps: 100, currentStep: 70, color: "#72BBFF" },
          { totalSteps: 100, currentStep: 50, color: "#4D61F5" },
          { totalSteps: 100, currentStep: 90, color: "#4D61F5" },
          { totalSteps: 100, currentStep: 30, color: "#4D61F5" }
        ]}
        characterMessage="화이팅!"
      />
      <Content>
        <Section style={{ marginTop: '50px' }}>
          <Home_Scrolldown_Meal />
        </Section>
        <Section style={{ marginTop: '-330px' }}>
          <Home_Scrolldown_Weight />
        </Section>
        <Section>
          <Home_Scrolldown_DDay />
        </Section>
      </Content>
      <NavBar />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding-bottom: 80px;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 111px; // Ensure content starts below the fixed header
`;

const Section = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export default Home_Scrolldown;
