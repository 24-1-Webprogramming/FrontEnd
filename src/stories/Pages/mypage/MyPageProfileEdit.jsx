import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import TextBox from './TextBox';
import { Button } from './Button';

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

  return (
    <div style={{ backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ position: 'relative', width: '100px', height: '100px', marginBottom: '49px' }}> {/* 이미지와 편집 버튼 간격을 위해 marginBottom 추가 */}
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
      <div style={{ marginTop: '200px' }}>
        <TextBox 
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={10}
          placeholder=""
          showCharCount={true}  // 문자 수 표시
        />
      </div>
      <Link to='/survey-start' style={{ textDecoration: 'none', position: 'absolute', bottom: '49px' }}>
        <Button
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
            background: 'var(--deactive, #B2BAC2)',
            color: isSignUpButtonEnabled ? '#fff' : '#000',
            border: '1px solid #FF3C3C',
            textDecoration: 'none',
            cursor: isSignUpButtonEnabled ? 'pointer' : 'default',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
          onClick={handleComplete}
          disabled={!isSignUpButtonEnabled}
        />
      </Link>
    </div>
  );
};

export default ProfileSetupPage;