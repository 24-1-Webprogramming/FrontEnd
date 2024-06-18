import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from '../Icon/Icon_Arrow.svg';
import SearchIcon from '../Icon/Search.svg';
import LocationIcon from '../Icon/Location.svg';
import styled from 'styled-components';

const AddressSettingPage = ({ setStep, setSelectedSubAddress }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const addresses = [
    { id: 1, image: 'https://via.placeholder.com/150', name: '상도 BBGYM', address: '서울 동작구 상도로 95 2층', price: '11,000원', distance: '2.7km', tags: ['OT무료'] },
    { id: 2, image: 'https://via.placeholder.com/150', name: '상도 이공고휘트니스', address: '서울 동작구 상도로 95 2층', price: '15,000원', distance: '2.3km', tags: ['OT무료', '인바디'] },
    { id: 3, image: 'https://via.placeholder.com/150', name: '신대방삼거리 OS GYM', address: '서울 동작구 상도로 95 2층', price: '15,000원', distance: '2.7km', tags: ['OT무료', '인바디'] },
    { id: 4, image: 'https://via.placeholder.com/150', name: '신림 유앤아이점', address: '서울 관악구 신림동', price: '13,500원', distance: '2.9km', tags: ['인바디'] },
    { id: 5, image: 'https://via.placeholder.com/150', name: '신대방삼거리 브라매휘트니스', address: '서울 동작구 상도로 95 2층', price: '12,000원', distance: '2.5km', tags: ['정기권'] },
  ];

  const uniqueDistricts = [...new Set(addresses.map(address => address.address.split(' ')[1]))];

  const filteredAddresses = addresses.filter((item) =>
    item.address.includes(searchTerm) || item.name.includes(searchTerm)
  );

  return (
    <Container>
      <InnerContainer>
        <Header>
          <Link to="/" style={styles.backButton}>
            <img src={ArrowIcon} />
          </Link>
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
          {uniqueDistricts.map((district, index) => (
            <DistrictItem key={index}>
                <img src={LocationIcon} />
              <span>{district}</span>
            </DistrictItem>
          ))}
        </DistrictList>
        <AddressList>
          {filteredAddresses.map((item, index) => (
            <Link to={`/gym/${item.id}`} key={index} style={styles.link}> {/* 링크 추가 */}
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

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Distance = styled.span`
  font-size: 12px;
  color: #888;
  margin-top: -30px;
`;

const Tags = styled.div`
  display: flex;
  margin-top: -18px;
  bottom: -10px;
`;

const Tag = styled.span`
  font-size: 12px;
  color: #5467F5;
  background-color: #E0E7FF;
  border-radius: 5px;
  padding: 2px 5px;
  margin-right: 5px;
`;
const PriceContainer = styled.div`
  margin-right: 5px;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  align-self: flex-end;
  bottom: 100px;
  margin-top: 45px;
  flex-shrink: 0; // 가격 값이 고정되도록 설정
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