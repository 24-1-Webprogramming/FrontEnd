import React from 'react';
import { Button } from './Button'; // Button 컴포넌트를 임포트합니다.

const SurveyStartPage = ({ location }) => {

    //const nickname = location.state.nickname;
    const nickname = '김코딩'; // 테스트용 닉네임

  return (
    <div style={{ backgroundColor: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {/* 닉네임과 인사 */}
      <h2>{nickname}님을 더 알고 싶어요.<br></br>
      <span style={{ color: '#5467f5' }}>몇가지 질문에 답해주실래요?</span></h2>

      {/* 캐릭터 사진 */}
      <img src="../../DumbbellCrying2.svg" alt="캐릭터 사진" style={{ width: '200px', height: '200px', marginTop: '20px' }} />

      {/* 정보 저장 중 메시지 */}
      <p style={{ fontSize: '14px', marginTop: '10px' }}>{nickname}님의 정보 저장소에 먼지만 날리는 중...</p>

      {/* 알려주기 버튼 */}
      <Button
        label="알려주기"
        type="primary"
        size="medium"
        style={{ marginTop: '20px' }}
        // 알려주기 버튼 클릭 시 동작할 함수를 여기에 추가하세요
      />
    </div>
  );
};

export default SurveyStartPage;
