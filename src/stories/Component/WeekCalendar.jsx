import React from 'react';
import styled, { css } from 'styled-components';

// Styled Components
const WeekCalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
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

  ${({ isToday }) => isToday && css`
    color: blue;
    font-weight: bold;
  `}
`;

// Helper Functions
function getWeekDates(year, month, date) {
  const firstDay = new Date(year, month, date);
  const days = [];
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  for (let i = 0; i < 7; i++) {
    const day = new Date(firstDay);
    day.setDate(day.getDate() + i);
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
const WeekCalendar = ({ year, month, date }) => {
  const weekDates = getWeekDates(year, month, date);
  return (
    <WeekCalendarContainer>
      {weekDates.map((day, index) => (
        <Day key={index} isToday={isToday(day.fullDate)}>
          <div>{day.dayName}</div>
          <div>{day.date}</div>
        </Day>
      ))}
    </WeekCalendarContainer>
  );
};

export default WeekCalendar;
