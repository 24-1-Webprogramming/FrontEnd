import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = ({ showIcon, text, onCancel, showCancelButton, cancelButtonText, showSaveButton }) => {
  return (
    <TopLayout>
      <CenterContent>
        {showIcon ? (
          <img src="/Logo-color.svg" alt="Logo" />
        ) : (
          <span>{text}</span>
        )}
      </CenterContent>
      {showCancelButton && (
        <RightAction onClick={onCancel}>{cancelButtonText}</RightAction>
      )}
    </TopLayout>
  );
};

Header.propTypes = {
  showIcon: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onCancel: PropTypes.func,
  showCancelButton: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  showSaveButton: PropTypes.bool,
};

Header.defaultProps = {
  showIcon: false,
  text: 'Header',
  showCancelButton: false,
  cancelButtonText: '취소',
  showSaveButton: true,
};

export default Header;

const TopLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 393px; /* 페이지에 맞도록 수정 */
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  z-index: 1000;
  padding: 10px 10px 20px 10px;
`;

const RightAction = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: black;
`;

const CenterContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  font-weight: 700;
  color: black;
`;