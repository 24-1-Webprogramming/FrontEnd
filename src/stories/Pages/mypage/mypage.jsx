import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../../Component/Image';
import NavBar from '../../Component/NavBar';
import ArrowIcon from '../../../Icon/MyArrow.svg';
import Header from '../../Component/Header';

const MyPageProfileEdit = () => {
    const [nickname, setNickname] = useState('이름없음');
    const [email, setEmail] = useState('untitle@gmail.com');

    useEffect(() => {
        const savedNickname = localStorage.getItem('nickname');
        const savedEmail = localStorage.getItem('userEmail');
        if (savedNickname) {
            setNickname(savedNickname);
        }

        if(savedEmail) {
            setEmail(savedEmail);
        }
    }, []);

    return (
        <Container>
            <Header showIcon={true} text="홈" backButton={false}/>
            <ProfileImageContainer>
                <Image 
                    src="../../status=view.svg"
                    alt="프로필 이미지"
                    width="100px"
                    height="100px"
                    style={{ display: 'block', margin: '0 auto' }}
                />
            </ProfileImageContainer>
            <Nickname>{nickname}</Nickname>
            <Email>{email}</Email>
            <EditProfileButton to="/Edit">
                <EditProfileButtonInner>프로필 편집</EditProfileButtonInner>
            </EditProfileButton>
            <Container2>
                <AccountManagement>
                    <TitleBox>계정관리</TitleBox>
                    <Text1>로그아웃</Text1>
                    <StyledLink to="/Leave">
                        <WithArrow>
                            <Text2>계정탈퇴</Text2>
                            <img src={ArrowIcon} alt="Arrow" />
                        </WithArrow>
                    </StyledLink>
                </AccountManagement>
                <ServiceInformation>
                    <TitleBox>서비스 정보</TitleBox>
                    <StyledLink to="/condition">
                        <WithArrow>
                            <Text2>이용약관</Text2>
                            <img src={ArrowIcon} alt="Arrow" />
                        </WithArrow>
                    </StyledLink>
                </ServiceInformation>
            </Container2>
            <FixedButtonContainer>
                <NavBar activeState="/Mypage" />
            </FixedButtonContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    margin-top: 70px;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 100px;
`;

const ProfileImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const Nickname = styled.div`
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
`;

const Email = styled.div`
    text-align: center;
    font-size: 16px;
    color: #888;
    margin-bottom: 20px;
`;

const EditProfileButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin: 0 auto 20px auto;  // 센터 정렬
    border: 1px solid #888;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    width: 80%;  // 버튼 너비 조정
`;

const EditProfileButtonInner = styled.div`
    font-size: 16px;
`;

const Container2 = styled.div`
    padding: 10px 18px;
    margin: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;  // AccountManagement와 ServiceInformation 사이 간격 조정
`;

const AccountManagement = styled.div`
    margin-bottom: 20px;
`;

const TitleBox = styled.div`
    color: var(--deprecated-Gray-03, #535353);
    font-family: Pretendard;
    font-size: 16px;
    color: #000;
    margin-bottom: 10px;
`;

const Text1 = styled.div`
    color: var(--deprecated-Gray-03, #535353);
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 20px;  // Text1과 Text2 사이 간격 조정
`;

const WithArrow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0px;  // 텍스트와 화살표 사이의 간격 조절
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Text2 = styled.div`
    color: var(--deprecated-Gray-03, #535353);
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 400;
`;

const ServiceInformation = styled.div`
    margin-bottom: 20px;
`;

const FixedButtonContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
`;

export default MyPageProfileEdit;