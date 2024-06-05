// OnboardingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트를 가져옴
import { Button } from './Button'; // Button 컴포넌트를 가져옴
import Logo from './assets/logo.png';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';

let TextBox = styled.div`
  color: #FFF;
  font-size: 23px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.23px;
`

const OnboardingPage = () => {
  return (
    <div style={{ backgroundColor: '#495EF6', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <GlobalStyle/>
      <TextBox>성장형 헬스 기록 서비스</TextBox>
      <img src={Logo} alt="맛있다 로고" style={{ width: '224px', marginBottom: '20px' }} />
      <Link to="/profile-setup">
        <Button label="시작하기" type='border'/>
      </Link>
    </div>
  );
};

export default OnboardingPage;
