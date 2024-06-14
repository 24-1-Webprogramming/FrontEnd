import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/Icon_arrow.svg';
import { ReactComponent as LocationIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/location.svg';
import { ReactComponent as SearchIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/Search.svg';

const AddressSettingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const addresses = [
    { name: '상도 BBGYM', address: '서울 동작구 상도로 95 2층' },
    { name: '상도 BBGYM', address: '서울 동작구 상도로 95 2층' },
    { name: '상도 BBGYM', address: '서울 동작구 상도로 95 2층' },
    { name: '상도 BBGYM', address: '서울 동작구 상도로 95 2층' },
    { name: '상도 BBGYM', address: '서울 동작구 상도로 95 2층' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <header style={styles.header}>
          <Link to="/" style={styles.backButton}>
            <ArrowIcon width={20} height={20} />
          </Link>
          <h1 style={styles.title}>주소 설정</h1>
        </header>
        <div style={styles.searchContainer}>
          <div style={styles.searchBox}>
            <SearchIcon style={styles.searchIcon} />
            <input
              type="text"
              placeholder="도로명, 건물명 또는 지번으로 검색"
              value={searchTerm}
              onChange={handleSearchChange}
              style={styles.searchInput}
            />
          </div>
        </div>
        <div style={styles.addressList}>
          {addresses.map((item, index) => (
            <div key={index} style={styles.addressItem}>
              <LocationIcon width={20} height={20} style={styles.icon} />
              <div>
                <div style={styles.addressName}>{item.name}</div>
                <div style={styles.addressDetail}>{item.address}</div>
              </div>
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
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingBottom: '10px',
    marginBottom: '20px',
    marginTop: '35px',
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
  searchContainer: {
    width: '100%',
    marginBottom: '20px',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(217, 217, 217, 0.50)',  // 배경 색상
    borderRadius: '10px',  // 테두리 둥글게
    padding: '10px',
  },
  searchIcon: {
    marginRight: '10px',
    color: '#5467F5',
  },
  searchInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',  // 배경색 투명하게
    fontSize: '14px',
  },
  addressList: {
    width: '100%',
    marginTop: '20px',
  },
  addressItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
    marginBottom: '15px',
  },
  icon: {
    marginRight: '10px',
    color: '#5467F5',
  },
  addressName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  addressDetail: {
    fontSize: '14px',
    color: '#aaa',
  },
};

export default AddressSettingPage;
