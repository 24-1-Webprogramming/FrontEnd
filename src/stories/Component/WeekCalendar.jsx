import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import styled, { css } from 'styled-components';
import { useSwipeable } from 'react-swipeable';

// Styled Components
const CalendarSliderWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

const WeekCalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 4px;
  padding: 5px;
`;

const Day = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 16px;
  position: relative;

  ${({ isSelected }) => isSelected && css`
    color: blue; /* 선택된 날짜 텍스트 색상 */
  `}

  ${({ isToday, isSelected }) => isToday && !isSelected && css`
    color: blue; /* 오늘 날짜 기본 색상 */
  `}
`;

const DayName = styled.div`
  margin-bottom: 12px;
  font-size: 13px;
  position: relative;
  z-index: 1;
`;

const DayDate = styled.div`
  font-size: 20px;
  position: relative;
  z-index: 1;
`;

const SelectedCircle = styled.div`
  width: 36px;
  height: 36px;
  background-color: #EBEEFD;
  border-radius: 50%;
  position: absolute;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

// Helper Functions
function getWeekDates(referenceDate) {
  const days = [];
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

  for (let i = 0; i < 7; i++) {
    const day = new Date(referenceDate);
    day.setDate(referenceDate.getDate() - (6 - i));
    days.push({
      date: day.getDate(),
      dayName: dayNames[day.getDay()],
      fullDate: day
    });
  }
  return days;
}

// 오늘 날짜 확인 함수
function isToday(someDate) {
  const today = new Date();
  return someDate.getDate() === today.getDate() &&
         someDate.getMonth() === today.getMonth() &&
         someDate.getFullYear() === today.getFullYear();
}

// WeekCalendar Component
const WeekCalendar = ({ year, month, date, selectedDate, setSelectedDate }) => {
  const weekDates = getWeekDates(new Date(year, month, date));

  return (
    <WeekCalendarContainer>
      {weekDates.map((day, index) => (
        <Day
          key={index}
          isToday={isToday(day.fullDate)}
          isSelected={selectedDate && selectedDate.getTime() === day.fullDate.getTime()}
          onClick={() => setSelectedDate(day.fullDate)}
        >
          {selectedDate && selectedDate.getTime() === day.fullDate.getTime() && (
            <SelectedCircle />
          )}
          <DayName>{day.dayName}</DayName>
          <DayDate>{day.date}</DayDate>
        </Day>
      ))}
    </WeekCalendarContainer>
  );
};

const WeekCalendarSlides = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    if (swiper) {
      swiper.slideTo(2, 0);
    }
  }, []);

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    const baseDate = new Date(currentDate);
    const difference = newIndex - 2;
    baseDate.setDate(baseDate.getDate() + difference * 7);
    setCurrentDate(baseDate);
    swiper.slideTo(2, 0, false);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentDate(prevDate => {
        const newDate = new Date(prevDate);
        newDate.setDate(newDate.getDate() + 7);
        return newDate;
      });
    },
    onSwipedRight: () => {
      setCurrentDate(prevDate => {
        const newDate = new Date(prevDate);
        newDate.setDate(newDate.getDate() - 7);
        return newDate;
      });
    }
  });

  return (
    <CalendarSliderWrapper {...handlers}>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        onSlideChangeTransitionEnd={handleSlideChange}
      >
        {[...Array(3)].map((_, index) => {
          const slideDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + (index - 2) * 7);
          return (
            <SwiperSlide key={index}>
              <WeekCalendar 
                year={slideDate.getFullYear()} 
                month={slideDate.getMonth()} 
                date={slideDate.getDate()}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CalendarSliderWrapper>
  );
};

export default WeekCalendarSlides;