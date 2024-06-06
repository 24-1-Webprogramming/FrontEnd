import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import ProfileHeader from './Hbar2';

const SurveyStartPage = () => {
  const [nickname, setNickname] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  const handleCancel = () => {
    console.log('취소');
    // 취소 기능 구현
  };

  const handleComplete = () => {
    console.log('완료');
    // 완료 기능 구현
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    // 추가로 필요한 로직이 있다면 여기 추가
  };

  const handleAgreementClick = () => {
    setAgreementChecked(!agreementChecked);
  };

  return (
    <div style={{ backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <ProfileHeader onSave={handleComplete} onCancel={handleCancel} />
      <h2 style={{ marginTop: '40px', textAlign: 'center' }}>
        {nickname}님과 헤어지기 싫어요<br />
        <span style={{ color: '#495EF6' }}>정말 떠나실 건가요?</span>
      </h2>
      <img src="../../DumbbellCrying2.svg" alt="캐릭터 사진" style={{ width: '200px', height: '200px', marginTop: '40px' }} />
      <p style={{ fontSize: '14px', marginTop: '10px' }}>{nickname}님과의 추억 정리 중...</p>
      <p
        style={{
          fontSize: '14px',
          color: agreementChecked ? '#FF3C3C' : '#535353',
          marginTop: '40px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
        onClick={handleAgreementClick}
      >
        <img src="../Leave_check.svg" alt="체크표시" style={{ marginRight: '10px', width: '20px', height: '20px' }} />
        안내 사항을 확인하였으며, 이에 동의합니다.
      </p>
      <Link to={agreementChecked ? '/survey' : '#'}>
        <Button
          label="탈퇴하기"
          type="primary"
          size="medium"
          style={{
            marginTop: '20px',
            backgroundColor: agreementChecked ? '#FF3C3C' : '#fff',
            color: agreementChecked ? '#fff' : '#FF3C3C',
            width: '100%',
            border: '1px solid #FF3C3C'
          }}
          onClick={handleButtonClick}
          disabled={!agreementChecked}
        />
      </Link>
    </div>
  );
};

export default SurveyStartPage;
