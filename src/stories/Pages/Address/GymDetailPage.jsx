import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import ArrowIcon from '../../../Icon/Icon_Arrow.svg';
import { Button } from '../../Component/Button';
import HealthIcon from '../../../Icon/health.png';

const GymDetailPage = () => {
  const { gymId } = useParams();
  const navigate = useNavigate();
  const [gymDetails, setGymDetails] = useState(null);

  useEffect(() => {
    const fetchGymDetails = async () => {
      try {
        console.log(`Fetching details for gym ID: ${gymId}`);
        const response = await axios.get(`http://soongitglwebp8.site/gym/${gymId}`);
        console.log('API response:', response.data);
        setGymDetails({
          ...response.data,
          tags: [
            response.data.is_ot_free && 'OT무료',
            response.data.is_inbody && '인바디',
            response.data.is_one_day && '일일권'
          ].filter(Boolean), // API에서 받은 데이터를 tags 배열로 변환
          priceDay: response.data.price_type.includes('일') ? response.data.price : '정보 없음',
          priceMonth: response.data.price_type.includes('달') ? response.data.price : '정보 없음',
          image: HealthIcon // 이미지 고정
        });
      } catch (error) {
        console.error('Error fetching gym details:', error);
      }
    };

    fetchGymDetails();
  }, [gymId]);

  if (!gymDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <InnerContainer>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <img src={ArrowIcon} alt="back" />
          </BackButton>
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
              <Price>{gymDetails.priceDay !== '정보 없음' ? `${gymDetails.priceDay.toLocaleString()}원` : '정보 없음'}</Price>
            </PriceItem>
            <PriceItem>
              <PriceLabel>정기권</PriceLabel>
              <PriceDots> - - - - - - - - - - - </PriceDots>
              <Price>{gymDetails.priceMonth !== '정보 없음' ? `${gymDetails.priceMonth.toLocaleString()}원` : '정보 없음'}</Price>
            </PriceItem>
          </PriceContainer>
        </InfoContainer>
      </InnerContainer>
      <ButtonContainer>
        <Button type="primary" label="장소 선택하기" />
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
  min-height: 100vh; /* 화면 전체 높이를 차지 */
  padding-bottom: 80px; /* 버튼 컨테이너 공간 확보 */
`;

const InnerContainer = styled.div`
  width: 100%;
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
  position: absolute;
  top: 20px; /* Adjust as needed */
  left: 20px; /* Adjust as needed */
  z-index: 2; /* Ensure it is above the image */
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 553px;
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
  margin-top: -35px;
  text-align: left;
  width: 100%;
`;

const GymAddress = styled.div`
  font-size: 12px;
  color: #7c7c80;
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
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  color: #5467f5;
  background-color: #f1f2ff;
  border-radius: 110px;
  padding: 5px 15px;
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
  margin-right: 0px; /* 일일권과 점선 사이 띄우기 */
`;

const PriceDots = styled.span`
  flex-grow: 1;
  text-align: center;
  color: #000; /* 검은색 */
  margin: 0 10px;
`;

const Price = styled.span`
  color: #495ef6; /* 가격 색상 */
  margin-right: 90px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0; /* 하단에 고정 */
  left: 0;
  background-color: #fff;
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