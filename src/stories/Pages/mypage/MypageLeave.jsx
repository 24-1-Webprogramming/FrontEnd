import React, { useEffect, useState } from 'react';
import { Button } from '../../Component/Button';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../../Component/Image';
import MySVGIcon from './Leave_check'; // import the SVG component
import DumbbellCryingIcon from '../../../Icon/Crying2.svg'; // DumbbellCrying3 SVG import

const SurveyStartPage = () => {
  const [nickname, setNickname] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  const handleButtonClick = () => {
    setButtonClicked(true);
    // 추가로 필요한 로직이 있다면 여기 추가
  };

  const handleAgreementClick = () => {
    setAgreementChecked(!agreementChecked);
  };

  const handleCancelClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header>
        <CenterContent>계정탈퇴</CenterContent>
        <RightButtonWrapper onClick={handleCancelClick}>취소</RightButtonWrapper>
      </Header>
      <Content>
        <Title>
          {nickname}님과 헤어지기 싫어요<br />
          <Highlight>정말 떠나실 건가요?</Highlight>
        </Title>
        <Image src={DumbbellCryingIcon} alt="프로필 이미지" width="144px" height="240px" />
        <Description><Bold>{nickname}님</Bold>과의 추억 정리 중...</Description>
        <Agreement onClick={handleAgreementClick} agreementChecked={agreementChecked}>
          <MySVGIcon style={{ width: '20px', height: '20px' }} />
          <AgreementText>안내 사항을 확인하였으며, 이에 동의합니다.</AgreementText>
        </Agreement>
        <FixedButtonContainer>
          <Link to={agreementChecked ? '/survey' : '#'} style={{ textDecoration: 'none' }}>
            <Button
              label={<BoldText>탈퇴하기</BoldText>}
              type="primary"
              style={{
                backgroundColor: agreementChecked ? '#FF3C3C' : '#fff',
                color: agreementChecked ? '#fff' : '#FF3C3C',
                border: '1px solid #FF3C3C',
                width: '341px',
                height: '56px',
                padding: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '12px',
                textDecoration: 'none',
              }}
              onClick={handleButtonClick}
              disabled={!agreementChecked}
            />
          </Link>
        </FixedButtonContainer>
      </Content>
    </Container>
  );
};

export default SurveyStartPage;

const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 49px; /* 헤더 높이만큼 패딩 추가 */
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
  height: 49px;
  z-index: 1000;
  padding: 10px 10px 20px 10px;

`;

const CenterContent = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: black;
  position: absolute;
  left: 43%;
  transform: translateX(-60%);
  transform: translateY(30%);
`;

const RightButtonWrapper = styled.div`
  position: absolute;
  right: 60px; /* 버튼 위치 조정 */
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  font-weight: 400;
  color: black;
  cursor: pointer;
  z-index: 1100;
`;

const Content = styled.div`
  width: 393px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
  
`;

const Title = styled.h2`
  text-align: left;
  width: 322px;
  height: 63px;
  font-family: 'Pretendard Variable';
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.75px;
  color: var(--deprecated-Gray-01, #252525);
  margin-top: 80px;
`;

const Highlight = styled.span`
  color: var(--Primary, #5467F5);
  font-family: 'Pretendard Variable';
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.75px;
  
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

const Agreement = styled.div`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-size: 14px;
  color: ${({ agreementChecked }) => (agreementChecked ? '#FF3C3C' : '#535353')};
  margin-top: 190px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: left;
  width: 100%;
  justify-content: left;
  padding: 10px 0;
`;

const AgreementText = styled.span`
  margin-left: 10px;
`;

const FixedButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
`;

const Bold = styled.span`
  font-weight: 800;
`;

const BoldText = styled.span`
  font-family: 'Pretendard Variable';
  font-weight: bold;
`;