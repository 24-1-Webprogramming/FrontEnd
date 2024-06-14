import React from 'react';
import Home_Scrolldown_Meal from './Home_Scrolldown_Meal';
import Home_Scrolldown_Weight from './Home_Scrolldown_Weight';
import Home_Scrolldown_Day from './Home_Scrolldown_D-Day';
import NavBar from './NavBar';

const MainPage = () => {
  return (
    <div style={styles.container}>
      <Home_Scrolldown_Meal />
      <Home_Scrolldown_Weight />
      <Home_Scrolldown_Day />
      <NavBar />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#fff',
    overflowY: 'auto',  // 스크롤 가능하도록 설정
  },
};

export default MainPage;
