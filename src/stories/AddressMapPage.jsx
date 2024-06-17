import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NaverMap from '/Users/daun/Desktop/React_rp/FrontEnd/src/stories/NaverMap.js'; // NaverMap 컴포넌트를 import
import { ReactComponent as ArrowIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/Icon_arrow.svg';

const AddressSettingPage = () => {
  const [address, setAddress] = useState('서울 동작구 상도로 369');

  const handleSetCurrentLocation = () => {
    console.log('현재 위치 설정');
    // 추가로 필요한 로직이 있다면 여기 추가
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <Link to="/" style={styles.backButton}>
          <ArrowIcon width={20} height={20} />
        </Link>
        <h1 style={styles.title}>지도에서 주소 설정</h1>
      </header>
      <div style={styles.mapContainer}>
        <NaverMap />
      </div>
      <div style={styles.addressContainer}>
        <p style={styles.address}>{address}</p>
        <button style={styles.button} onClick={handleSetCurrentLocation}>
          현재 위치 설정
        </button>
      </div>
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
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    borderBottom: '1px solid #ddd',
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
  },
  mapContainer: {
    width: '100%',
    height: '60vh',
    borderBottom: '1px solid #ddd',
  },
  addressContainer: {
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  address: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  button: {
    width: '80%',
    padding: '15px',
    backgroundColor: '#5467F5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
  },
};

export default AddressSettingPage;
