import React from 'react';
import  ArrowIcon  from '../Icon/Icon_Arrow.svg';

const GymInfoPage = ({ gyms = [], setStep }) => {
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <header style={styles.header}>
          <button onClick={() => setStep(2)} style={styles.backButton}>
            <img src={ArrowIcon} />
          </button>
          <h1 style={styles.title}>헬스장 정보</h1>
        </header>
        <div style={styles.gymList}>
          {gyms.map((gym, index) => (
            <div key={index} style={styles.gymItem}>
              <div style={styles.gymInfo}>
                <img src={gym.image} alt={gym.name} style={styles.gymImage} />
                <div>
                  <div style={styles.gymName}>{gym.name}</div>
                  <div style={styles.gymAddress}>{gym.address}</div>
                </div>
              </div>
              <div style={styles.gymPrice}>{gym.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    paddingTop: '40px',  // 헤더 부분 위에서 40px 띄움
  },
  innerContainer: {
    width: '393px',
    height: '852px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  backButton: {
    marginRight: '10px',
    textDecoration: 'none',
    color: '#000',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    marginLeft: '-32px',  // 화살표 아이콘과의 균형을 맞추기 위해 사용
  },
  gymList: {
    width: '100%',
    marginTop: '10px',  // 검색창과 주소 목록 사이의 간격 10px
  },
  gymItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
    marginBottom: '15px',
  },
  gymInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  gymImage: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
    borderRadius: '5px',
  },
  gymName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  gymAddress: {
    fontSize: '14px',
    color: '#aaa',
  },
  gymPrice: {
    fontSize: '14px',
    color: '#333',
  },
};

export default GymInfoPage;