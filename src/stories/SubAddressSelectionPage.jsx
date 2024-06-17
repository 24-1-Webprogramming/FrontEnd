import React from 'react';
import { ReactComponent as ArrowIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/Icon_arrow.svg';
import { ReactComponent as LocationIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/location.svg';

const SubAddressSelectionPage = ({ subAddresses, setStep, fetchGymInfo }) => {
  const handleSubAddressClick = (subAddress) => {
    fetchGymInfo(subAddress);
    setStep(3); // 다음 단계로 이동
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <header style={styles.header}>
          <button onClick={() => setStep(1)} style={styles.backButton}>
            <ArrowIcon width={20} height={20} />
          </button>
          <h1 style={styles.title}>작은 단위 주소 선택</h1>
        </header>
        <div style={styles.addressList}>
          {subAddresses.map((subAddress, index) => (
            <div key={index} style={styles.addressItem} onClick={() => handleSubAddressClick(subAddress)}>
              <LocationIcon width={20} height={20} style={styles.icon} />
              <span>{subAddress}</span>
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
    paddingTop: '40px',
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
    marginLeft: '-32px',
  },
  addressList: {
    width: '100%',
    marginTop: '10px',
  },
  addressItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
    marginBottom: '15px',
    cursor: 'pointer',
  },
  icon: {
    marginRight: '10px',
    color: '#5467F5',
  },
};

export default SubAddressSelectionPage;