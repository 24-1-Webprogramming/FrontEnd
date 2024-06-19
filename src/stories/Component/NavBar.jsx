import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = ({ height, paddingTop, paddingBottom, activeState, setActiveState }) => {
  const [navBarWidth, setNavBarWidth] = useState(0);

  // NavBar의 레퍼런스를 생성합니다.
  const navBarRef = useRef(null);

  // NavBar의 너비를 계산하는 함수
  const calculateNavBarWidth = () => {
    if (navBarRef.current) {
      setNavBarWidth(navBarRef.current.offsetWidth);
    }
  };

  // 컴포넌트가 마운트될 때와 창 크기가 변경될 때 NavBar의 너비를 계산합니다.
  useEffect(() => {
    calculateNavBarWidth();
    window.addEventListener('resize', calculateNavBarWidth);
    return () => {
      window.removeEventListener('resize', calculateNavBarWidth);
    };
  }, []);

  // NavBar의 너비를 기준으로 아이콘 버튼의 너비를 계산합니다.
  const iconButtonWidth = `${navBarWidth / 5}px`;

  // 클릭 이벤트 핸들러
  const handleButtonClick = (newState) => {
    setActiveState(newState);
  };

  return (
    <BottomLayout
      bgColor="white"
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <NavBarContainer ref={navBarRef}>
        <StyledLink to="/home" onClick={() => handleButtonClick('Home')}>
          <IconButton
            src="/Icons/Icon_Home.svg"
            text="홈"
            borderRadius="0%"
            width={iconButtonWidth}
            height={height}
            disabled={activeState === 'Home'}
            disabledIcon="/Icons/Icon_Home_c.svg"
            currentBackgroundColor="transparent"
            hoverBackgroundColor="rgba(0, 0, 0, 0.1)"
          />
        </StyledLink>
        <StyledLink to="/exercise/main" onClick={() => handleButtonClick('Exercise')}>
          <IconButton
            src="/Icons/Icon_exercise.svg"
            text="운동"
            borderRadius="0%"
            width={iconButtonWidth}
            height={height}
            disabled={activeState === 'Exercise'}
            disabledIcon="/Icons/Icon_exercise_c.svg"
            currentBackgroundColor="transparent"
            hoverBackgroundColor="rgba(0, 0, 0, 0.1)"
          />
        </StyledLink>
        <StyledLink to="/statistic" onClick={() => handleButtonClick('Statistic')}>
          <IconButton
            src="/Icons/Icon_statistic.svg"
            text="통계"
            borderRadius="0%"
            width={iconButtonWidth}
            height={height}
            disabled={activeState === 'Statistic'}
            disabledIcon="/Icons/Icon_statistic_c.svg"
            currentBackgroundColor="transparent"
            hoverBackgroundColor="rgba(0, 0, 0, 0.1)"
          />
        </StyledLink>
        <StyledLink to="/group" onClick={() => handleButtonClick('Group')}>
          <IconButton
            src="/Icons/Icon_group.svg"
            text="그룹"
            borderRadius="0%"
            width={iconButtonWidth}
            height={height}
            disabled={activeState === 'Group'}
            disabledIcon="/Icons/Icon_group_c.svg"
            currentBackgroundColor="transparent"
            hoverBackgroundColor="rgba(0, 0, 0, 0.1)"
          />
        </StyledLink>
        <StyledLink to="/Mypage" onClick={() => handleButtonClick('Mypage')}>
          <IconButton
            src="/Icons/Icon_Mypage.svg"
            text="마이페이지"
            borderRadius="0%"
            width={iconButtonWidth}
            height={height}
            disabled={activeState === 'Mypage'}
            disabledIcon="/Icons/Icon_Mypage_c.svg"
            currentBackgroundColor="transparent"
            hoverBackgroundColor="rgba(0, 0, 0, 0.1)"
          /> 
        </StyledLink>
      </NavBarContainer> 
    </BottomLayout>
  );
};

NavBar.propTypes = {
  height: PropTypes.string.isRequired,
  paddingTop: PropTypes.string.isRequired,
  paddingBottom: PropTypes.string.isRequired,
  activeState: PropTypes.oneOf(['Home', 'Exercise', 'Statistic', 'Group', 'Mypage']).isRequired,
  setActiveState: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  height: '80px',
  paddingTop: '0px',
  paddingBottom: '0px',
  activeState: 'Home', // 기본 상태는 'Home'
  setActiveState: () => {} // 기본적으로 아무 동작도 하지 않는 함수를 추가
};


export default NavBar;

const BottomLayout = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px; /* 확실한 위치 고정을 위해 추가 */
  width: 100%;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  z-index: 1000; /* 충분히 높은 z-index를 설정 */
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;


const StyledLink = styled(Link)`
  text-decoration: none;
`;
