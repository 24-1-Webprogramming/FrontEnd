import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = ({ 
  width, 
  height, 
  borderRadius, 
  backgroundColor, 
  color, 
  shadow,
  children 
}) => {
  return (
    <CardContainer
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      color={color}
      shadow={shadow}
    >
      {children}
    </CardContainer>
  );
};

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  shadow: PropTypes.bool,
  children: PropTypes.node,
};

Card.defaultProps = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  backgroundColor: 'white',
  color: 'black',
  shadow: true,
};

export default Card;

const CardContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: 16px;
  box-shadow: ${(props) => (props.shadow ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
