import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import WeekCalendar from './WeekCalendar';
import styled from 'styled-components';

const CalendarSliderWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const WeekCalendarSlides = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    if (swiper) {
      // Adjust swiper to ensure the middle slide is the starting point
      swiper.slideTo(1, 0);
    }
  }, []);

  // This handles the slide change and adjusts the currentDate accordingly
  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    const baseDate = new Date(currentDate);
    const difference = newIndex - 1; // because the initial slide is always the middle one
    baseDate.setDate(baseDate.getDate() + difference * 7);
    setCurrentDate(baseDate);

    // Reset swiper to the middle slide without animation to simulate infinite loops
    swiper.slideTo(1, 0, false);
  };

  return (
    <CalendarSliderWrapper>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        onSlideChangeTransitionEnd={handleSlideChange}
      >
        {[...Array(3)].map((_, index) => {
          const slideDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + (index - 1) * 7);
          return (
            <SwiperSlide key={index}>
              <WeekCalendar 
                year={slideDate.getFullYear()} 
                month={slideDate.getMonth()} 
                date={slideDate.getDate()}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CalendarSliderWrapper>
  );
};

export default WeekCalendarSlides;
