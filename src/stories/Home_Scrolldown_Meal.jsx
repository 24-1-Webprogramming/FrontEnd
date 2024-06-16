import React, { useState } from 'react';
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
      <div style={styles.missionBox}>
        <p style={styles.missionText}>오늘의 미션</p>
      </div>
      <div style={styles.logoContainer}></div> {/* 상단 로고 자리 비워둠 */}
      <div style={styles.mealManagement}>
        <div style={styles.header}>
          <h2 style={styles.title}>식단 관리</h2>
          <div style={styles.tabs}>
            <button
              style={{
                ...styles.tabButton,
                borderColor: activeTab === 'meal' ? '#5467F5' : '#ddd',
                color: activeTab === 'meal' ? '#5467F5' : '#000',
                fontWeight: 'bold', // 텍스트 굵기 설정
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
                fontWeight: 'bold', // 텍스트 굵기 설정
              }}
              onClick={() => setActiveTab('water')}
            >
              물
            </button>
          </div>
        </div>
        <div style={styles.content}>
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
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
  missionBox: {
    width: '90%',
    height: '80px',
    backgroundColor: '#fff',
    borderRadius: '11px', // Border-radius 적용
    display: 'flex',
    alignItems: 'flex-start',
    boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.11)', // 그림자 적용
    margin: '20px 0', // 상하 여백 추가
    padding: '20px 18px', // 내부 여백 추가
  },
  missionText: {
    marginTop: '5px',
    color: '#A8A8A8',
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
  },
  mealManagement: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // 중앙 정렬
    width: '100%',
    padding: '20px',
    margin: '20px 0',
    backgroundColor: '#fff',
    borderRadius: '10px',
  },
  header: {
    display: 'flex',
    justifyContent: 'center', // 중앙 정렬
    alignItems: 'center',
    width: '80%',
    marginBottom: '20px',
    fontWeight: 'bold', 
  },
  title: {
    marginRight: 'auto',
    fontSize: '20px',
    fontWeight: 'bold', 
  },
  tabs: {
    display: 'flex',
    marginLeft: '100px', // 헤더와 탭 버튼 사이 간격 추가
  },
  tabButton: {
    margin: '0 5px',
    padding: '5px 10px',
    borderRadius: '20px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold', // 텍스트 굵기 설정
  },
  content: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  mealCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 두 개의 열로 구성
    gap: '10px',
    justifyContent: 'center', // 중앙 정렬
  },
  mealCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // 왼쪽 정렬
    gap: '2px', // 요소 간의 간격을 좁힘
    width: '100px',
    height: '130px',
    padding: '15px 15px', // 패딩을 조정하여 내부 여백을 줄임
    borderRadius: '10px',
    flexShrink: 0,
  },
  iconContainer: {
    marginBottom: '-4px', // 아이콘과 텍스트 간의 간격을 좁힘
  },
  mealName: {
    fontSize: '19px', // 텍스트 크기 설정
    fontWeight: 'bold', // 텍스트 굵기 설정
    margin: '0', // 마진을 제거하여 간격을 좁힘
  },
  mealKcal: {
    fontSize: '12px', // 텍스트 크기를 줄임
    margin: '0', // 마진을 제거하여 간격을 좁힘
  },
};

export default Home_Scrolldown_Meal;