import React, { useState } from 'react';
import { Button } from './Button'; // Button 컴포넌트를 임포트합니다.
import { Link } from 'react-router-dom';
import ImageComponent from './ImageComponent'; // ImageComponent를 임포트합니다.

const ProfileSetupPage = () => {
  const [nickname, setNickname] = useState('');

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleComplete = () => {
    console.log('가입 완료:', nickname);
  };

  return (
    <div style={{ backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2>맛있다에서 사용할 <br></br><span style={{ color: '#5467f5' }}>닉네임과 프로필</span>을 설정해주세요</h2>
      
      <div style={{ position: 'relative', width: '100px', height: '100px' }}>
        <ImageComponent 
          src="../../status=view.svg" 
          alt="프로필 이미지" 
          width="100px" 
          height="100px" 
        />
        <ImageComponent 
          src="../../Edit-icon.svg" 
          alt="편집 버튼" 
          width="30px" 
          height="30px" 
          style={{ position: 'absolute', bottom: 0, right: 0, cursor: 'pointer' }} 
          onClick={() => alert('편집 기능 구현 필요')} 
        />
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h5>닉네임<br></br></h5>
        <input 
          type="text" 
          id="nickname" 
          value={nickname} 
          onChange={handleNicknameChange} 
          maxLength={10} 
          placeholder="10글자 이내로 입력해주세요" 
        />
        <p>{nickname.length}/10</p>
      </div>
      
      <Link
        to={{
          pathname: '/survey-start',
          state: { nickname }
        }}
      >
        <Button 
          onClick={handleComplete} 
          disabled={nickname.trim() === ''} 
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
