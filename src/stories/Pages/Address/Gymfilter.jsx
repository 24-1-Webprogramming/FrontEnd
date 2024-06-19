import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Search from '../../../Icon/Search2.svg'; // 경로 수정 확인
import ArrowBackIcon from '../../../Icon/Icon_Arrow.svg'; // Ensure this is the correct path to your back arrow icon

// 이미지 가져오기
import gymImg1 from '../../../healthIMG/gymImg1.jpg';
import gymImg2 from '../../../healthIMG/gymImg2.jpg';
import gymImg3 from '../../../healthIMG/gymImg3.png';
import gymImg4 from '../../../healthIMG/gymImg4.jpg';
import gymImg5 from '../../../healthIMG/gymImg5.jpg';
import ot1 from '../../../healthIMG/ot1.jpg';
import ot2 from '../../../healthIMG/ot2.jpg';
import ot3 from '../../../healthIMG/ot3.jpg';
import ot4 from '../../../healthIMG/ot4.jpg';
import seocho1 from '../../../healthIMG/seocho1.jpeg';
import seocho2 from '../../../healthIMG/seocho2.jpg';
import seocho3 from '../../../healthIMG/seocho3.jpg';
import seocho4 from '../../../healthIMG/seocho4.jpg';
import seocho5 from '../../../healthIMG/seocho5.jpg';
import inbody1 from '../../../healthIMG/inbody1.jpg';
import inbody2 from '../../../healthIMG/inbody2.jpg';

const Gymfilter = () => {
  const { district } = useParams();
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });

  const goBack = () => {
    navigate('/Exercise/main');
  };

  const fetchGymsByLocal = async (address) => {
    const url = 'http://soongitglwebp8.site/gym/searchGymByLocal';
    try {
      const response = await axios.post(url, { address }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching gyms:', error);
      return [];
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const numberWithCommas = (x) => {
    if (x == null) return '';
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getRandomImagePath = () => {
    const images = [gymImg1, gymImg2, gymImg3, gymImg4, gymImg5, ot1, ot2, ot3, ot4, seocho1, seocho2, seocho3, seocho4, seocho5, inbody1, inbody2];
    return images[Math.floor(Math.random() * images.length)];
  };

  useEffect(() => {
    const fetchGyms = async () => {
      const gyms = await fetchGymsByLocal(district);
      const updatedGyms = gyms.map(gym => ({
        id: gym.gym_id,
        image: getRandomImagePath(), // 랜덤 이미지 설정
        name: gym.name,
        address: gym.address, // API 응답에서 자세한 주소를 가져옴
        price: `${numberWithCommas(gym.price)}원`,
        distance: userLocation.lat && userLocation.lng 
          ? `${calculateDistance(userLocation.lat, userLocation.lng, gym.lat, gym.lng).toFixed(1)}km`
          : 'N/A',
        tags: [
          gym.is_ot_free && 'OT무료',
          gym.is_inbody && '인바디'
        ].filter(Boolean)
      }));
      setAddresses(updatedGyms);
    };

    fetchGyms();
  }, [district, userLocation]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    }
  }, []);

  const tags = ['일일권', 'OT무료', '인바디', '정기권'];

  const filteredAddresses = addresses.filter(item => {
    return (!selectedTag || item.tags.includes(selectedTag));
  });

  const handleSearchIconClick = () => {
    navigate('/gym');
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={goBack}>
          <img src={ArrowBackIcon} alt="Back" />
        </BackButton>
        <Title>{district}</Title>
        <StyledSearchIcon onClick={handleSearchIconClick}>
          <img src={Search} alt="Search" />
        </StyledSearchIcon>
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


// styled-components 정의 추가

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
  width: 80%;
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

const StyledSearchIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
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
  margin-right: 30px; // Maintains a right margin for spacing
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