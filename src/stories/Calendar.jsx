import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components

const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr); /* 6개의 행으로 고정 */
  background-color: transparent;
`;

const CalendarDate = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ isSaturday, isSunday }) => {
    if (isSaturday) return '#3478F6';
    if (isSunday) return '#ED5565';
    return '#000';
  }};

  &::before {
    content: '';
    position: absolute;
    width: 36px;
    height: 36px;
    background-color: ${({ isToday }) => (isToday ? '#EBEEFD' : 'transparent')};
    border-radius: 50%;
    display: block;
    transition: background-color 0.3s;
  }

  span {
    position: relative;
    color: ${({ isToday }) => (isToday ? '#4152EF' : 'inherit')};
    font-weight: ${({ isToday }) => (isToday ? '600' : '400')};
  }
`;

// Helper Functions
const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

// Calendar Component
export const Calendar = React.forwardRef(function Calendar({ year, month, ...props }, ref) {
  const currentDate = new Date(year, month);
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  return (
      <CalendarDays>
        {days.map((date, index) => (
          <CalendarDate
            key={index}
            isToday={date && date.toDateString() === currentDate.toDateString()}
            isSaturday={date?.getDay() === 6}
            isSunday={date?.getDay() === 0}
          >
            <span>{date && date.getDate()}</span>
          </CalendarDate>
        ))}
      </CalendarDays>
  );
});

Calendar.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
};

Calendar.defaultProps = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};
export default Calendar;