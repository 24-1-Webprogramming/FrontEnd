// src/stories/AddressSettingPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/Icon_arrow.svg';
import { ReactComponent as SearchIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/Search.svg';
import AddressItem from './AddressItem';

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
            <AddressItem key={index} name={item.name} address={item.address} />
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
  searchContainer: {
    width: '100%',
    marginBottom: '10px',  // 검색창과 주소 목록 사이의 간격 10px
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
    marginTop: '10px',  // 검색창과 주소 목록 사이의 간격 10px
  },
};

export default AddressSettingPage;