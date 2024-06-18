import React from 'react';

const Home_Scrolldown_DDay = () => {
  return (
    <div style={styles.dday}>
      <h2 style={styles.title}>D-Day 등록</h2>
      <div style={styles.ddayBox}>
        <p style={styles.textHighlight}>중요한 날이 있나요?</p>
        <p style={styles.textNormal}>잊지말고 등록해보세요!</p>
        <button style={styles.button}>기록하기</button>
      </div>
    </div>
  );
};

const styles = {
  dday: {
    display: 'flex', // Flexbox 사용
    flexDirection: 'column',
    alignItems: 'center', // 수직 중앙 정렬
    width: '90%',
    padding: '20px',
    margin: '20px 0',
    backgroundColor: '#fff',
    borderRadius: '10px',
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  ddayBox: {
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
  textHighlight: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#5467F5',
    textAlign: 'center',
  },
  textNormal: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: '-22px',
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

export default Home_Scrolldown_DDay;