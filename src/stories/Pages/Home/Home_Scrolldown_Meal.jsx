import React, { useState } from 'react';
import SunHorizonIcon from '../../../Icon/SunHorizon.svg';
import SunIcon from '../../../Icon/Sun.svg';
import MoonStarsIcon from '../../../Icon/MoonStars.svg';
import PopcornIcon from '../../../Icon/Popcorn.svg';
import HomeScrolldownWater from './Home_Scrolldown_Water';
import styled from 'styled-components';

const HomeScrolldownMeal = () => {
  const [activeTab, setActiveTab] = useState('meal');

  const meals = [
    { name: '아침', icon: <img src={SunHorizonIcon} />, kcal: '371kcal', isInputted: true },
    { name: '점심', icon: <img src={SunIcon} />, kcal: '371kcal', isInputted: true },
    { name: '저녁', icon: <img src={MoonStarsIcon} />, kcal: '입력전', isInputted: false },
    { name: '기타', icon: <img src={PopcornIcon} />, kcal: '입력전', isInputted: false },
  ];

  return (
    <Container>
      <MealManagement>
        <Header>
          <Title>식단 관리</Title>
          <Tabs>
            <TabButton
              active={activeTab === 'meal'}
              onClick={() => setActiveTab('meal')}
            >
              식사
            </TabButton>
            <TabButton
              active={activeTab === 'water'}
              onClick={() => setActiveTab('water')}
            >
              물
            </TabButton>
          </Tabs>
        </Header>
        <Content>
          {activeTab === 'meal' && (
            <MealCards>
              {meals.map((meal, index) => (
                <MealCard key={index} isInputted={meal.isInputted}>
                  <IconContainer>{meal.icon}</IconContainer>
                  <MealName isInputted={meal.isInputted}>{meal.name}</MealName>
                  <MealKcal isInputted={meal.isInputted}>{meal.kcal}</MealKcal>
                </MealCard>
              ))}
            </MealCards>
          )}
          {activeTab === 'water' && <HomeScrolldownWater />}
        </Content>
      </MealManagement>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
`;

const MealManagement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin: 20px 0;
  background-color: #fff;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Title = styled.h2`
  margin-right: auto;
  font-size: 20px;
  font-weight: bold;
`;

const Tabs = styled.div`
  display: flex;
  margin-left: 100px;
`;

const TabButton = styled.button`
  margin: 0 5px;
  padding: 5px 14px;
  font-family: Pretendard;
  font-size: 16px;
  border-radius: 20px;
  border: 1px solid ${props => (props.active ? '#5467F5' : '#ddd')};
  background-color: #fff;
  color: ${props => (props.active ? '#5467F5' : '#000')};
  cursor: pointer;
  font-weight: bold;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MealCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
`;

const MealCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  width: 120px;
  height: 140px;
  padding: 25px 25px;
  border-radius: 10px;
  background-color: ${props => (props.isInputted ? '#5467F5' : '#EEF0FF')};
`;

const IconContainer = styled.div`
  margin-bottom: -4px;
`;

const MealName = styled.p`
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 0.4px;
  margin: 0;
  color: ${props => (props.isInputted ? '#fff' : '#5467F5')};
`;

const MealKcal = styled.p`
  font-size: 13px;
  letter-spacing: 0.2px;
  margin-top:5px;
  font-weight: 400;
  color: ${props => (props.isInputted ? '#fff' : '#5467F5')};
`;

export default HomeScrolldownMeal;