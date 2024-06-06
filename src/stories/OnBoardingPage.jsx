// OnboardingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트를 가져옴
import { Button } from './Button'; // Button 컴포넌트를 가져옴

const OnboardingPage = () => {
  return (
    <div style={{ backgroundColor: '#495EF6', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <img src='../../Logo.svg' alt="맛있다 로고" style={{ width: '200px', marginBottom: '20px' }} />
      {/* 프로필 설정 페이지로 이동하는 링크 */}
      <Link to="/profile-setup">
        <Button label="시작하기" type='border'/>
      </Link>
    </div>
  );
};

export default OnboardingPage;
