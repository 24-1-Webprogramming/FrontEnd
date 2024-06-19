import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from '../../Component/NavBar';
import Header from '../../Component/Header';
import { Button } from '../../Component/Button';
import { Link } from 'react-router-dom';

const ExerciseRoutineList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [routineData, setRoutineData] = useState([]);
  
    useEffect(() => {
      // 로컬 스토리지에서 데이터 가져오기
      const exampleData = [
        {
          routineId: 1,
          name: '아침불끈근육맨 루틴',
          minutes: 30,
          kcal: 200,
          exercises: [
            { exerciseId: 1, sets: [{ kg: 100, reps: 10 }, { kg: 120, reps: 8 }] },
            { exerciseId: 2, sets: [{ kg: 80, reps: 12 }] }
          ]
        },
        {
          routineId: 2,
          name: '사랑의 세레나데 루틴',
          minutes: 4444,
          kcal: 4444,
          exercises: [
            { exerciseId: 1, sets: [{ kg: 100, reps: 10 }, { kg: 120, reps: 8 }] },
            { exerciseId: 2, sets: [{ kg: 80, reps: 12 }] }
          ]
        }
      ];

      const storedRoutineData = localStorage.getItem('routineData');
      if (storedRoutineData) {
        setRoutineData(JSON.parse(storedRoutineData));
      } else {
        setRoutineData(exampleData);
        localStorage.setItem('routineData', JSON.stringify(exampleData));
      }
    }, []);
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    const handleGroupCardClick = (routine) => {
      localStorage.setItem('currentRoutine', routine.name); // Save currentRoutine to localStorage
      // You can also save other relevant information about the routine if needed
    };
  
    return (
      <>
        {isModalOpen && <DarkOverlay />}
        <HeaderContainer isModalOpen={isModalOpen}>
          <Header text="나의 루틴" backButton={true} />
        </HeaderContainer>
  
        <Container>
          {routineData.map((routine, index) => (
            <StyledLink to={`/exercise/main`} key={index} onClick={() => handleGroupCardClick(routine)}>
              <GroupCard>
                <GroupTextBox>
                  <GroupTitle>{routine.name}</GroupTitle>
                  <GroupSub>{routine.minutes}분 · {routine.exercises.length}개 · {routine.kcal}Kcal</GroupSub>
                </GroupTextBox>
              </GroupCard>
            </StyledLink>
          ))}
          <Button
            label="+"
            type="border"
            width={405}
            height={60}
            onClick={toggleModal}
          />
        </Container>
        {isModalOpen && (
          <ModalBackground onClick={toggleModal}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
              <ModalContent>
                <ButtonContainer>
                  <StyledLink to={`/exercise/routine/:id/add`}>
                    <Button
                      label="AI 루틴 생성"
                      width={350}
                      height={60}
                    />
                  </StyledLink>
                  <StyledLink to={`/exercise/routine/:id/add`}>
                    <Button
                      label="루틴 직접 생성"
                      type="border"
                      width={350}
                      height={60}
                    />
                  </StyledLink>
                </ButtonContainer>
              </ModalContent>
            </ModalBox>
          </ModalBackground>
        )}
        <NavBar activeState='Exercise' />
      </>
    );
  };

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const HeaderContainer = styled.div`
    position: relative;
    z-index: ${({ isModalOpen }) => (isModalOpen ? '101' : '1')};
`;

const DarkOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 100;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;
    gap: 12px;
`;

const GroupTitle = styled.div`
    color: var(--Primary, #5467F5);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -0.8px;
    transition: color 0.3s;
`;

const GroupSub = styled.div`
    color: var(--Secondary, #809ED8);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -0.6px;
    transition: color 0.3s;
`;

const GroupCard = styled.div`
    display: flex;
    width: 341px;
    height: 99px;
    padding: 0 30px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    border-radius: 9px;
    border: 1px solid var(--Primary, #5467F5);
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #5467F5;

        ${GroupTitle}, ${GroupSub} {
            color: white;
        }
    }
`;

const GroupTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 102;
`;

const ModalBox = styled.div`
    width: 90%;
    max-width: 450px;
    height: 299px;
    border-radius: 31px 31px 0 0;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    padding: 20px;
    text-align: center;
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export default ExerciseRoutineList;
