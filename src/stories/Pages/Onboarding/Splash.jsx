import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/logo.png';
import GoogleLoginImage from '../../assets/GoogleLogin.png';

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
    opacity: 0.85;
  }

  position: absolute;
  left: 50%;
  bottom: 51px;
  transform: translateX(-50%);
`;

const OnboardingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const refreshToken = urlParams.get('refreshToken');

    if (token && refreshToken) {
      console.log('Token:', token);           // Log token to console
      console.log('RefreshToken:', refreshToken);  // Log refreshToken to console
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      
      // Ensure navigation happens after storing tokens
      navigate('/onboarding');  // Modify this if you have a different route for post-login
    }
  }, [navigate]);

  return (
    <StyledContainer>
      <TextBox>성장형 헬스 기록 서비스</TextBox>
      <LogoImage src={Logo} alt="Logo" />
      <ImageButton image={GoogleLoginImage} onClick={() => {
        window.location.href = 'http://soongitglwebp8.site/auth/googleLogin';
      }}/>
    </StyledContainer>
  );
};

export default OnboardingPage;
