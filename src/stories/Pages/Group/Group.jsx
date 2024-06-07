import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../../Component/NavBar';
import Header from '../../Component/Header';
import { Button } from '../../Component/Button';
import { Link } from 'react-router-dom';

// 그룹 데이터 배열
const groupData = [
    { name: "회원님여덟개만더하조", members: 10 },
    { name: "아무것도하기싫조", members: 8 },
    { name: "으아ㅏ앙아아아아악", members: 12 },
];

const Group = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            {isModalOpen && <DarkOverlay />}
            <HeaderContainer isModalOpen={isModalOpen}>
                <Header showIcon={true} text="홈" backButton={false} />
            </HeaderContainer>

            <Container>
                {groupData.map((group, index) => (
                    <GroupCard key={index}>
                        <GroupTextBox>
                            <GroupTitle>{group.name}</GroupTitle>
                            <GroupSub>{group.members}명의 그룹원</GroupSub>
                        </GroupTextBox>
                    </GroupCard>
                ))}
                <Button
                    label="+"
                    type="border"
                    width={405}
                    height={60}
                    onClick={toggleModal}
                />
            </Container>
            <NavBar activeState="Group" />
            {isModalOpen && (
                <ModalBackground onClick={toggleModal}>
                    <ModalBox onClick={(e) => e.stopPropagation()}>
                        <ModalContent>
                            <ButtonContainer>
                                <Link to="/group/create">
                                    <Button
                                        label="개설하기"
                                        width={350}
                                        height={60}
                                    />
                                </Link>
                                <Link to="/group/join">
                                    <Button
                                        label="가입하기"
                                        type="border"
                                        width={350}
                                        height={60}
                                    />
                                </Link>
                            </ButtonContainer>
                        </ModalContent>
                    </ModalBox>
                </ModalBackground>
            )}
        </>
    );
};

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

export default Group;
