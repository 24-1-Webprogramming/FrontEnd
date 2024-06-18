import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import TextBox from './TextBox';
import { Button } from './Button';
import ProfileHeader from './Hbar'; // ProfileHeader 컴포넌트 임포트
import styled from 'styled-components';

const ProfileSetupPage = () => {
  const [nickname, setNickname] = useState('');
  const [isSignUpButtonEnabled, setIsSignUpButtonEnabled] = useState(false);

  const saveNicknameToLocalStorage = (nickname) => {
    localStorage.setItem('nickname', nickname);
  };

  useEffect(() => {
    setIsSignUpButtonEnabled(nickname.trim().length > 0); // 닉네임이 입력되면 버튼 활성화
  }, [nickname]);

  const handleComplete = () => {
    saveNicknameToLocalStorage(nickname);
    console.log('수정 완료:', nickname);
  };

  const handleCancel = () => {
    console.log('취소');
    // 취소 기능 구현
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <ProfileHeader onSave={handleComplete} onCancel={handleCancel} />
      </HeaderContainer>
      <ContentContainer>
        <ProfileImageContainer>
          <Image 
            src="../../status=view.svg"
            alt="프로필 이미지"
            width="100px"
            height="100px"
          />
          <EditIcon 
            src="../../Edit-icon.svg"
            alt="편집 버튼"
            onClick={() => alert('편집 기능 구현 필요')}
          />
        </ProfileImageContainer>
        <TextBox 
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={10}
          placeholder=""
          showCharCount={true}  // 문자 수 표시
        />
      </ContentContainer>
      <ButtonContainer>
        <Link to='/survey-start' style={{ textDecoration: 'none' }}>
          <Button 
            onClick={handleComplete} 
            disabled={!isSignUpButtonEnabled}
            label={<BoldText>수정 완료</BoldText>}
            type="primary" 
            size="medium" 
            backgroundColor={isSignUpButtonEnabled ? '#5467F5' : 'var(--deactive, #B2BAC2)'}
          />
        </Link>
      </ButtonContainer>
    </PageContainer>
  );
};

export default ProfileSetupPage;

const PageContainer = styled.div`
  background-color: #fff;
  height: 852px;
  width: 393px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  width: 393px; /* 페이지 크기에 맞추기 */
  background-color: #fff;
  padding: 20px 0; /* 여유 공간 추가 */
  display: flex;
  justify-content: center;
  box-shadow: none; /* 헤더 밑의 선 제거 */
  border-bottom: none; /* 헤더 밑의 선 제거 */
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 위쪽으로 정렬 */
  flex: 1;
  margin-top: 10px; /* 더 위로 이동 */
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 30px; /* 더 위로 이동 */
`;

const EditIcon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 1;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  bottom: 60px;
  font-weight: bold;
  font-style: normal;
`;

const BoldText = styled.span`
  font-weight: bold;
`;