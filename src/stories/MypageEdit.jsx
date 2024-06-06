import NavBar from './NavBar';
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Image from './Image'; // 프로필 이미지 임포트

const MyPageProfileEdit = () => {

  const [activeState, setActiveState] = useState('MyPage');

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'Arial, sans-serif', fontSize: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginTop: '5px' }}></div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
        <p style={{ fontSize: '12px' }}>newnya@gmail.com</p>
        <button style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: '5px', background: 'none', cursor: 'pointer', fontSize: '14px' }}>프로필 편집</button>
      </div>
      <div style={{ padding: '20px', fontSize: '14px' }}>
      <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '16px' }}>계정관리</h3>
            <p>로그아웃</p>
            <p>계정탈퇴</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
          <div>
            <h3 style={{ fontSize: '16px' }}>서비스 정보</h3>
            <p>이용약관</p>
          </div>
          </div>
        </div>
      </div>
      <div>
      <NavBar
        activeState={activeState}
        setActiveState={setActiveState}
      />
    </div>
    </div>
  );
};

export default MyPageProfileEdit;
