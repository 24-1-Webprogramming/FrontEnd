import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CheckBox from './CheckBox'; // CheckBox 컴포넌트를 불러옵니다.

// Styled Components
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  background: ${props => (props.checked ? '#EEF0FF' : '#FFF')};
  cursor: pointer;
  transition: background 0.3s;
`;

const CheckContainer = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.span`
  flex-grow: 1;
  text-align: left;
`;

const Xtab = ({ exercise, check, mark, onMarkClick, onCheckClick }) => {

  const handleMarkClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    onMarkClick();
  };

  const handleCheckClick = () => {
    onCheckClick();
  };

  return (
    <Container checked={check} onClick={handleCheckClick}>
      <CheckContainer onClick={handleMarkClick}>
        <CheckBox checked={mark} type="star" />
      </CheckContainer>
      <Text>{exercise}</Text>
      <CheckContainer>
        <CheckBox checked={check} type="square" />
      </CheckContainer>
    </Container>
  );
};

// PropTypes and DefaultProps
Xtab.propTypes = {
  exercise: PropTypes.string.isRequired,
  mark: PropTypes.bool.isRequired,
  check: PropTypes.bool.isRequired,
  onMarkClick: PropTypes.func.isRequired,
  onCheckClick: PropTypes.func.isRequired,
};

Xtab.defaultProps = {
  exercise: '컨벤셔널 데드리프트',
  mark : false,
  check : false,
};

export default Xtab;
