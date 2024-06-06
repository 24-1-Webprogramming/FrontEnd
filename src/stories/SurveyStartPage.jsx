import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const SurveyStartPage = () => {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  return (
    <div style={{ backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2>{nickname}님을 더 알고 싶어요.<br /><span style={{ color: '#495EF6' }}>몇 가지 질문에 답해주실래요?</span></h2>
      <img src="../../DumbbellCrying2.svg" alt="캐릭터 사진" style={{ width: '200px', height: '200px', marginTop: '20px' }} />
      <p style={{ fontSize: '14px', marginTop: '10px' }}>{nickname}님의 정보 저장소에 먼지만 날리는 중...</p>
      <Link to='/survey'> {/* 링크를 survey 페이지로 설정 */}
      <Button
        label="알려주기"
        type="primary"
        size="medium"
        style={{ marginTop: '20px' }}
        // 알려주기 버튼 클릭 시 동작할 함수를 여기에 추가하세요
      />
      </Link>
    </div>
  );
};

export default SurveyStartPage;
