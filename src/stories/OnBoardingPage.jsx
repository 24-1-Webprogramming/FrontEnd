import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import Logo from './assets/logo.png';
import GoogleLogin from './assets/GoogleLogin.png';

const StyledContainer = styled.div`
  background-color: #495EF6;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; // 컨테이너에 대해 상대적으로 위치
`;

const TextBox = styled.div`
  color: #FFF;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.23px;
`;

const LogoImage = styled.img`
  width: 224px;
  margin-bottom: 20px;
`;

const ImageButton = styled.div`
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 341px;
  height: 56px;
  outline: none;

  &:hover {
    opacity: 0.9;
  }

  position: absolute;
  left: 50%; // 부모 컨테이너 중앙에 위치
  bottom: 51px; // 하단에서 51px 위
  transform: translateX(-50%); // X축으로 자신의 50% 만큼 이동하여 완벽하게 중앙 정렬
`;


const OnboardingPage = () => {
  return (
    <StyledContainer>
      <GlobalStyle />
      <TextBox>성장형 헬스 기록 서비스</TextBox>
      <LogoImage src={Logo} alt="맛있다 로고" />
      <Link to="/profile-setup">
        <ImageButton image={GoogleLogin} />
      </Link>
    </StyledContainer>
  );
};

export default OnboardingPage;
