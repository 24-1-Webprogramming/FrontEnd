import React, { useState, useRef } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// SwiperCore modules (Navigation, Pagination, Autoplay)
SwiperCore.use([Navigation, Pagination, Autoplay]);

function SimpleSwiper() {
  // 현재 날짜 정보 가져오기
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  // 초기 슬라이드 데이터
  const initialSlides = [
    { id: -1, content: `${currentYear}-${currentMonth - 1}` },
    { id: 0, content: `${currentYear}-${currentMonth}` },
    { id: 1, content: `${currentYear}-${currentMonth + 1}` },
  ];

  const [slideData, setSlideData] = useState(initialSlides);
  const [yearInput, setYearInput] = useState(String(currentYear));
  const [monthInput, setMonthInput] = useState(String(currentMonth));

  const swiperRef = useRef(null);

  //슬라이드 관리
  const handleSlideChangeEnd = () => {
    const swiperInstance = swiperRef.current.swiper;
    const currentIndex = swiperInstance.realIndex;
    const currentYear = parseInt(slideData[currentIndex].content.split('-')[0]);
    const currentMonth = parseInt(slideData[currentIndex].content.split('-')[1]);
    const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
    const nextYear = currentMonth === 12 ? currentYear + 1 : currentYear;
    const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
    const prevYear = currentMonth === 1 ? currentYear - 1 : currentYear;

    // 슬라이드가 추가될 경우, 슬라이드 인덱스를 업데이트
    if (currentIndex < 1) {
      // 왼쪽으로 이동한 경우
      const newSlideId = slideData[0].id - 1;
      const newSlide = { id: newSlideId, content: `${prevYear}-${prevMonth}` };
      setSlideData(prevSlideData => [newSlide, ...prevSlideData]);
      swiperInstance.slideTo(1, 0);
    } else if (currentIndex > slideData.length - 2) {
      // 오른쪽으로 이동한 경우
      const newSlideId = slideData[slideData.length - 1].id + 1;
      const newSlide = { id: newSlideId, content: `${nextYear}-${nextMonth}` };
      setSlideData(prevSlideData => [...prevSlideData, newSlide]);
    }
  };

  const handleYearInputChange = (e) => {
    setYearInput(e.target.value);
  };

  const handleMonthInputChange = (e) => {
    setMonthInput(e.target.value);
  };

  const handleNumberSubmit = () => {
    const year = parseInt(yearInput);
    const month = parseInt(monthInput);
    if (!isNaN(year) && !isNaN(month) && month >= 1 && month <= 12) {
      const newSlides = [];
      for (let i = month - 1; i <= month + 1; i++) {
        newSlides.push({ id: i, content: `${year}-${i}` });
      }
      setSlideData(newSlides);
    }
  };

  return (
    <div style={{ width: '400px', height: '550px' }}>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="number"
          value={yearInput}
          onChange={handleYearInputChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          value={monthInput}
          onChange={handleMonthInputChange}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleNumberSubmit}>Submit</button>
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        style={{ width: '100%', height: '80%' }}
        onSlideChangeTransitionEnd={handleSlideChangeEnd} // 슬라이드 전환이 완료된 후에 호출되는 콜백 함수
        initialSlide={1} // 중앙 슬라이드로 시작
      >
        {slideData.map(slide => (
          <SwiperSlide key={slide.id}>
            <div style={{ backgroundColor: 'lightblue', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <p>{slide.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>Slide IDs: {slideData.map(slide => slide.id).join(', ')}</div>
    </div>
  );
}

export default SimpleSwiper;
