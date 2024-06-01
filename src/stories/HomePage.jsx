import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

const HomePage = () => {
  return (
    <div>
      <Header showIcon={true} text="홈" backButton={false} />
      <div style={{ paddingTop: '60px', paddingBottom: '50px', minHeight: 'calc(100vh - 110px)', overflowY: 'auto' }}> {/* Header와 NavBar의 높이만큼 빼주기 위해 calc() 함수 사용 */}
        {/* 여기에 홈 페이지 컨텐츠를 넣어주세요 */}
        <h1>Welcome to Home Page!</h1>
        <p>This is the content of the home page.</p>
      </div>
      <NavBar />
    </div>
  );
};

export default HomePage;
