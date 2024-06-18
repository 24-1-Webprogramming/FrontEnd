import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Hbar2 from './Hbar2';
import MySVGIcon from './Leave_check'; // import the SVG component
import styled from 'styled-components';
import DumbbellCryingIcon from '../Icon/Crying2.svg'; // DumbbellCrying3 SVG import

const SurveyStartPage = () => {
  const [nickname, setNickname] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  const handleCancel = () => {
    console.log('취소');
    // 취소 기능 구현
  };

  const handleComplete = () => {
    console.log('완료');
    // 완료 기능 구현
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    // 추가로 필요한 로직이 있다면 여기 추가
  };

  const handleAgreementClick = () => {
    setAgreementChecked(!agreementChecked);
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <Hbar2 onSave={handleComplete} onCancel={handleCancel} />
      </HeaderContainer>
      <ContentContainer>
        <h2 style={{ marginTop: '30px', textAlign: 'left', width: '322px', height: '63px', fontFamily: 'Pretendard Variable', fontSize: '25px', fontStyle: 'normal', fontWeight: '700', lineHeight: '120%', letterSpacing: '-0.75px', color: 'var(--deprecated-Gray-01, #252525)' }}>
          {nickname}님과 헤어지기 싫어요<br />
          <span style={{ color: 'var(--Primary, #5467F5)', fontFamily: 'Pretendard Variable', fontSize: '25px', fontStyle: 'normal', fontWeight: '700', lineHeight: '120%', letterSpacing: '-0.75px' }}>
            정말 떠나실 건가요?
          </span>
        </h2>
        <img src={DumbbellCryingIcon} />
        <p style={{ fontSize: '14px', marginTop: '10px' }}>{nickname}님과의 추억 정리 중...</p>
        <AgreementContainer onClick={handleAgreementClick} agreementChecked={agreementChecked}>
          <MySVGIcon style={{ width: '20px', height: '20px' }} />
          <span style={{ marginLeft: '10px' }}>안내 사항을 확인하였으며, 이에 동의합니다.</span>
        </AgreementContainer>
        <ButtonContainer>
          <Link to={agreementChecked ? '/survey' : '#'} style={{ textDecoration: 'none' }}>
            <Button
              label={<BoldText>탈퇴하기</BoldText>}
              type="primary"
              size="medium"
              style={{
                backgroundColor: agreementChecked ? 'var(--Red-500, #FF3C3C)' : '#fff',
                color: agreementChecked ? '#fff' : '#FF3C3C',
                border: '1px solid #FF3C3C',
                width: '341px',
                height: '56px',
                padding: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '12px',
                textDecoration: 'none', // 밑줄 제거
              }}
              onClick={handleButtonClick}
              disabled={!agreementChecked}
            />
          </Link>
        </ButtonContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default SurveyStartPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden; /* 스크롤 비활성화 */
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
  background-color: #fff;
  width: 393px;
  flex: 1; /* 남은 공간을 차지하도록 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px; /* 상단 패딩 제거, 좌우 패딩 추가 */
  box-sizing: border-box;
  position: relative;
  overflow: hidden; /* 스크롤 비활성화 */
`;

const AgreementContainer = styled.div`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-size: 14px;
  color: ${({ agreementChecked }) => (agreementChecked ? '#FF3C3C' : '#535353')};
  margin-top: 70px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: left;
  width: 100%;
  justify-content: left;
  padding: 10px 0;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  bottom: 3px;
`;

const BoldText = styled.span`
  font-family: 'Pretendard Variable';
  font-weight: bold;
`;