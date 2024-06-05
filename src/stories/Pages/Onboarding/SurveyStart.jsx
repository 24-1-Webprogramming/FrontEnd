import React, { useEffect, useState } from 'react';
import { Button } from '../../Component/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../../Component/Image';
import CryImage from '../../assets/DumbbellCrying2.svg';
import PageTitle from '../../Component/PageTitle';
import FixedButtonContainer from '../../Component/FixedButtonContainer';

const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const DescriptionText = styled.p`
  color: var(--deprecated-Gray-01, #252525);
  font-family: 'Pretendard', sans-serif; 
  font-size: 15px;
  font-style: normal;
  font-weight: 500; 
  line-height: 120%; 
  letter-spacing: -0.42px;
  margin-top: 10px; 
`;

const Bold = styled.span`
  font-weight: 800;
`;

const SurveyStartPage = () => {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);
  
  return (

    <Container>
      <PageTitle>
        {nickname}님을 더 알고 싶어요. <br /><span style={{ color: '#495EF6' }}>몇 가지 질문에 답해주실래요?</span>
      </PageTitle>
      <Image
          src={CryImage}
          alt="프로필 이미지"
          width="144px"
          height="240px"
        />
        <DescriptionText><Bold>{nickname}님</Bold>의 정보 저장소에 먼지만 날리는 중...</DescriptionText>
      <FixedButtonContainer>
        <Link to='/survey/question'>
          <Button
            label="알려주기"
            type="primary"
            size="medium"
          />
        </Link>
      </FixedButtonContainer>
    </Container>
  );
};

export default SurveyStartPage;