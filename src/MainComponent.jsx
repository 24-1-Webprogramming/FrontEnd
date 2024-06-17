import React, { useState } from 'react';
import AddressSettingPage from '/Users/daun/Desktop/React_rp/FrontEnd/src/stories/AddressSettingPage.jsx';
import SubAddressSelectionPage from '/Users/daun/Desktop/React_rp/FrontEnd/src/stories/SubAddressSelectionPage.jsx';
import GymInfoPage from '/Users/daun/Desktop/React_rp/FrontEnd/src/stories/GymInfoPage.jsx';

const MainComponent = () => {
  const [step, setStep] = useState(1);
  const [selectedSubAddress, setSelectedSubAddress] = useState('');
  const [gymInfo, setGymInfo] = useState([]);
  const subAddresses = ['상도동', '흑석동', '사당동']; // 예시 데이터

  const fetchGymInfo = async (subAddress) => {
    try {
      const response = await fetch('http://soongitglwebp8.site/gym/searchGymByLocal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: subAddress }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Received gym info:', data); // 응답 데이터 확인
        setGymInfo(data); // 백엔드에서 받은 헬스장 정보 설정
      } else {
        console.error('Failed to fetch gym info');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {step === 1 && (
        <AddressSettingPage 
          setStep={setStep}
          setSelectedSubAddress={setSelectedSubAddress}
        />
      )}
      {step === 2 && (
        <SubAddressSelectionPage 
          subAddresses={subAddresses}
          setStep={setStep}
          fetchGymInfo={fetchGymInfo}
        />
      )}
      {step === 3 && (
        <GymInfoPage 
          gyms={gymInfo}
          setStep={setStep}
        />
      )}
    </div>
  );
};

export default MainComponent;