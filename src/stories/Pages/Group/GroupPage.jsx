import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../Component/Header';
import styled from 'styled-components';
import Card from '../../Component/Card';
import { TrophyIcon, PlusIcon } from '../../Component/icon';
import NavBar from '../../Component/NavBar';
import { Button } from '../../Component/Button';

const GroupPage = () => {
    const { id } = useParams();
    const [groupData, setGroupData] = useState([]);

    useEffect(() => {
        // Load group data from localStorage
        const loadedGroupData = localStorage.getItem('groupData');
        if (loadedGroupData) {
            setGroupData(JSON.parse(loadedGroupData));
        }
    }, []);

    // Find current group using the ID from the URL
    const currentGroup = groupData.find(group => group.groupid === parseInt(id));
    const totalPlayers = currentGroup ? currentGroup.members.length : 0;
    const rankingData = currentGroup ? currentGroup.members : [];

    return (
        <div>
            <Header showIcon={false} text={currentGroup ? currentGroup.name : 'Loading...'} backButton={true} />
            <Container>
                <Content>
                    <Card
                        background="linear-gradient(to right, #5467F5 , #2915AA )"
                        borderRadius="16px"
                        color="#fff"
                        height="70px"
                        width="80%"
                    >
                        <CardContent>
                            <TrophyIcon />
                            <CardTextBox>
                                <CardPercent>상위 {totalPlayers ? ((rankingData.findIndex(member => member.name === "편유나") + 1) / totalPlayers * 100).toFixed(1) : '...'}%</CardPercent>
                                <CardDescription>(총 {totalPlayers}명의 플레이어)</CardDescription>
                            </CardTextBox>
                        </CardContent>
                    </Card>
                    <RankingTitle>랭킹</RankingTitle>
                    <RankingContainer>
                        <RankingList>
                            {rankingData.map((player, index) => (
                                <RankingItem 
                                    key={index} 
                                    isCurrentUser={"편유나" === player.name}
                                >
                                    <ProfileImg src={player.profileImg} alt={`${player.name}'s profile`} />
                                    <Rank>{player.rank}위</Rank>
                                    <Name>{player.name}</Name>
                                </RankingItem>
                            ))}
                        </RankingList>
                    </RankingContainer>
                    <MembersTitle>그룹원</MembersTitle>
                    <MembersContainer>
                        {rankingData.map((member, index) => (
                            <MemberBox key={index}>
                                <MemberProfileImg src={member.profileImg} alt={`${member.name}'s profile`} />
                                <MemberName>{member.name}</MemberName>
                            </MemberBox>
                        ))}
                        <PlusIconContainer>
                            <Link to={`/group/${id}/invite`}>
                                <PlusIcon />
                            </Link>
                        </PlusIconContainer>
                    </MembersContainer>
                </Content>
                <ButtonBox>
                    <Button
                        label="그룹 나가기"
                        type="warning"
                        onClick={() => console.log('Leaving group...')}
                    />
                </ButtonBox>
            </Container>
            <NavBarWrapper>
                <NavBar activeState="Group" />
            </NavBarWrapper>
        </div>
    );
};

const ButtonBox = styled.div`
    margin-top: 30%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30%; /* Add padding to ensure content is not hidden behind the NavBar */
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    width: 100%; /* Ensure the content takes full width */
    overflow-y: auto; /* Allow scrolling if content overflows */
`;

const CardContent = styled.div`
    display: flex;
    width: 80%;
    height: 20%;
    padding: 13px 30px;
    align-items: center;
    justify-content: start;
    gap: 15px;
`;

const CardTextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3px;
    margin-left: 10px;
    margin-top: 5px;
`;

const CardPercent = styled.div`
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 21.6px */
    letter-spacing: -0.18px;
`;

const CardDescription = styled.div`
    color: rgba(255, 255, 255, 0.90);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 16.8px */
    letter-spacing: -0.14px;
`;

const RankingContainer = styled.div`
    align-self: flex-start;
    margin-left: 10%;
    width: 80%;
    max-width: 80%;
    max-height: 220px;
    overflow-y: scroll;
    border-radius: 10px;
    padding: 10px;
    background: #fff;
    border: none;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #5467F5;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
`;

const RankingTitle = styled.h2`
    text-align: start;
    color: #333;
    width: 80%;
    color: var(--Primary, #5467F5);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 30px;
`;

const RankingList = styled.div`
    display: flex;
    flex-direction: column;
`;

const RankingItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 7px;
    border-bottom: 1px solid #eee;
    ${({ isCurrentUser }) => isCurrentUser && `
        background: #EEF0FF;
        border-radius: 10px;
    `}
`;

const ProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Rank = styled.div`
    color: var(--Active, #495EF6);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
`;

const Name = styled.div`
    color: #404040;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
`;

const MembersTitle = styled.h2`
    text-align: start;
    font-size: 18px;
    color: #333;
    width: 80%;
    color: var(--Primary, #5467F5);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 30px;
`;

const MembersContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%; /* 화면의 70%만 보이도록 설정 */
    overflow-x: auto; /* 가로 스크롤을 활성화 */
    padding: 10px;
    margin-top: -10px;

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #dbdbdb;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
`;

const MemberBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
`;

const MemberProfileImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const MemberName = styled.div`
    margin-top: 5px;
    font-size: 15px;
    color: #535353;
    font-weight: 500;
`;

const PlusIconContainer = styled.div`
    display: flex;
    margin-bottom: 25px;
`;

const NavBarWrapper = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

export default GroupPage;
