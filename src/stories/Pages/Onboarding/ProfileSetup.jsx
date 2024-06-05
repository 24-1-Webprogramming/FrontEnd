import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../Component/Image';
import TextField from '../../Component/TextField';
import { Button } from '../../Component/Button';
import styled from 'styled-components';

const PageTitle = styled.h2`
  color: var(--Primary, #000000);
  font-family: 'Pretendard', sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.75px;
  text-align: left;
`;

const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  position: relative;
  margin-top: 50px;
`;

const ProfileSetupPage = () => {
  const [nickname, setNickname] = useState('');
  const [isSignUpButtonEnabled, setIsSignUpButtonEnabled] = useState(false);

  const saveNicknameToLocalStorage = (nickname) => {
    localStorage.setItem('nickname', nickname);
  };

  useEffect(() => {
    setIsSignUpButtonEnabled(nickname.trim().length > 0);
  }, [nickname]);

  const handleComplete = () => {
    saveNicknameToLocalStorage(nickname);
    console.log('가입 완료:', nickname);
  };

  return (
    <Container>
      <PageTitle>
        맛있다에서 사용할 <br /><span style={{ color: '#495EF6' }}>닉네임과 프로필</span>을 설정해주세요
      </PageTitle>
      <ProfileImageContainer>
        <Image
          src="../../status=view.svg"
          alt="프로필 이미지"
          width="159px"
          height="159px"
        />
        <img
          src="../../Edit-icon.svg"
          alt="편집 버튼"
          style={{ position: 'absolute', top: 90, left:85, width: '42px', height: '42px', cursor: 'pointer' }}
          onClick={() => alert('편집 기능 구현 필요')}
        />
      </ProfileImageContainer>
      <div style={{ marginTop: '20px' }}>
        <h5>닉네임<br /></h5>
        <TextField
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={10}
          placeholder=""
          showCharCount={true}
        />
      </div>
      <Link to='/survey'>
        <Button
          onClick={handleComplete}
          disabled={!isSignUpButtonEnabled}
          label="가입완료"
          type="primary"
          size="medium"
          style={{ marginTop: '20px' }}
        />
      </Link>
    </Container>
  );
};

export default ProfileSetupPage;