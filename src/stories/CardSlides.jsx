import React from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Card from './Card';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CardSlides = ({ CardSlides, sliderWidth, sliderHeight }) => {
  return (
    <Swiper
      style={{ width: sliderWidth, height: sliderHeight }}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {CardSlides.map((card, index) => (
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
  CardSlides: PropTypes.arrayOf(
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
  CardSlides: [
    {
      width: '300px',
      height: '200px',
      borderRadius: '10px',
      backgroundColor: '#EEF0FF',
      color: '#000000',
      shadow: true,
      children: <div>Default Card Content</div>,
    },
    {
      width: '300px',
      height: '200px',
      borderRadius: '10px',
      backgroundColor: '#EEF0FF',
      color: '#000000',
      shadow: true,
      children: <div>Default Card Content</div>,
    },
  ],
  sliderWidth: '400px', // 기본값으로 설정
  sliderHeight: '400px', // 기본값으로 설정
};

export default CardSlides;
