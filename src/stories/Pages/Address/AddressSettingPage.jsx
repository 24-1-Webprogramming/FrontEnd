import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArrowIcon from '../../../Icon/Icon_Arrow.svg';
import SearchIcon from '../../../Icon/Search.svg';
import LocationIcon from '../../../Icon/Location.svg';
import styled from 'styled-components';
import axios from 'axios';

const AddressSettingPage = ({ setStep, setSelectedSubAddress }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Exercise/main');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 1) {
      fetchDistricts(e.target.value);
    } else {
      setSearchResults([]);
    }
  };

  const fetchDistricts = async (query) => {
    const apiKey = '269e4e6c16b5fc9f85c45991d5bb1f58';
    const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `KakaoAK ${apiKey}`
        }
      });
      const districts = response.data.documents.map(doc => ({
        name: doc.address_name,
        district: `${doc.address_name.split(' ')[0]} ${doc.address_name.split(' ')[1]}`
      })).filter((value, index, self) => 
        index === self.findIndex((t) => (
          t.district === value.district
        ))
      );
      setSearchResults(districts);
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  };

  const handleDistrictClick = (district) => {
    navigate(`/gymfilter/${district}`);
  };

  return (
    <Container>
      <InnerContainer>
        <Header>
        <BackButton onClick={handleBackClick}>
          <img src={ArrowIcon} alt="Back" />
        </BackButton>
          <Title>주소 설정</Title>
        </Header>
        <SearchContainer>
          <SearchBox>
            <img src={SearchIcon} />
            <SearchInput
              type="text"
              placeholder="헬스장 이름 또는 지번으로 검색"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchBox>
        </SearchContainer>
        <DistrictList>
          {searchResults.map((district, index) => (
            <DistrictItem key={index} onClick={() => handleDistrictClick(district.district)}>
              <img src={LocationIcon} />
              <span>{district.district}</span>
            </DistrictItem>
          ))}
        </DistrictList>
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
};

export default AddressSettingPage;