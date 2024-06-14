import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import ProfileHeader from './Hbar2';
import MySVGIcon from './Leave_check'; // import the SVG component

const ProfileSection = ({ onSave, onCancel }) => {
  return (
    <ProfileHeader onSave={onSave} onCancel={onCancel} />
  );
};

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
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ backgroundColor: '#fff', width: '393px', height: '852px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px', border: '1px solid #ddd', boxSizing: 'border-box', position: 'relative' }}>
        <ProfileSection onSave={handleComplete} onCancel={handleCancel} />
        <h2 style={{ marginTop: '60px', textAlign: 'left', width: '322px', height: '63px', fontFamily: 'Pretendard Variable', fontSize: '25px', fontStyle: 'normal', fontWeight: '700', lineHeight: '120%', letterSpacing: '-0.75px', color: 'var(--deprecated-Gray-01, #252525)' }}>
          {nickname}님과 헤어지기 싫어요<br />
          <span style={{ color: 'var(--Primary, #5467F5)', fontFamily: 'Pretendard Variable', fontSize: '25px', fontStyle: 'normal', fontWeight: '700', lineHeight: '120%', letterSpacing: '-0.75px' }}>
            정말 떠나실 건가요?
          </span>
        </h2>
        <img src="../../DumbbellCrying2.svg" alt="캐릭터 사진" style={{ width: '156px', height: '309px', marginTop: '30px' }} />
        <p style={{ fontSize: '14px', marginTop: '10px' }}>{nickname}님과의 추억 정리 중...</p>
        <div
          style={{
            fontFamily: 'Pretendard Variable',
            fontStyle: 'normal',
            fontSize: '14px',
            color: agreementChecked ? '#FF3C3C' : '#535353',
            marginTop: '100px',
            display: 'flex',
            alignItems: 'left',
            cursor: 'pointer',
            textAlign: 'left',
            width: '100%',
            justifyContent: 'left',
            padding: '10px 0'
          }}
          onClick={handleAgreementClick}
        >
          <div style={{ display: 'flex', alignItems: 'left', gap: '5px' }}>
            <MySVGIcon style={{ width: '20px', height: '20px',bottom:'15px' }} />
            안내 사항을 확인하였으며, 이에 동의합니다.
          </div>
        </div>
        <Link to={agreementChecked ? '/survey' : '#'} style={{ textDecoration: 'none', position: 'absolute', bottom: '49px' }}>
          <Button
            label="탈퇴하기"
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
              backgroundColor: agreementChecked ? 'var(--Red-500, #FF3C3C)' : '#fff',
              color: agreementChecked ? '#fff' : '#FF3C3C',
              border: '1px solid #FF3C3C',
              borderRadius: '12px',
              textDecoration: 'none' // 밑줄 제거
            }}
            onClick={handleButtonClick}
            disabled={!agreementChecked}
          />
        </Link>
      </div>
    </div>
  );
};

export default SurveyStartPage;