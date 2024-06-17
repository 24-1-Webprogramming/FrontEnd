import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ReactComponent as ArrowIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/Icon_arrow.svg';
import { ReactComponent as SearchIcon } from '/Users/daun/Desktop/React_rp/FrontEnd/public/Icons/Search.svg';

const AddressSettingPage = ({ setStep, setSelectedSubAddress }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    // API를 호출하여 데이터를 가져옵니다.
    const fetchData = async () => {
      try {
        const response = await axios.get('http://soongitglwebp8.site/api/gym/search');
        setAddresses(response.data);
      } catch (error) {
        console.error('Error fetching the gym data', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAddresses = addresses.filter((item) =>
    item.address.includes(searchTerm) || item.name.includes(searchTerm)
  );

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
              placeholder="헬스장 이름 또는 지번으로 검색"
              value={searchTerm}
              onChange={handleSearchChange}
              style={styles.searchInput}
            />
          </div>
        </div>
        <div style={styles.addressList}>
          {filteredAddresses.map((item, index) => (
            <div key={index} style={styles.addressItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.info}>
                <div style={styles.name}>{item.name}</div>
                <div style={styles.address}>{item.address}</div>
                <div style={styles.details}>
                  <span style={styles.distance}>{item.distance}</span>
                  <div style={styles.price}>{item.price}</div>
                </div>
                <div style={styles.tags}>
                  {item.tags.map((tag, index) => (
                    <span key={index} style={styles.tag}>{tag}</span>
                  ))}
                </div>
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
    flexDirection: 'column',
    alignItems: 'center',
    width: '393px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
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
    fontSize: '17px',
    fontWeight: 'bold',
    marginLeft: '-32px',
  },
  searchContainer: {
    width: '100%',
    marginBottom: '10px',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(217, 217, 217, 0.50)',
    borderRadius: '10px',
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
    backgroundColor: 'transparent',
    fontSize: '16px',
  },
  addressList: {
    width: '100%',
    marginTop: '11px',
  },
  addressItem: {
    display: 'flex',
    width: 'calc(100% - 10px)', // 전체 너비에서 10px을 뺌
    padding: '20px 14px',
    alignItems: 'flex-start',
    gap: '11px',
    borderBottom: '1px solid #ddd',
    marginLeft: '-8px', // 왼쪽으로 5px 이동
  },
  image: {
    width: '115px',
    height: '119px',
    borderRadius: '9px',
  },
  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: '5px',
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '4px',
  },
  address: {
    fontSize: '14px',
    color: '#888',
    marginTop: '4px',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0px',
  },
  distance: {
    fontSize: '12px',
    color: '#888',
    marginTop: '-30px',
  },
  tags: {
    display: 'flex',
    marginTop: '-18px',
    bottom: '-10px',
  },
  tag: {
    fontSize: '12px',
    color: '#5467F5',
    backgroundColor: '#E0E7FF',
    borderRadius: '5px',
    padding: '2px 5px',
    marginRight: '5px',
  },
  price: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'flex-end',
    bottom: '100px',
    marginTop: '45px',
  },
};

export default AddressSettingPage;