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
        // Fetch routineData from localStorage or set it to default exampleData if not found
        let storedRoutineData = JSON.parse(localStorage.getItem('routineData'));
        const AIRoutine = JSON.parse(localStorage.getItem('AIRoutine'))?.data[0] || {
            routineId: 1,
            name: 'AI 루틴',
            minutes: 60,
            kcal: 300,
            exercises: [
                { exercise: '에어 스쿼트', sets: [{ weight: 0, reps: 15 }, { weight: 0, reps: 15 }, { weight: 0, reps: 15 }] },
                { exercise: '점프 스쿼트', sets: [{ weight: 0, reps: 10 }, { weight: 0, reps: 10 }] },
                { exercise: '고블릿 스쿼트', sets: [{ weight: 5, reps: 10 }, { weight: 5, reps: 10 }] },
                // more exercises...
            ]
        };

        if (!Array.isArray(storedRoutineData) || storedRoutineData.length === 0) {
            storedRoutineData = [
                {
                    routineId: 2,
                    name: '가벼운 시작 루틴',
                    minutes: 20,
                    kcal: 100,
                    exercises: [
                        { exercise: '에어 스쿼트', sets: [{ weight: 0, reps: 15 }] },
                        { exercise: '덤벨 런지', sets: [{ weight: 3, reps: 10 }] },
                        { exercise: '플랭크', sets: [{ weight: 0, reps: 30 }] }
                    ]
                },
                // Other example routines can be added here...
            ];
            localStorage.setItem('routineData', JSON.stringify(storedRoutineData));
        }

        // Add AI routine to the routine list
        setRoutineData([AIRoutine, ...storedRoutineData]);
    }, []);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleGroupCardClick = (routine) => {
        localStorage.setItem('currentRoutine', JSON.stringify(routine));
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
                <Button label="+" type="border" width={405} height={60} onClick={toggleModal} />
            </Container>
            {isModalOpen && (
                <ModalBackground onClick={toggleModal}>
                    <ModalBox onClick={(e) => e.stopPropagation()}>
                        <ModalContent>
                            <ButtonContainer>
                                <StyledLink to={`/exercise/routine/:id/add`}>
                                    <Button label="AI 루틴 생성" width={350} height={60} />
                                </StyledLink>
                                <StyledLink to={`/exercise/routine/:id/add`}>
                                    <Button label="루틴 직접 생성" type="border" width={350} height={60} />
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
