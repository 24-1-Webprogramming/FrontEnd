import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import styled from 'styled-components';

const NavBar = ({ height, paddingTop, paddingBottom, activeState, setActiveState }) => {
  // NavBar의 너비를 계산
  const width = `${(100 / 5)}%`;

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
      <NavBarContainer>
        <IconButton
          src="/Icons/Icon_Home.svg"
          text="홈"
          borderRadius="0%"
          width={width}
          height={height}
          disabled={activeState === 'Home'}
          disabledIcon="/Icons/Icon_Home_c.svg"
          currentBackgroundColor="transparent"
          hoverBackgroundColor="rgba(0, 0, 0, 0.1)"
          onClick={() => handleButtonClick('Home')}
        />
        <IconButton
          src="/Icons/Icon_exercise.svg"
          text="운동"
          borderRadius="0%"
          width={width}
          height={height}
          disabled={activeState === 'Exercise'}
          disabledIcon="/Icons/Icon_exercise_c.svg"
          currentBackgroundColor="transparent"
          hoverBackgroundColor="rgba(0, 0, 0, 0.1)"
          onClick={() => handleButtonClick('Exercise')}
        />
        <IconButton
          src="/Icons/Icon_statistic.svg"
          text="통계"
          borderRadius="0%"
          width={width}
          height={height}
          disabled={activeState === 'Statistic'}
          disabledIcon="/Icons/Icon_statistic_c.svg"
          currentBackgroundColor="transparent"
          hoverBackgroundColor="rgba(0, 0, 0, 0.1)"
          onClick={() => handleButtonClick('Statistic')}
        />
        <IconButton
          src="/Icons/Icon_group.svg"
          text="그룹"
          borderRadius="0%"
          width={width}
          height={height}
          disabled={activeState === 'Group'}
          disabledIcon="/Icons/Icon_group_c.svg"
          currentBackgroundColor="transparent"
          hoverBackgroundColor="rgba(0, 0, 0, 0.1)"
          onClick={() => handleButtonClick('Group')}
        />
        <IconButton
          src="/Icons/Icon_mypage.svg"
          text="마이페이지"
          borderRadius="0%"
          width={width}
          height={height}
          disabled={activeState === 'MyPage'}
          disabledIcon="/Icons/Icon_mypage_c.svg"
          currentBackgroundColor="transparent"
          hoverBackgroundColor="rgba(0, 0, 0, 0.1)"
          onClick={() => handleButtonClick('MyPage')}
        />
      </NavBarContainer>
    </BottomLayout>
  );
};

NavBar.propTypes = {
  height: PropTypes.string.isRequired,
  paddingTop: PropTypes.string.isRequired,
  paddingBottom: PropTypes.string.isRequired,
  activeState: PropTypes.oneOf(['Home', 'Exercise', 'Statistic', 'Group', 'MyPage']).isRequired,
  setActiveState: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  height: '80px',
  paddingTop: '0px',
  paddingBottom: '0px',
  activeState: 'Home', // 기본 상태는 'Home'
};

export default NavBar;

const BottomLayout = styled.div`
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 393px; // 부모 컨테이너의 최대 너비를 설정
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  box-sizing: border-box; // 패딩과 보더를 포함한 전체 너비와 높이 설정
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  box-sizing: border-box; // 패딩과 보더를 포함한 전체 너비와 높이 설정
`;