import NavBar from '../../Component/NavBar';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from '../../Component/Image';
import ArrowIcon from '../../../Icon/MyArrow.svg';
import Header from '../../Component/Header';

const Mypage = () => {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  const [activeState, setActiveState] = useState('Mypage');

  return (
    <Container>
      <Header showIcon={true} backButton={false}/>
      <Content>
        <ProfileSection>
          <ProfileImageContainer>
            <StyledImage
              src="../../status=view.svg" // 이미지 경로 수정
              alt="프로필 이미지"
              width="100px"
              height="100px"
            />
          </ProfileImageContainer>
          <Nickname>{nickname}</Nickname>
          <Email>newnya@gmail.com</Email>
          <StyledLink to="/Mypage-profile-edit-page">
            <EditProfileButton>프로필 편집</EditProfileButton>
          </StyledLink>
        </ProfileSection>
        <AccountSection>
          <SectionTitle>계정관리</SectionTitle>
          <Logout>로그아웃</Logout>
          <StyledLink to="/MypageLeave">
            <LinkContainer>
              계정탈퇴 <Arrow src={ArrowIcon} />
            </LinkContainer>
          </StyledLink>
        </AccountSection>
        <ServiceSection>
          <SectionTitle>서비스 정보</SectionTitle>
          <StyledLink to="/MypageCondition">
            <LinkContainer>
              이용약관 <Arrow src={ArrowIcon} />
            </LinkContainer>
          </StyledLink>
        </ServiceSection>
      </Content>
      <NavBar
        activeState={activeState}
        setActiveState={setActiveState}
        style={{ borderTop: '1px solid #ddd' }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 393px;
  height: 852px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  margin-top: 20%;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
  padding-top: 50px; // Ensure content starts below the fixed header
`;

const ProfileSection = styled.div`
  text-align: center;
  margin-top: -40px;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  display: block;
  margin: 0 auto;
`;

const Nickname = styled.h2`
  margin: 10px 0;
  font-size: 18px;
`;

const Email = styled.p`
  font-size: 14px;
  color: #666;
`;

const StyledLink = styled(Link)`
  text-decoration: none; // Remove underline from Link
`;

const EditProfileButton = styled.button`
  padding: 10px 130px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
`;

const AccountSection = styled.div`
  padding: 20px;
  font-size: 14px;
`;

const ServiceSection = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Logout = styled.p`
  margin-bottom: 10px;
  cursor: pointer;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.img`
  margin-left: auto; // Ensures the arrow icon is aligned to the right
`;

export default Mypage;
