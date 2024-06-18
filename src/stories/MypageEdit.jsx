import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Image from './Image'; // 프로필 이미지 임포트
import LogoIcon from '../Icon/Logo2.svg';
import  ArrowIcon  from '/Users/daun/Desktop/React_rp/FrontEnd/src/Icon/MyArrow.svg';

const MyPageProfileEdit = () => {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  const [activeState, setActiveState] = useState('MyPage');

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={LogoIcon} />
      </div>
      <div style={styles.content}>
        <div style={{ textAlign: 'center', marginTop: '-40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden' }}>
              <Image 
                src="../../status=view.svg" // 이미지 경로 수정
                alt="프로필 이미지"
                width="100px"
                height="100px"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
          </div>
          <h2 style={{ margin: '10px 0', fontSize: '18px' }}>{nickname}</h2>
          <p style={{ fontSize: '14px', color: '#666' }}>newnya@gmail.com</p>
          <Link to="/mypage-profile-edit-page" style={styles.editProfileButton}> {/* Add Link here */}
            <button style={styles.editProfileButtonInner}>프로필 편집</button>
          </Link>
        </div>
        <div style={{ padding: '20px', fontSize: '14px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>계정관리</h3>
            <p style={{ marginBottom: '10px', cursor: 'pointer' }}>로그아웃</p>
            <Link to="/MypageLeave" style={styles.link}>
              <div style={styles.linkContainer}>
                계정탈퇴 <img src={ArrowIcon} />
              </div>
            </Link>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>서비스 정보</h3>
            <Link to="/MyPageCondition" style={styles.link}>
              <div style={styles.linkContainer}>
                이용약관 <img src={ArrowIcon} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <NavBar
        activeState={activeState}
        setActiveState={setActiveState}
        style={{ borderTop: '1px solid #ddd' }}
      />
    </div>
  );
};

const styles = {
  container: {
    width: '393px',
    height: '852px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
    position: 'relative',
  },
  header: {
    width: '100%',
    height: '111px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 1000,
    padding: '10px',
    boxSizing: 'border-box',
  },
  logo: {
    width: '50px',
    height: '50px',
  },
  content: {
    width: '100%',
    flex: 1,
    overflowY: 'auto',
    padding: '20px',
    boxSizing: 'border-box',
    paddingTop: '50px', // Ensure content starts below the fixed header
  },
  editProfileButton: {
    textDecoration: 'none', // Remove underline from Link
  },
  editProfileButtonInner: {
    padding: '10px 130px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '10px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowIcon: {
    marginLeft: 'auto', // Ensures the arrow icon is aligned to the right
    },
  };
    
export default MyPageProfileEdit;