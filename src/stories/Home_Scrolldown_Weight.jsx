import React from 'react';

const Home_Scrolldown_Weight = () => {
  return (
    <div style={styles.weightChange}>
      <h2>체중변화</h2>
      <div style={styles.weightBox}>
        <p>오늘의 내 체중</p>
        <p>00.0kg</p>
        <button style={styles.button}>기록하기</button>
      </div>
    </div>
  );
};

const styles = {
  weightChange: {
    width: '90%',
    padding: '20px',
    margin: '20px 0',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  weightBox: {
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

export default Home_Scrolldown_Weight;
