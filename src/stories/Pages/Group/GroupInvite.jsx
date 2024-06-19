import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../Component/Button';
import { Link } from 'react-router-dom';

const GroupInvite = () => {
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
        <Container>
            <CenteredText>
                <PageTitle>{groupname} 초대코드</PageTitle>
                <InviteCode>1028</InviteCode>
            </CenteredText>
            <FixedButtonContainer>
                <Link to='/group'>
                    <Button
                        label="확인완료"
                        type="primary"
                        style = {{width: "312px"}}
                    />
                </Link>
            </FixedButtonContainer>
        </Container>
    );
};

const PageTitle = styled.h2`
  color: var(--Primary, #0000FF);
  font-family: 'Pretendard', sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: center;
  margin: 0;
`;

const InviteCode = styled.div`
  color: var(--Primary, #000000);
  font-family: 'Pretendard', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: center;
  margin: 0;
`;

const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CenteredText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 87px;
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

export default GroupInvite;
