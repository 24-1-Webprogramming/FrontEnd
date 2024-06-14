import React, { useState } from 'react';
import NavBar from './NavBar';
import { ReactComponent as SunHorizonIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/SunHorizon.svg';
import { ReactComponent as SunIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/Sun.svg';
import { ReactComponent as MoonStarsIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/MoonStars.svg';
import { ReactComponent as PopcornIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/Popcorn.svg';
import Home_Scrolldown_Water from './Home_Scrolldown_Water';

const Home_Scrolldown_Meal = () => {
  const [activeTab, setActiveTab] = useState('meal');

  const meals = [
    { name: '아침', icon: <SunHorizonIcon />, kcal: '371kcal', isInputted: true },
    { name: '점심', icon: <SunIcon />, kcal: '371kcal', isInputted: true },
    { name: '저녁', icon: <MoonStarsIcon />, kcal: '입력전', isInputted: false },
    { name: '기타', icon: <PopcornIcon />, kcal: '입력전', isInputted: false },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}></div> {/* 상단 로고 자리 비워둠 */}
      <div style={styles.mealManagement}>
        <div style={styles.header}>
          <h2>식단 관리</h2>
          <div style={styles.tabs}>
            <button
              style={{
                ...styles.tabButton,
                borderColor: activeTab === 'meal' ? '#5467F5' : '#ddd',
                color: activeTab === 'meal' ? '#5467F5' : '#000',
              }}
              onClick={() => setActiveTab('meal')}
            >
              식사
            </button>
            <button
              style={{
                ...styles.tabButton,
                borderColor: activeTab === 'water' ? '#5467F5' : '#ddd',
                color: activeTab === 'water' ? '#5467F5' : '#000',
              }}
              onClick={() => setActiveTab('water')}
            >
              물
            </button>
          </div>
        </div>
        {activeTab === 'meal' && (
          <div style={styles.mealCards}>
            {meals.map((meal, index) => (
              <div
                key={index}
                style={{
                  ...styles.mealCard,
                  background: meal.isInputted ? '#5467F5' : '#EEF0FF',
                }}
              >
                <div style={styles.iconContainer}>{meal.icon}</div>
                <p style={{ ...styles.mealName, color: meal.isInputted ? '#fff' : '#5467F5' }}>{meal.name}</p>
                <p style={{ ...styles.mealKcal, color: meal.isInputted ? '#fff' : '#5467F5' }}>{meal.kcal}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'water' && <Home_Scrolldown_Water />}
      </div>
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
  },
  logoContainer: {
    width: '100%',
    height: '50px', // 로고 자리를 비워둠
    marginTop: '10px',
  },
  mealManagement: {
    width: '90%',
    padding: '20px',
    margin: '20px 0',
    backgroundColor: '#fff',
    borderRadius: '10px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  tabs: {
    display: 'flex',
  },
  tabButton: {
    margin: '0 5px',
    padding: '5px 10px',
    borderRadius: '20px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  mealCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px 5px', // 세로 간격 10px, 가로 간격 5px
  },
  mealCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '-12px',
    width: '110px',
    height: '150px',
    padding: '24px 21px',
    borderRadius: '10px',
    flexShrink: 0,
  },
  iconContainer: {
    marginBottom: '10px',
  },
  mealName: {
    fontSize: '16px',
  },
  mealKcal: {
    fontSize: '14px',
  },
};

export default Home_Scrolldown_Meal;
