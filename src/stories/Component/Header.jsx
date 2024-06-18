import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = ({ showIcon, text, backButton, path }) => {
  return (
    <TopLayout bgColor="white">
      {backButton && (
        <IconButtonWrapper>
          <Link to={path}>
            <IconButton
              src="/Icons/Icon_arrow.svg"
              width="40px"
              height="40px"
            />
          </Link>
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
  leftButton: PropTypes.string,
  rightButton: PropTypes.string,
};

Header.defaultProps = {
  showIcon: false,
  text: '그룹 만들기',
  backButton: true,
};

export default Header;

const TopLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  z-index: 1000;
  padding: 10px 10px 20px 10px;
`;

const IconButtonWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
`;

const CenterContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-65%);
  top:35%;
  font-size: 18px;
  font-weight: 700;
  color: black;
`;
