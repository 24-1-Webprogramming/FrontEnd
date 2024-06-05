import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Card from './Card';

// Install Swiper modules
SwiperCore.use([Pagination]);

const CardSlides = ({ cards, sliderWidth, sliderHeight }) => {
  return (
    <Swiper
      style={{ width: sliderWidth, height: sliderHeight }}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Card {...card} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

CardSlides.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.string,
      height: PropTypes.string,
      borderRadius: PropTypes.string,
      backgroundColor: PropTypes.string,
      color: PropTypes.string,
      shadow: PropTypes.bool,
      children: PropTypes.node,
    })
  ),
  sliderWidth: PropTypes.string,
  sliderHeight: PropTypes.string,
};

CardSlides.defaultProps = {
  cards: [
    {
      width: '300px',
      height: '200px',
      borderRadius: '10px',
      background: 'linear-gradient(to right, #FFA17F, #00223E)',
      color: 'white',
      shadow: true,
      children: <div>Default Card Content</div>,
    },
    {
      width: '300px',
      height: '200px',
      borderRadius: '10px',
      background: 'linear-gradient(to right, #5467F5, #2915AA)',
      color: 'white',
      shadow: true,
      children: <div>Default Card Content</div>,
    },
    {
      width: '300px',
      height: '200px',
      borderRadius: '10px',
      background: 'linear-gradient(to right, #FFA17F, #00223E)',
      color: 'white',
      shadow: true,
      children: <div>Default Card Content</div>,
    },
  ],
  sliderWidth: '400px', // 슬라이더의 기본 너비
  sliderHeight: '300px', // 슬라이더의 기본 높이
};

export default CardSlides;
