import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardsContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  width: ${(props) => props.containerWidth}px; /* CardsContainer의 너비를 동적으로 설정 */
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 16px; /* 간격 설정 */
  transition: transform 0.3s ease;
  transform: translateX(${(props) => props.translate}px);
`;

const Cards = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(
    localStorage.getItem('cardWidth') || 320
  );
  const [containerWidth, setContainerWidth] = useState(500); // 기본적으로 500px로 설정

  useEffect(() => {
    // 데이터가 변경될 때 첫 번째 카드의 너비를 가져와서 CardsContainer의 너비로 설정
    if (data.length > 0) {
      const firstCardWidth = parseInt(data[0].width, 10);
      setContainerWidth(firstCardWidth);
    }
  }, [data]);

  const translateValue = -currentIndex * (parseInt(cardWidth, 10) + 16); // 카드 너비에 간격을 추가하여 계산

  useEffect(() => {
    localStorage.setItem('cardWidth', cardWidth);
  }, [cardWidth]);

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <CardsContainer containerWidth={containerWidth}>
      <CardWrapper translate={translateValue}>
        {data.map((item, index) => (
          <Card key={index} width={cardWidth} {...item} />
        ))}
      </CardWrapper>
      <button onClick={handleLeftClick}>{'<'}</button>
      <button onClick={handleRightClick}>{'>'}</button>
    </CardsContainer>
  );
};

export default Cards;
