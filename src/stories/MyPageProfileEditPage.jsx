import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import TextBox from './TextBox';
import { Button } from './Button';
import ProfileHeader from './Hbar'; // ProfileHeader 컴포넌트 임포트


const ProfileSetupPage = () => {
  const [nickname, setNickname] = useState('');
  const [isSignUpButtonEnabled, setIsSignUpButtonEnabled] = useState(false);

  const saveNicknameToLocalStorage = (nickname) => {
    localStorage.setItem('nickname', nickname);
  };

  useEffect(() => {
    setIsSignUpButtonEnabled(nickname.trim().length > 0); // 닉네임이 입력되면 버튼 활성화
  }, [nickname]);

  const handleComplete = () => {
    saveNicknameToLocalStorage(nickname);
    console.log('수정 완료:', nickname);
  };

  const handleCancel = () => {
    console.log('취소');
    // 취소 기능 구현
  };

  return (
    <div style={{ backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <ProfileHeader onSave={handleComplete} onCancel={handleCancel} /> 
      <div style={{ marginTop: '5px' }}></div>
      <div style={{ position: 'relative', width: '100px', height: '100px', marginBottom: '49px', marginTop: '60px' }}> {/* marginTop 수정 */}
        <Image 
          src="../../status=view.svg"
          alt="프로필 이미지"
          width="100px"
          height="100px"
        />
        <img 
          src="../../Edit-icon.svg"
          alt="편집 버튼"
          style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px', cursor: 'pointer', zIndex: 1 }}  // z-index 추가
          onClick={() => alert('편집 기능 구현 필요')} 
        />
      </div>
      <div style={{ marginTop: '10px' }}> {/* marginTop 수정 */}
        <TextBox 
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={10}
          placeholder=""
          showCharCount={true}  // 문자 수 표시
        />
      </div>
      <Link to='/survey-start' style={{ textDecoration: 'none', marginBottom: '24px' }}> {/* 링크를 survey-start 페이지로 설정 */}
        <Button 
          onClick={handleComplete} 
          disabled={!isSignUpButtonEnabled} // 버튼 활성화 여부를 isSignUpButtonEnabled 상태로 설정
          label="수정 완료"
          type="primary" 
          size="medium" 
          style={{ 
            display: 'flex',
            width: '341px',
            height: '56px',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0,
            borderRadius: '12px',
            background: isSignUpButtonEnabled ? '#5467F5' : 'var(--deactive, #B2BAC2)',
            color:'#fff', // 닉네임 입력 여부에 따라 텍스트 색상 변경
            textDecoration: 'none',
            fontWeight: 'bold',
            cursor: isSignUpButtonEnabled ? 'pointer' : 'default'
          }} 
        />
      </Link>
    </div>
  );
};

export default ProfileSetupPage;