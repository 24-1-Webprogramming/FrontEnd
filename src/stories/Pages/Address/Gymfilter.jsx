import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../../../Icon/Search2.svg'; // 경로 수정 확인
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Swiper 스타일 가져오기
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Gymfilter = () => {
  const { district } = useParams();
  const [selectedTag, setSelectedTag] = useState(null);

  const addresses = [
    { id: 1, image: 'https://via.placeholder.com/150', name: '상도 BBGYM', address: '서울 동작구 상도로 95 2층', price: '11,000원', distance: '2.7km', tags: ['OT무료'] },
    { id: 2, image: 'https://via.placeholder.com/150', name: '상도 이공고휘트니스', address: '서울 동작구 상도로 95 2층', price: '15,000원', distance: '2.3km', tags: ['OT무료', '인바디'] },
    { id: 3, image: 'https://via.placeholder.com/150', name: '신대방삼거리 OS GYM', address: '서울 동작구 상도로 95 2층', price: '15,000원', distance: '2.7km', tags: ['OT무료', '인바디'] },
    { id: 4, image: 'https://via.placeholder.com/150', name: '신림 유앤아이점', address: '서울 관악구 신림동', price: '13,500원', distance: '2.9km', tags: ['인바디'] },
    { id: 5, image: 'https://via.placeholder.com/150', name: '신대방삼거리 브라매휘트니스', address: '서울 동작구 상도로 95 2층', price: '12,000원', distance: '2.5km', tags: ['정기권'] },
  ];

  const tags = ['일일권', 'OT무료', '인바디', '정기권'];

  const filteredAddresses = addresses.filter(item => {
    return item.address.includes(district) && (!selectedTag || item.tags.includes(selectedTag));
  });

  return (
    <Container>
      <Header>
        <Title>{district}</Title>
        <Link to="/gym" style={styles.backButton}>
          <StyledSearchIcon src={Search} alt="back" />
        </Link>
      </Header>
      <TagContainer>
        {tags.map(tag => (
          <TagButton
            key={tag}
            selected={selectedTag === tag}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
          >
            {tag}
          </TagButton>
        ))}
      </TagContainer>
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
                  <PriceContainer>
                    <Price>{item.price}</Price>
                  </PriceContainer>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 변경된 부분 */
  width: 100%;
  padding-bottom: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  margin-top: 15px;
`;

const Title = styled.h1`
  font-size: 17px;
  font-weight: bold;
  flex: 1;
  text-align: center; /* 텍스트를 중앙에 위치 */
  margin-left: 30px; /* 아이콘이 15px 오른쪽으로 이동했으므로 그에 맞춰서 텍스트도 왼쪽으로 조정 */
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TagButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  border: 2px solid #5467F5;
  border-radius: 20px;
  background-color: ${({ selected }) => (selected ? '#5467F5' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#5467F5')};
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

const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 190px; /* 거리와 가격 간의 간격을 고정 */
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
  font-size: 11px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.285px;
  color: var(--Active, #495EF6);
  font-family: Pretendard;
  background-color: #F1F2FF;
  border-radius: 110px;
  padding: 5px 10px;
  margin-right: 5px;
`;

const StyledSearchIcon = styled.img`
  position: relative;
  top: 5px; /* 아래로 5px 이동 */
  right: 35px; /* 왼쪽으로 15px 이동 */
`;

const styles = {
  backButton: {
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

export default Gymfilter;