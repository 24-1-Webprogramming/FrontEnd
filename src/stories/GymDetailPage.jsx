import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowIcon  from '../Icon/Icon_Arrow.svg';
import { Button } from './Button'; // Button 컴포넌트를 가져옵니다.
import HealthIcon from '../Icon/health.png';

const GymDetailPage = () => {
  const { gymId } = useParams();
  
  // 실제 데이터는 API 등을 통해 불러올 수 있습니다.
  const gymDetails = {
    id: gymId,
    name: '상도 BBGYM',
    address: '서울 동작구 상도로 95 2층',
    image: HealthIcon,
    priceDay: '11,000₩',
    priceMonth: '100,000₩',
    tags: ['OT무료'],
  };

  return (
    <Container>
      <InnerContainer>
        <Header>
          <Link to="/" style={styles.backButton}>
            <img src={ArrowIcon} />
          </Link>
        </Header>
        <ImageContainer>
          <img src={gymDetails.image} alt={gymDetails.name} style={styles.image} />
        </ImageContainer>
        <InfoContainer>
          <GymName>{gymDetails.name}</GymName>
          <GymAddress>{gymDetails.address}</GymAddress>
          <TagsContainer>
            {gymDetails.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
          <MapContainer>
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(gymDetails.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              style={styles.map}
              allowFullScreen
              loading="lazy"
              title="Gym Location"
            ></iframe>
          </MapContainer>
          <PriceContainer>
            <PriceItem>
              <PriceLabel>일일권</PriceLabel>
              <PriceDots> - - - - - - - - - - - </PriceDots>
              <Price>{gymDetails.priceDay}</Price>
            </PriceItem>
            <PriceItem>
              <PriceLabel>정기권</PriceLabel>
              <PriceDots> - - - - - - - - - - - </PriceDots>
              <Price>{gymDetails.priceMonth}</Price>
            </PriceItem>
          </PriceContainer>
          <ButtonContainer>
            <Button type="primary" label="장소 선택하기" />
          </ButtonContainer>
        </InfoContainer>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 393px;
  height: 852px;
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
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 20px;
  position: absolute;
  top: 20px; /* Adjust as needed */
  left: 20px; /* Adjust as needed */
  z-index: 2; /* Ensure it is above the image */
`;

const ImageContainer = styled.div`
  width: 393px;
  height: 228px;
  margin-bottom: 20px;
  position: relative;
  top: -40px; /* Move the image up to overlap with the header */
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GymName = styled.div`
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-Top: -35px;
  text-align: left;
  width: 100%;
`;

const GymAddress = styled.div`
  font-size: 12px;
  color: #7C7C80;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: left;
  width: 100%;
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  width: 100%;
`;

const Tag = styled.span`
  font-size: 12px;
  color: #5467F5;
  background-color: #E0E7FF;
  border-radius: 5px;
  padding: 2px 5px;
  margin-right: 5px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 30px;
`;

const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const PriceItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  width: 100%;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
`;

const PriceLabel = styled.span`
  color: #000; /* 검은색 */
  margin-right: -00px; /* 일일권과 점선 사이 띄우기 */
`;

const PriceDots = styled.span`
  flex-grow: 1;
  text-align: center;
  color: #000; /* 검은색 */
  margin: 0 10px;
`;

const Price = styled.span`
  color: #495EF6; /* 가격 색상 */
  margin-right: 90px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  bottom: 30px;
  font-weight: 800;
  font-style: normal;
`;

const styles = {
  backButton: {
    textDecoration: 'none',
    color: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'relative',
    zIndex: 1, /* Ensure image is below the header */
  },
  map: {
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '12px',
  },
};

export default GymDetailPage;