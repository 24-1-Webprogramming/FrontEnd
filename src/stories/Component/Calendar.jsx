import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Components
const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  background-color: transparent;
`;
const CalendarDate = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;  // Width of the date cell
  height: 50px;  // Height of the date cell
  font-size: 14px;  // Font size for the date number
  font-weight: 400;
  color: ${({ isSaturday, isSunday }) => {
    if (isSaturday) return '#3478F6';
    if (isSunday) return '#ED5565';
    return '#000';
  }};

  &::before {
    content: '';
    position: absolute;
    width: 50px;  // Make circle size equal to cell size to fully cover the date
    height: 50px;  // Make circle size equal to cell size to fully cover the date
    background-color: ${({ isToday }) => (isToday ? '#EBEEFD' : 'transparent')};
    border-radius: 50%;
    display: block;
    z-index: 0;  // Ensure this is below the icon
  }

  .emotion-icon {
    position: absolute;
    top: 0;  // Adjusted to perfectly center over the date number
    left: 0;  // Adjusted to perfectly center
    width: 48px;  // Increased size to cover the number
    height: 48px;  // Increased size to cover the number
    z-index: 2;  // Ensure it's above the day number
  }

  span {
    position: relative;
    color: ${({ isToday }) => (isToday ? '#4152EF' : 'inherit')};
    font-weight: ${({ isToday }) => (isToday ? '600' : '400')};
    z-index: 1;  // Ensure the text is below the icon
    visibility: ${({ hasEmotion }) => (hasEmotion ? 'hidden' : 'visible')};  // Hide the text if there is an emotion
  }
`;


// Helper Functions
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
const isToday = (date) => {
  const today = new Date();
  return date && date.toDateString() === today.toDateString();
};

// Correctly format the date to avoid timezone issues
const formatDate = (date) => {
  let day = ('0' + date.getDate()).slice(-2);
  let month = ('0' + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

// Initialize Emotion Data in localStorage
const initializeEmotionData = () => {
  if (!localStorage.getItem('emotion')) {
    const sampleData = [
      { date: "2024-06-10", emotion: 1 },
      { date: "2024-06-15", emotion: 3 },
      { date: "2024-06-20", emotion: 4 },
      { date: "2024-06-25", emotion: 0 }
    ];
    localStorage.setItem('emotion', JSON.stringify(sampleData));
  }
};

export const Calendar = React.forwardRef(function Calendar({ year, month, ...props }, ref) {
  const [emotions, setEmotions] = useState({});

  useEffect(() => {
    initializeEmotionData();
    const storedEmotions = JSON.parse(localStorage.getItem('emotion'));
    if (storedEmotions) {
      setEmotions(storedEmotions.reduce((acc, item) => {
        acc[formatDate(new Date(item.date))] = item.emotion;
        return acc;
      }, {}));
    }
  }, []);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    // Create a new Date object for each day of the month
    const date = new Date(year, month, i);
    days.push(date);
  }

  return (
    <CalendarDays>
      {days.map((date, index) => {
        const dateString = date ? date.toISOString().slice(0, 10) : null; // Correctly format the date to YYYY-MM-DD
        const emotionLevel = date && emotions[dateString];
        const iconSrc = emotionLevel != null ? `/FaceIcons/Blue${(emotionLevel + 1) * 20}.svg` : null;

        return (
          <CalendarDate
            key={index}
            isToday={isToday(date)}
            isSaturday={date && date.getDay() === 6}
            isSunday={date && date.getDay() === 0}
            hasEmotion={Boolean(iconSrc)}
          >
            <span>{date && date.getDate()}</span>
            {iconSrc && <img className="emotion-icon" src={iconSrc} alt={`Emotion level ${emotionLevel}`} />}
          </CalendarDate>
        );
      })}
    </CalendarDays>
  );
});


Calendar.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
};

Calendar.defaultProps = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
};
