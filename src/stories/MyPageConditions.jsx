import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileHeader from './Hbar3';
// import IconArrow from '../Icons/Icon_arrow.svg'; 

const TermsOfServicePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <ProfileHeader />

      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        {/* <button onClick={handleBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', marginRight: '10px' }}>
          <img src={IconArrow} alt="Back" style={{ width: '24px', height: '24px' }} />
        </button> */}
        <h2 style={{ fontWeight: 'bold', margin: '0' }}>맛있다 이용약관</h2>
      </div>

      <div style={{ textAlign: 'left', fontSize: '16px', lineHeight: '1.6', padding: '0 10px' }}>
        <p><strong>제 1조 (목적)</strong></p>
        <p>
          본 약관은 [업체 이름] (이하 "맛있다")의 이용과 관련하여 서비스 제공자 (이하 "회사")와 
          이용자의 권리, 의무 및 책임사항, 이용 조건과 절차 등 기본적인 사항을 규정함을 목적으로 합니다.
        </p>
        <p><strong>제 2조 (정의)</strong></p>
        <p>
          "이용자"란 회사가 제공하는 서비스에 접속하여 본 약관에 따라 회사가 서비스 이용 계약을 체결하고 회사가 제공하는 서비스를 이용하는 자를 말합니다.
        </p>
        <p>
          "서비스"란 회사의 웹사이트 또는 애플리케이션을 통해 제공하는 모든 서비스를 의미합니다.
        </p>
        <p><strong>제 3조 (회원가입 및 정보수집)</strong></p>
        <p>
          이용자는 구글 소셜 로그인 등을 통해 서비스에 가입할 수 있습니다. 회사는 서비스 제공을 위해 이용자로부터 다음의 정보를 수집합니다: 닉네임, 프로필 사진, 이메일 주소 등.
        </p>
        <p>
          수집된 정보는 서비스 운영 및 개선, 맞춤형 서비스 제공, 통계 분석 등의 목적으로 사용됩니다.
        </p>
        <p><strong>제 4조 (서비스 이용)</strong></p>
        <p>
          회사는 이용자에게 다음과 같은 서비스를 제공합니다: 개인 맞춤 운동 계획 제공, 운동 상태 모니터링 및 분석, 건강 및 운동 관련 정보 제공, 서비스 이용 시간은 회사의 운영 정책에 따라 정해집니다.
        </p>
        <p><strong>제 5조 (개인정보보호)</strong></p>
        <p>
          회사는 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력합니다. 개인정보의 수집 및 이용에 대해서는 관련 법령 및 회사의 개인정보처리방침에 따릅니다.
        </p>
        <p><strong>제 6조 (약관의 변경)</strong></p>
        <p>
          회사는 필요한 경우 이 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지하거나 이메일 등을 통해 이용자에게 통지합니다.
        </p>
        <p><strong>제 7조 (책임의 한계)</strong></p>
        <p>
          회사는 천재지변 또는 이에 준하는 불가항력적 사유가 발생하여 서비스를 제공할 수 없는 경우 책임을 지지 않습니다.
        </p>
        <p>
          회사는 이용자가 서비스 이용에 기대하는 이익에 대해 보장하지 않습니다.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServicePage;