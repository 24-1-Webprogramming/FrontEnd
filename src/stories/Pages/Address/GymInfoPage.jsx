import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ArrowIcon from '../../../Icon/Icon_Arrow.svg';
import SearchIcon from '../../../Icon/Search.svg';
import LocationIcon from '../../../Icon/Location.svg';
import styled from 'styled-components';

const AddressSettingPage = ({ setStep, setSelectedSubAddress }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [uniqueDistricts, setUniqueDistricts] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetchAddresses(searchTerm);
    }
  }, [searchTerm]);

  const fetchAddresses = async (query) => {
    const apiKey = 'AIzaSyA0Z_Mh6chElhD5SsL8fvWyY0bRje58bPA';

    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
        params: {
          query: query,
          key: apiKey,
        },
      });

      const fetchedAddresses = response.data.results.map((item) => ({
        id: item.place_id,
        name: item.name,
        address: item.formatted_address,
        lat: item.geometry.location.lat,
        lng: item.geometry.location.lng,
      }));

      setAddresses(fetchedAddresses);
      const districts = [...new Set(fetchedAddresses.map(address => address.address.split(' ')[1]))];
      setUniqueDistricts(districts);

    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAddresses = addresses.filter((item) =>
    item.address.includes(searchTerm) || item.name.includes(searchTerm)
  );

  return (
    <Container>
      <InnerContainer>
        <Header>
          <Link to="/" style={styles.backButton}>
            <img src={ArrowIcon} alt="Back" />
          </Link>
          <Title>주소 설정</Title>
        </Header>
        <SearchContainer>
          <SearchBox>
            <img src={SearchIcon} alt="Search" />
            <SearchInput
              type="text"
              placeholder="헬스장 이름 또는 지번으로 검색"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchBox>
        </SearchContainer>
        <DistrictList>
          {uniqueDistricts.map((district, index) => (
            <DistrictItem key={index}>
              <img src={LocationIcon} alt="Location" />
              <span>{district}</span>
            </DistrictItem>
          ))}
        </DistrictList>
        <AddressList>
          {filteredAddresses.map((item, index) => (
            <Link to={`/gym/${item.id}`} key={index} style={styles.link}>
              <AddressItem>
                <Info>
                  <Name>{item.name}</Name>
                  <Address>{item.address}</Address>
                </Info>
              </AddressItem>
            </Link>
          ))}
        </AddressList>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 393px;
  background-color: #fff;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  flex: 1;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(217, 217, 217, 0.50);
  border-radius: 10px;
  padding: 10px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
`;

const DistrictList = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`;

const DistrictItem = styled.div`
  display: flex;
  width: 377px;
  height: 50px;
  padding: 10px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-bottom: 0.5px solid #E6E6E6;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;

const AddressList = styled.div`
  width: 100%;
`;

const AddressItem = styled.div`
  display: flex;
  padding: 20px 14px;
  align-items: flex-start;
  gap: 11px;
  border-bottom: 1px solid #ddd;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 4px;
`;

const Address = styled.div`
  font-size: 14px;
  color: #888;
  margin-top: 4px;
`;

const styles = {
  backButton: {
    marginRight: '10px',
    textDecoration: 'none',
    color: '#000',
  },
  searchIcon: {
    marginRight: '10px',
    color: '#5467F5',
  },
  locationIcon: {
    marginRight: '10px',
    color: '#5467F5',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

export default AddressSettingPage;