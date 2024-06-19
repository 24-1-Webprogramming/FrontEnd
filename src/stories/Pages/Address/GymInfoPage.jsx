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
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const navigate = useNavigate(); // useNavigate hook 사용

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
      const districts = response.data.documents
        .map(doc => ({
          name: doc.address_name,
          district: `${doc.address_name.split(' ')[0]} ${doc.address_name.split(' ')[1]}`
        }))
        .filter((value, index, self) => 
          index === self.findIndex((t) => (
            t.district === value.district
          ))
        )
        .filter(district => district.district.includes(query)); // 특정 구 필터링
      setSearchResults(districts);
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  };

  const addresses = [
    { id: 1, image: 'https://via.placeholder.com/150', name: '상도 BBGYM', address: '서울 동작구 상도로 95 2층', price: '11,000원', distance: '2.7km', tags: ['OT무료'] },
    { id: 2, image: 'https://via.placeholder.com/150', name: '상도 이공고휘트니스', address: '서울 동작구 상도로 95 2층', price: '15,000원', distance: '2.3km', tags: ['OT무료', '인바디'] },
    { id: 3, image: 'https://via.placeholder.com/150', name: '신대방삼거리 OS GYM', address: '서울 동작구 상도로 95 2층', price: '15,000원', distance: '2.7km', tags: ['OT무료', '인바디'] },
    { id: 4, image: 'https://via.placeholder.com/150', name: '신림 유앤아이점', address: '서울 관악구 신림동', price: '13,500원', distance: '2.9km', tags: ['인바디'] },
    { id: 5, image: 'https://via.placeholder.com/150', name: '신대방삼거리 브라매휘트니스', address: '서울 동작구 상도로 95 2층', price: '12,000원', distance: '2.5km', tags: ['정기권'] },
  ];

  const filteredAddresses = selectedDistrict 
    ? addresses.filter(item => item.address.includes(selectedDistrict))
    : [];

  const handleDistrictClick = (district) => {
    setSelectedDistrict(district);
    navigate(`/gymfilter/${district}`); // 페이지 이동
  };

  return (
    <Container>
      <InnerContainer>
        <Header>
          <Link to="/" style={styles.backButton}>
            <img src={ArrowIcon} alt="back" />
          </Link>
          <Title>주소 설정</Title>
        </Header>
        <SearchContainer>
          <SearchBox>
            <img src={SearchIcon} alt="search" />
            <SearchInput
              type="text"
              placeholder=" 내 주변 위치 입력 (시/구 단위)"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchBox>
        </SearchContainer>
        {!selectedDistrict && (
          <DistrictList>
            {searchResults.map((district, index) => (
              <DistrictItem key={index} onClick={() => handleDistrictClick(district.district)}>
                <img src={LocationIcon} alt="location" />
                <span>{district.district}</span>
              </DistrictItem>
            ))}
          </DistrictList>
        )}
        <AddressList>
          {filteredAddresses.map((item, index) => (
            <Link to={`/gym/${item.id}`} key={index} style={styles.link}>
              <AddressItem>
                <img src={item.image} alt={item.name} style={styles.image} />
                <Info>
                  <Name>{item.name}</Name>
                  <Address>{item.address}</Address>
                  <Details>
                    <Distance>{item.distance}</Distance>
                    <Price>{item.price}</Price>
                  </Details>
                  <Tags>
                    {item.tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </Tags>
                </Info>
              </AddressItem>
            </Link>
          ))}
        </AddressList>
      </InnerContainer>
    </Container>
  );
};

// styled-components 정의 추가
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  font-size: 14px;
  padding-left: 10px;
  font-family: 'Pretendard', sans-serif; // Ensure the font-family also includes fallbacks
  font-weight: 400;
  letter-spacing: -0.3px;
  color: #333;

  &::placeholder {
    color: #B2BAC2; // Set the color of placeholder text
    font-family: 'Pretendard', sans-serif; // Apply the 'Pretendard' font to the placeholder
  }
`;


const DistrictList = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`;

const DistrictItem = styled.div`
  display: flex;
  width: 100%;
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

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Distance = styled.span`
  font-size: 12px;
  color: #888;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

const Tags = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Tag = styled.span`
  font-size: 12px;
  color: #5467F5;
  background-color: #E0E7FF;
  border-radius: 5px;
  padding: 2px 5px;
  margin-right: 5px;
`;

const styles = {
  backButton: {
    marginRight: '10px',
    textDecoration: 'none',
    color: '#000',
  },
  image: {
    width: '115px',
    height: '119px',
    borderRadius: '9px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

export default AddressSettingPage;