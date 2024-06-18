import React from 'react';
import styled from 'styled-components';
import NavBar from '../../Component/NavBar';
import Header from '../../Component/Header';
import { HeadLine, CharacterSector } from './HomeS';
import { DDay } from './HomeS2';

const Home_DDayAdd = ({}) => {
  // Sample currentSteps values
  const currentSteps = [70, 50, 90, 30];

  return (
    <Container>
      <Header showIcon={true} backButton={false} />
      <HeadLine />
      <CharacterSector
        continuousExerciseDays={5}
        characterMessage="작디작은 1kg 아령"
        currentSteps={currentSteps}
      />
      <NavBar />
      <DDay/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
  background-color: #fff;
`;

export default Home_DDayAdd;
