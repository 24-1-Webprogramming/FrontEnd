import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import  ArrowIcon  from '../Icon/Icon_Arrow.svg';

const ProfileHeader = ({ onSave, onCancel }) => (
  <HeaderContainer>
    <ActionIcon onClick={onCancel}>
      <img src={ArrowIcon} />
    </ActionIcon>
    <EditText>이용약관</EditText>
    <ActionText onClick={onSave}></ActionText>
  </HeaderContainer>
);

ProfileHeader.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 393px;
  align-items: center;
  padding: 20px 0;
  background-color: #fff;
`;

const ActionIcon = styled.div`
  cursor: pointer;
  margin-left: 30px; /* 왼쪽 여백 추가 */
  margin-right: 30px; /* 오른쪽 여백 추가 */
  display: flex;
  align-items: center;
`;

const ActionText = styled.div`
  cursor: pointer;
  color: black;
  font-size: 18px;
  margin-left: 30px; /* 왼쪽 여백 추가 */
  margin-right: 30px; /* 오른쪽 여백 추가 */
`;

const EditText = styled.div`
  color: black;
  font-weight: bold;
  font-size: 18px;
  margin-top: 0px; /* 텍스트를 밑으로 내리기 위해 마진 추가 */
  flex: 1; /* 중앙 텍스트가 가능한 많은 공간을 차지하게 */
  text-align: center; /* 중앙 정렬 */
`;

export default ProfileHeader;