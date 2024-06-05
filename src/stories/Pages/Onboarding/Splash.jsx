import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../../Component/GlobalStyle';
import Logo from '../../assets/logo.png';
import GoogleLogin from '../../assets/GoogleLogin.png';


const StyledContainer = styled.div`
  background-color: #495EF6;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
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
  left: 50%;
  bottom: 51px;
  transform: translateX(-50%);
`;

const OnboardingPage = () => {
  return (
    <StyledContainer>
      <GlobalStyle />
      <TextBox>성장형 헬스 기록 서비스</TextBox>
      <LogoImage src={Logo} alt="맛있다 로고" />
      <Link to="/onboarding">
        <ImageButton image={GoogleLogin} />
      </Link>
    </StyledContainer>
  );
};

export default OnboardingPage;
