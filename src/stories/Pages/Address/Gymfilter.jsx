import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../../../Icon/Search2.svg'; // 경로 수정 확인
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Swiper 스타일 가져오기
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import ArrowBackIcon from '../../../Icon/Icon_Arrow.svg'; // Ensure this is the correct path to your back arrow icon


const Gymfilter = () => {
  const { district } = useParams();
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState(null);

  const goBack = () => {
    navigate('/Exercise/main');
  };

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
        <BackButton onClick={goBack}>
          <img src={ArrowBackIcon} alt="Back" />
        </BackButton>
        <Title>{district}</Title>
        <StyledSearchIcon src={Search} alt="Search" />
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
              <ImageAndInfoContainer>
                <img src={item.image} alt={item.name} style={styles.image} />
                <Info>
                  <Name>{item.name}</Name>
                  <Address>{item.address}</Address>
                  <Details>
                    <Distance>{item.distance}</Distance>
                  </Details>
                  <TagsAndPrice>
                    <Tags>
                      {item.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </Tags>
                    <Price>{item.price}</Price>
                  </TagsAndPrice>
                </Info>
              </ImageAndInfoContainer>
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
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 20px;
  margin-top: 15px;
  margin-left: 40px;
`;

const Title = styled.h1`
  font-size: 17px;
  font-weight: bold;
  flex: 1;
  text-align: center;
  margin-left: 30px;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 10px;
  margin-bottom: 15px;
  margin-left: 70px;
`;

const TagButton = styled.button`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 700;
  padding: 6px 14px;
  margin: 0 2px;
  border: 1px solid #5467F5;
  border-radius: 110px;
  background-color: ${({ selected }) => (selected ? '#5467F5' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#5467F5')};
  cursor: pointer;
`;

const AddressList = styled.div`
  width: 100%;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;


const AddressItem = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px 14px;
  align-items: flex-start;
  gap: 11px;
  border-bottom: 1px solid #ddd;
  width: 100%;  // Ensure it spans the full width
`;

const ImageAndInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%; // Ensures full width usage
  margin-left: 24px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
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

const TagsAndPrice = styled.div`
  display: flex;
  justify-content: space-between;  // This will push the Price to the right
  flex-direction: row;
  align-items: space-between;
  margin-top: 10px;
  width: 100%;  // Ensure it spans the full width of its container
`;
const Tags = styled.div`
  display: flex;
  margin-right: 30px; // Maintains a right margin for spaci
  width: 180px;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  align-self: flex-end; // Aligns the price to the right end of its container
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
  padding: 8px 15px;
  margin-right: 10px;
`;

const StyledSearchIcon = styled.img`
  position: relative;
  top: 5px;
  right: 35px;
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