import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../Component/Image';
import TextField from '../../Component/TextField';
import { Button } from '../../Component/Button';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import styled from 'styled-components';

const ProfileSetupPage = () => {
  const [nickname, setNickname] = useState('');
  const [isSignUpButtonEnabled, setIsSignUpButtonEnabled] = useState(false);
  const navigate = useNavigate();

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

  const handleCancelClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header>
        <CenterContent>프로필 설정</CenterContent>
        <RightButtonWrapper onClick={handleCancelClick}>취소</RightButtonWrapper>
      </Header>
      <ProfileImageContainer>
        <Image 
          src="../../status=view.svg"
          alt="프로필 이미지"
          width="159px"
          height="159px"
        />
        <EditIcon 
          src="../../Edit-icon.svg"
          alt="편집 버튼"
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
          showCharCount={true}  // 문자 수 표시
        />
      </div>
      <FixedButtonContainer>
        <Link to='/Mypage' style={{ textDecoration: 'none' }}>
          <Button 
            onClick={handleComplete} 
            disabled={!isSignUpButtonEnabled}
            label={<BoldText>수정 완료</BoldText>}
            type="primary" 
            style={{ margin: '5px 0', width: '321px' }}
          />
        </Link>
      </FixedButtonContainer>
    </Container>
  );
};

export default ProfileSetupPage;

const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 70px; /* 헤더 높이만큼 패딩 추가 */
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px; /* 헤더 높이 조정 */
  z-index: 1100;
`;

const CenterContent = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: black;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const RightButtonWrapper = styled.div`
  position: absolute;
  right: 20px; /* 버튼 위치 조정 */
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  font-weight: 400;
  color: black;
  cursor: pointer;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 159px;
  height: 159px;
  position: relative;
  margin-top: 50px;
`;

const EditIcon = styled.img`
  position: absolute;
  top: 120px;
  left: 105px;
  width: 42px;
  height: 42px;
  cursor: pointer;
  z-index: 1;
`;

const BoldText = styled.span`
  font-weight: bold;
`;