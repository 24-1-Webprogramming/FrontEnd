import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProfileHeader = ({ onSave, onCancel }) => (
  <HeaderContainer>
    <ActionText onClick={onSave}></ActionText>
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
  justify-content: space-around;  
  width: 100%; 
  max-width: 100%;  
  align-items: center;
`;

const ActionText = styled.div`
  cursor: pointer;
  margin-right: 10px;
  color: black;
`;

const EditText = styled(ActionText)`
  color: black;
  font-weight: bold;
`;

export default ProfileHeader;