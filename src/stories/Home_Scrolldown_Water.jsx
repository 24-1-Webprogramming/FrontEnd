import React from 'react';

const Home_Scrolldown_Water = () => {
  return (
    <div style={styles.waterBox}>
      <p style={styles.text}>오늘의 물 섭취량</p>
      <p style={styles.water}>0.0L</p>
      <button style={styles.button}>기록하기</button>
    </div>
  );
};

const styles = {
  waterBox: {
    display: 'flex',
    width: '270px',
    height: '241px',
    padding: '26px 22px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#EEF0FF',
    borderRadius: '10px',
  },
  text: {
    fontSize: '18px', // 기본 텍스트 크기
    color: '#333', // 텍스트 색상
    marginBottom: '16px', // 텍스트와 체중 간의 간격
    fontWeight: 'bold',
  },
  water: {
    fontSize: '38px', // 체중 텍스트 크기
    fontWeight: 'bold', // 체중 텍스트 굵기
    color: '#000', // 체중 텍스트 색상
    marginTop: '-20px',
  },
  button: {
    fontSize: '18px', // 기본 텍스트 크기
    marginTop: '-4px',
    fontWeight: 'bold',
    padding: '10px 70px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#5467F5',
    color: '#fff',
  },
};

export default Home_Scrolldown_Water;