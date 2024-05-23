import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import ImageComponent from './ImageComponent';
import TextBox from './TextBox';

const ProfileSetupPage = () => {
  // 닉네임을 관리하는 상태
  const [nickname, setNickname] = useState('');

  // 닉네임 입력 시 상태 업데이트
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  // 가입 완료 버튼 클릭 시 동작하는 함수
  const handleComplete = () => {
    // 여기에 가입 완료 처리 로직을 추가하세요
    console.log('가입 완료:', nickname);
  };

  return (
    <div style={{ backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {/* 제목 */}
      <h2>맛있다에서 사용할 <br /><span style={{ color: '#5467f5' }}>닉네임과 프로필</span>을 설정해주세요</h2>

      {/* 프로필 이미지와 편집 버튼 */}
      <div style={{ position: 'relative', width: '100px', height: '100px' }}>
        <ImageComponent 
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
      
      {/* 닉네임 입력란 */}
      <div style={{ marginTop: '20px' }}>
        <h5>닉네임<br /></h5>
        <TextBox 
          value={nickname}
          onChange={handleNicknameChange}
          maxLength={10}
          placeholder="10글자 이내로 입력해주세요"
        />
      </div>
      
      {/* 가입 완료 버튼 - Button 컴포넌트 사용 */}
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
