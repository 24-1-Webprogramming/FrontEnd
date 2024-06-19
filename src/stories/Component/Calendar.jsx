import React from 'react';
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
  }

  span {
    position: relative;
    color: ${({ isToday }) => (isToday ? '#4152EF' : 'inherit')};
    font-weight: ${({ isToday }) => (isToday ? '600' : '400')};
  }
`;

// Helper Functions
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

// 오늘인지 여부를 판단하는 함수
const isToday = (date) => {
  const today = new Date();
  return date && date.toDateString() === today.toDateString();
};

// Calendar Component
export const Calendar = React.forwardRef(function Calendar({ year, month, ...props }, ref) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    days.push(date);
  }

  return (
    <CalendarDays>
      {days.map((date, index) => (
        <CalendarDate
          key={index}
          isToday={isToday(date)}
          isSaturday={date && date.getDay() === 6}
          isSunday={date && date.getDay() === 0}
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


// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import SatisfactionIcon1 from '../../Icon/satisfaction1.svg';
// import SatisfactionIcon2 from '../../Icon/satisfaction2.svg';
// import SatisfactionIcon3 from '../../Icon/satisfaction3.svg';
// import SatisfactionIcon4 from '../../Icon/satisfaction4.svg';
// import SatisfactionIcon5 from '../../Icon/satisfaction5.svg';

// // Styled Components

// const CalendarDays = styled.div`
//   display: grid;
//   grid-template-columns: repeat(7, 1fr);
//   grid-template-rows: repeat(6, 1fr);
//   background-color: transparent;
// `;

// const CalendarDate = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column-reverse;  /* 날짜를 아래에 위치하도록 설정 */
//   align-items: center;
//   justify-content: center;
//   width: 50px;
//   height: 50px;
//   font-size: 14px;
//   font-weight: 400;
//   color: ${({ isSaturday, isSunday }) => {
//     if (isSaturday) return '#3478F6';
//     if (isSunday) return '#ED5565';
//     return '#000';
//   }};

//   &::before {
//     content: '';
//     position: absolute;
//     width: 36px;
//     height: 36px;
//     background-color: ${({ isToday }) => (isToday ? '#EBEEFD' : 'transparent')};
//     border-radius: 50%;
//     display: block;
//   }

//   span {
//     position: relative;
//     color: ${({ isToday }) => (isToday ? '#4152EF' : 'inherit')};
//     font-weight: ${({ isToday }) => (isToday ? '600' : '400')};
//   }
// `;

// const SatisfactionIcon = styled.img`
//   position: absolute;
//   top: 5px;  /* 아이콘의 위치를 조정 */
//   width: 36px;
//   height: 36px;
//   z-index: 2;
// `;

// // Helper Functions
// const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

// const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

// // 오늘인지 여부를 판단하는 함수
// const isToday = (date) => {
//   const today = new Date();
//   return date && date.toDateString() === today.toDateString();
// };

// // Calendar Component
// export const Calendar = React.forwardRef(function Calendar({ year, month, satisfactionData, ...props }, ref) {
//   const daysInMonth = getDaysInMonth(year, month);
//   const firstDayOfMonth = getFirstDayOfMonth(year, month);

//   const days = [];
//   for (let i = 0; i < firstDayOfMonth; i++) {
//     days.push(null);
//   }
//   for (let i = 1; i <= daysInMonth; i++) {
//     const date = new Date(year, month, i);
//     days.push(date);
//   }

//   const getSatisfactionIcon = (satisfaction) => {
//     switch (satisfaction) {
//       case 1:
//         return SatisfactionIcon1;
//       case 2:
//         return SatisfactionIcon2;
//       case 3:
//         return SatisfactionIcon3;
//       case 4:
//         return SatisfactionIcon4;
//       case 5:
//         return SatisfactionIcon5;
//       default:
//         return null;
//     }
//   };

//   return (
//     <CalendarDays>
//       {days.map((date, index) => {
//         const satisfaction = date ? satisfactionData[date.toDateString()] : null;
//         return (
//           <CalendarDate
//             key={index}
//             isToday={isToday(date)}
//             isSaturday={date && date.getDay() === 6}
//             isSunday={date && date.getDay() === 0}
//           >
//             <span>{date && date.getDate()}</span>
//             {satisfaction && <SatisfactionIcon src={getSatisfactionIcon(satisfaction)} alt={`Satisfaction ${satisfaction}`} />}
//           </CalendarDate>
//         );
//       })}
//     </CalendarDays>
//   );
// });

// Calendar.propTypes = {
//   year: PropTypes.number,
//   month: PropTypes.number,
//   satisfactionData: PropTypes.object,
// };

// Calendar.defaultProps = {
//   year: new Date().getFullYear(),
//   month: new Date().getMonth(),
//   satisfactionData: {},
// };

// // Main Component
// const CalendarWithSatisfaction = () => {
//   const [satisfactionData, setSatisfactionData] = useState({});

//   useEffect(() => {
//     const today = new Date();
//     const yesterday = new Date(today);
//     yesterday.setDate(today.getDate() - 1);
//     const dayBeforeYesterday = new Date(today);
//     dayBeforeYesterday.setDate(today.getDate() - 2);

//     setSatisfactionData({
//       [today.toDateString()]: 5,
//       [yesterday.toDateString()]: 5,
//       [dayBeforeYesterday.toDateString()]: 5,
//     });
//   }, []);

//   return (
//     <div>
//       <Calendar year={2024} month={new Date().getMonth()} satisfactionData={satisfactionData} />
//       <button onClick={() => setSatisfactionData((prevData) => ({ ...prevData, [new Date().toDateString()]: 4 }))}>
//         Set Satisfaction for Today to 4
//       </button>
//       {/* 테스트용 버튼 */}
//     </div>
//   );
// };

// export default CalendarWithSatisfaction;