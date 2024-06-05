import React from 'react';
import CryImage from '../assets/DumbbellCrying2.svg';
import Image from '../Component/Image';
import styled from 'styled-components';
import { Button } from '../Component/Button';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Container>
          <PageTitle>
            잘못된 접근이에요!<br/><span style={{ color: '#495EF6' }}>다시 돌아가주세요!</span>
          </PageTitle>
          <Image
              src={CryImage}
              alt="프로필 이미지"
              width="144px"
              height="240px"
            />
          <FixedButtonContainer>
            <Link to='/'>
              <Button
                label="돌아가기"
                type="primary"
                size="medium"
              />
            </Link>
          </FixedButtonContainer>
        </Container>
      );
};

const PageTitle = styled.h2`
  color: var(--Primary, #000000);
  font-family: 'Pretendard', sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.75px;
  text-align: left;
  width: 322px;
  margin-bottom: 87px;
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

const FixedButtonContainer = styled.div`
    position: fixed;  
    bottom: 52px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 20px;
    box-sizing: border-box;
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

export default Error;
