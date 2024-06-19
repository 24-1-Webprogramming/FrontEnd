import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/logo.png';
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correct import


const OnboardingPage = () => {
  const navigate = useNavigate();
  const clientId = '241488948308-7719rl1iltknq0c1mnea32tbhg463ac2.apps.googleusercontent.com';

  const handleLoginSuccess = async (res) => {
    console.log('Login Success:', res);

    const decodedToken = jwtDecode(res.credential);
    console.log('Decoded JWT:', decodedToken);

    // Store user email in local storage if exists in decoded token
    if (decodedToken.email) {
      localStorage.setItem('userEmail', decodedToken.email);
      console.log('User email stored:', decodedToken.email);
    }

    try {
      const response = await axios.post('http://soongitglwebp8.site/auth/google', {
          credential: res.credential
      });
      console.log('Backend response:', response.data);
      if (response.data.success) {
          console.log('Login/Signup successful');
          if (!response.data.isExist) {
              console.log('User does not exist, proceed to registration.');
              navigate('/Onboarding'); // Route to Onboarding if user does not exist
          } else {
              console.log('User exists, proceed with login.');
              navigate('/home'); // Route to main page if user exists
          }
      } else {
          console.log('Login/Signup failed');
          navigate('/Error'); // Route to Error page on failure
      }
    } catch (error) {
      console.error('Error posting to backend:', error);
      navigate('/Error'); // Also route to Error page on network or server error
    }
  };

  const handleLoginFailure = (err) => {
      console.log('Login Failed:', err);
      navigate('/Error'); // Route to Error page on login failure
  };

  return (
    <StyledContainer>
      <TextBox>성장형 헬스 기록 서비스</TextBox>
      <LogoImage src={Logo} alt="Logo" />
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
        />
      </GoogleOAuthProvider>
    </StyledContainer>
  );
};

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


export default OnboardingPage;
