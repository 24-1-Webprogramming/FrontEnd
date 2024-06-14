import React from 'react';

const Home_Scrolldown_DDay = () => {
  return (
    <div style={styles.dday}>
      <h2>D-Day 등록</h2>
      <div style={styles.ddayBox}>
        <p>중요한 날이 있나요? 잊지말고 등록해보세요!</p>
        <button style={styles.button}>기록하기</button>
      </div>
    </div>
  );
};

const styles = {
  dday: {
    width: '90%',
    padding: '20px',
    margin: '20px 0',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  ddayBox: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#EEF0FF',
    borderRadius: '10px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#5467F5',
    color: '#fff',
  },
};

export default Home_Scrolldown_DDay;
