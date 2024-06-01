import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

const Header = ({ showIcon, text, backButton }) => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // 좌우 여백을 최대한 벌리기 위해 space-between으로 설정
    alignItems: 'flex-end', // 아이콘과 텍스트를 아래로 정렬하기 위해 추가
    position: 'fixed', // 상단 고정
    top: 0, // 화면 상단에 고정
    width: '100%', // 화면 너비만큼 가로 폭 설정
    height: '111px',
    backgroundColor: 'white',
    color: 'black',
    fontSize: '21px',
    padding: '10px 10px 20px 10px', // 좌우 padding 추가
    zIndex: '1000', // 다른 요소들보다 위에 나타나도록 설정
  };

  const iconButtonStyle = {
    position: 'absolute',
    left: '20px', // 왼쪽에 고정
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const centerContentStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)', // 가운데 정렬
  };

  return (
    <div style={headerStyle}>
      {backButton && (
        <IconButton
          src="/Icons/Icon_arrow.svg"
          width="40px"
          height="40px"
          style={iconButtonStyle}
        />
      )}
      <div style={centerContentStyle}>
        {showIcon ? (
          <img src="/Logo-color.svg" alt="로고" />
        ) : (
          <span>{text}</span>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  showIcon: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  backButton: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  showIcon: false,
  text: '',
  backButton: true,
};

export default Header;
