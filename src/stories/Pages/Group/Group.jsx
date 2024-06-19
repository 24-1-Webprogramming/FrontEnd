import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../../Component/NavBar';
import Header from '../../Component/Header';
import { Button } from '../../Component/Button';
import { Link } from 'react-router-dom';
import Profile from '../../../Icon/profile.png'; // 프로필 이미지 경로 수정

// 그룹 데이터 정의
const initialGroupData = [
    {
        name: "체육대회 준비팀",
        groupid: 1,
        members: [
            { rank: 1, name: '김준호', profileImg: Profile, nickname: 'Junho' },
            { rank: 2, name: '이승기', profileImg: Profile, nickname: 'Seunggi' },
            { rank: 3, name: '정소민', profileImg: Profile, nickname: 'Somin' },
            { rank: 4, name: '편유나', profileImg: Profile, nickname: 'Yuna' }
        ]
    },
    {
        name: "주말 등산 클럽",
        groupid: 2,
        members: [
            { rank: 1, name: '편유나', profileImg: Profile, nickname: 'Yuna' },
            { rank: 2, name: '박지성', profileImg: Profile, nickname: 'Jisung' },
            { rank: 3, name: '이영표', profileImg: Profile, nickname: 'Youngpyo' },
            { rank: 4, name: '황희찬', profileImg: Profile, nickname: 'Heechan' },
            { rank: 5, name: '구자철', profileImg: Profile, nickname: 'Jacheol' }
        ]
    },
    {
        name: "매일 요가 도전",
        groupid: 3,
        members: [
            { rank: 1, name: '유재석', profileImg: Profile, nickname: 'Jaeseok' },
            { rank: 2, name: '지석진', profileImg: Profile, nickname: 'Seokjin' },
            { rank: 3, name: '김종국', profileImg: Profile, nickname: 'Jongkook' },
            { rank: 4, name: '편유나', profileImg: Profile, nickname: 'Yuna' },
            { rank: 5, name: '송지효', profileImg: Profile, nickname: 'Jihyo' },
            { rank: 6, name: '양세찬', profileImg: Profile, nickname: 'Sechan' }
        ]
    }
];

const Group = () => {
    const [groupData, setGroupData] = useState([]);

    useEffect(() => {
        // 로컬 스토리지에서 그룹 데이터 로드 또는 초기화
        const storedGroupData = localStorage.getItem('groupData');
        if (!storedGroupData) {
            localStorage.setItem('groupData', JSON.stringify(initialGroupData));
            setGroupData(initialGroupData);
        } else {
            setGroupData(JSON.parse(storedGroupData));
        }
    }, []);

    return (
        <Container>
            {groupData.map((group, index) => (
                <StyledLink to={`/group/${group.groupid}`} key={index}>
                    <GroupCard>
                        <GroupTextBox>
                            <GroupTitle>{group.name}</GroupTitle>
                            <GroupSub>{group.members.length}명의 그룹원</GroupSub>
                        </GroupTextBox>
                    </GroupCard>
                </StyledLink>
            ))}
            <NavBar activeState="Group" />
        </Container>
    );
};

export default Group;

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