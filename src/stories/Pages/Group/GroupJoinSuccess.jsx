import React, { useEffect, useState } from 'react';
import { Button } from '../../Component/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from '../../Component/Image';
import FixedButtonContainer from '../../Component/FixedButtonContainer';
import FunImage from '../../assets/DumbbellSuccess.svg';

const Container = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 34px;
`;


const PageTitle = styled.h2`
  color: var(--Primary, #000000);
  font-family: 'Pretendard', sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.75px;
  text-align: center;
`;


const GroupJoinSuccess = () => {
  const [groupname, setGroupname] = useState('');

  useEffect(() => {
    const groupnames = localStorage.getItem('groupnames');
    if (groupnames) {
      try {
        const groupnamesArray = JSON.parse(groupnames);
        if (Array.isArray(groupnamesArray) && groupnamesArray.length > 0) {
          setGroupname(groupnamesArray[0]);
        }
      } catch (error) {
        console.error('Failed to parse groupnames from localStorage:', error);
      }
    }
  }, []);

  return (
    <>
      <Container>
        <Image
          src={FunImage}
          alt="프로필 이미지"
          width="144px"
          height="240px"
        />
        <PageTitle>
        <span style={{ color: '#495EF6' }}>{groupname} </span><br />가입이 완료되었습니다!
        </PageTitle>
      </Container>
      <FixedButtonContainer>
      <Link to='/group'>
        <Button
          label="확인"
          type="primary"
          style = {{width: "312px"}}
        />
      </Link>
    </FixedButtonContainer>
  </>
  );
};

export default GroupJoinSuccess;
