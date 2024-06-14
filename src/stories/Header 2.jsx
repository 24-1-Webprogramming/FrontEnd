import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import styled from 'styled-components';

const Header = ({ showIcon, text, backButton }) => {
  return (
    <TopLayout bgColor="white">
      {backButton && (
        <IconButtonWrapper>
          <IconButton
            src="/Icons/Icon_arrow.svg"
            width="40px"
            height="40px"
          />
        </IconButtonWrapper>
      )}
      <CenterContent>
        {showIcon ? (
          <img src="/Logo-color.svg" alt="로고" />
        ) : (
          <span>{text}</span>
        )}
      </CenterContent>
    </TopLayout>
  );
};

Header.propTypes = {
  showIcon: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  backButton: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  showIcon: false,
  text: '그룹 만들기',
  backButton: true,
};

export default Header;

const TopLayout = styled.div`
  display: flex;
  width: 390px;
  height: 45px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  z-index: 1000;
`;

const IconButtonWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const CenterContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 21px;
  font-weight: 600;
  color: black;
`;