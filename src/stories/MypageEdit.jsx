import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Image from './Image'; // 프로필 이미지 임포트

const MyPageProfileEdit = () => {
  const [activeState, setActiveState] = useState('MyPage');

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '100px', height: '180px' }}>
              <Image 
                src="../../status=view.svg" // 이미지 경로 수정
                alt="프로필 이미지"
                width="100px"
                height="220px"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
          </div>
          <h2 style={{ margin: '10px 0', fontSize: '18px' }}>개미는 뚠뚠</h2>
          <p style={{ fontSize: '14px', color: '#666' }}>newnya@gmail.com</p>
          <button style={{ padding: '10px 20px', border: '1px solid #ccc', borderRadius: '5px', background: 'none', cursor: 'pointer', fontSize: '14px', marginTop: '10px' }}>프로필 편집</button>
        </div>
        <div style={{ padding: '20px', fontSize: '14px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>계정관리</h3>
            <p style={{ marginBottom: '10px', cursor: 'pointer' }}>로그아웃</p>
            <Link to="/MypageLeave" style={{ textDecoration: 'none', color: 'black' }}>
              <p style={{ marginBottom: '10px', cursor: 'pointer' }}>계정탈퇴</p>
            </Link>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>서비스 정보</h3>
            <Link to="/MyPageCondition" style={{ textDecoration: 'none', color: 'black' }}>
              <p style={{ marginBottom: '10px', cursor: 'pointer' }}>이용약관</p>
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

export default MyPageProfileEdit;