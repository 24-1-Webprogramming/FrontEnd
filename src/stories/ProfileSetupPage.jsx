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
    console.log('가입 완료:', nickname);
  };

  return (
    <div style={{ backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2>맛있다에서 사용할 <br /><span style={{ color: '#495EF6' }}>닉네임과 프로필</span>을 설정해주세요</h2>
      <div style={{ position: 'relative', width: '100px', height: '100px' }}>
        <Image 
          src="../../status=view.svg"
          alt="프로필 이미지"
          width="100px"
          height="100px"
        />
        <img 
          src="../../Edit-icon.svg"
          alt="편집 버튼"
          style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px', cursor: 'pointer' }} 
          onClick={() => alert('편집 기능 구현 필요')} 
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <h5>닉네임<br /></h5>
        <TextBox 
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={10}
          placeholder=""
          showCharCount={true}  // 문자 수 표시
        />
      </div>
      <Link to='/survey-start'> {/* 링크를 survey-start 페이지로 설정 */}
        <Button 
          onClick={handleComplete} 
          disabled={!isSignUpButtonEnabled} // 버튼 활성화 여부를 isSignUpButtonEnabled 상태로 설정
          label="가입 완료"
          type="primary" 
          size="medium" 
          style={{ marginTop: '20px' }}
        />
      </Link>
    </div>
  );
};

export default ProfileSetupPage;
