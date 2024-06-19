import Card from 'Card';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Statistic = () => {
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

export const Water = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/entry/water');
    };
  
    return (
      <StyledCard shadow={false} background='#EEF0FF' width='300px' height='290px'>
        <TextContainer>
          <MainText>오늘의 내 체중</MainText>
          <SubText>00.0KG</SubText>
        </TextContainer>
        <Button onClick={handleClick} label='기록하기' width='80%' />
      </StyledCard>
    );
  };

