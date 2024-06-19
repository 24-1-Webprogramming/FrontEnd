import React, { useState, useMemo, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Calendar } from './Calendar'; // Calendar 컴포넌트를 가져옵니다.

// Styled Components
const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;np
  border-radius: 8px;
  overflow: hidden;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 10px;
  background-color: transparent;
  font-size: 20px;
  font-weight: 500;
`;

// CalendarSlides Component
export function CalendarSlides() {
  const [currentDate] = useState(new Date());
  const [slideData, setSlideData] = useState([]);

  // Calendar 컴포넌트의 ref를 저장할 배열
  const calendarRefs = useRef([]);

  // CalendarSlides.js 수정 부분
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const newSlides = [
      { id: -1, year, month: month - 1 },
      { id: 0, year, month },
      { id: 1, year, month: month + 1 }
    ];
    setSlideData(newSlides);
  }, [currentDate]);  // currentDate 변경 시 슬라이드 데이터 갱신


  // 최적화된 슬라이드 데이터 설정
  useMemo(() => {
    const initialSlides = [
      { id: -1, year: currentDate.getFullYear(), month: currentDate.getMonth() - 1 },
      { id: 0, year: currentDate.getFullYear(), month: currentDate.getMonth() },
      { id: 1, year: currentDate.getFullYear(), month: currentDate.getMonth() + 1 }
    ];

    // Calendar 컴포넌트의 ref를 저장
    initialSlides.forEach(slide => {
      calendarRefs.current[slide.id + 1] = React.createRef();
    });

    setSlideData(initialSlides);
  }, [currentDate]);

  // 슬라이드 변경 시 슬라이드 추가 또는 제거
const handleSlideChangeEnd = () => {
    const swiperInstance = swiperRef.current.swiper;
    const currentIndex = swiperInstance.realIndex;
    const currentYear = slideData[currentIndex].year;
    let currentMonth = slideData[currentIndex].month;
    let nextMonth, nextYear, prevMonth, prevYear;
  
    // 현재 월이 1월인 경우
    if (currentMonth === 0) {
      prevMonth = 11; // 이전 달은 12월
      prevYear = currentYear - 1;
    } else {
      prevMonth = currentMonth - 1; // 이전 달
      prevYear = currentYear;
    }
  
    // 현재 월이 12월인 경우
    if (currentMonth === 11) {
      nextMonth = 0; // 다음 달은 1월
      nextYear = currentYear + 1;
    } else {
      nextMonth = currentMonth + 1; // 다음 달
      nextYear = currentYear;
    }
  
    // 슬라이드가 추가될 경우, 슬라이드 인덱스를 업데이트
    if (currentIndex < 1) {
      // 왼쪽으로 이동한 경우
      const newSlideId = slideData[0].id - 1;
      const newSlide = { id: newSlideId, year: prevYear, month: prevMonth };
      setSlideData(prevSlideData => [newSlide, ...prevSlideData]);
      swiperInstance.slideTo(1, 0);
    } else if (currentIndex > slideData.length - 2) {
      // 오른쪽으로 이동한 경우
      const newSlideId = slideData[slideData.length - 1].id + 1;
      const newSlide = { id: newSlideId, year: nextYear, month: nextMonth };
      setSlideData(prevSlideData => [...prevSlideData, newSlide]);
    }
  
    // 헤더에 현재 슬라이드의 연도와 월 업데이트
    setHeaderYearAndMonth(currentYear, currentMonth);
  };
  

  // 헤더의 연도와 월 업데이트 함수
  const setHeaderYearAndMonth = (year, month) => {
    const headerText = `${year}년 ${month + 1}월`;
    setHeaderText(headerText);
  };

  // 헤더 텍스트 상태 및 업데이트 함수
  const [headerText, setHeaderText] = useState('');

  // Swiper 컴포넌트의 ref
  const swiperRef = useRef(null);

  return (
    <CalendarWrapper>
      <CalendarHeader>
        {/* 현재 슬라이드의 연도와 월을 표시 */}
        {headerText}
      </CalendarHeader>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={{ width: '100%', height: '80%' }}
        initialSlide={1}
        onSlideChangeTransitionEnd={handleSlideChangeEnd} // 슬라이드 전환 완료 후 호출되는 콜백 함수
      >
        {slideData.map(slide => (
          <SwiperSlide key={slide.id}>
            <Calendar ref={calendarRefs.current[slide.id + 1]} year={slide.year} month={slide.month} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CalendarWrapper>
  );
}

export default CalendarSlides;
