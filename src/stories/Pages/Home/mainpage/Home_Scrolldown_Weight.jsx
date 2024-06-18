import React from 'react';

const Home_Scrolldown_Weight = () => {
  return (
    <div style={styles.weightChange}>
      <h2 style={styles.title}>체중변화</h2>
      <div style={styles.weightBox}>
        <p style={styles.text}>오늘의 내 체중</p>
        <p style={styles.weight}>00.0kg</p>
        <button style={styles.button}>기록하기</button>
      </div>
    </div>
  );
};

const styles = {
  weightChange: {
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
    fontSize: '20px', // 제목 텍스트 크기
    fontWeight: 'bold', // 제목 텍스트 굵기
    marginBottom: '20px', // 제목과 내용 간의 간격
  },
  weightBox: {
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
  weight: {
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

export default Home_Scrolldown_Weight;