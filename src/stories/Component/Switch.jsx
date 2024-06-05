import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

// Styled Components
const StyledSwitchOuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.$width};
  gap: 6px;
`;

const StyledSwitchLabel = styled.div`
  color: #495ef6; /* 이 부분은 원래 주석 처리된 부분과 다릅니다. */
  font-size: 16px;
`;

const StyledSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ $disabled }) => ($disabled ? "#e9e9ea" : "#495ef6")}; /* 이 부분은 원래 주석 처리된 부분과 다릅니다. */
`;

const CircleAnimation = keyframes`
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(1.3);
  }
  100% {
    transform: scaleX(1);
  }
`;

const StyledSwitch = styled.input`
  appearance: none;
  width: 44px;
  height: 26px;
  border: none;
  border-radius: 20px;
  background-color: #e9e9ea;
  transition: 250ms;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &::after {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 18px;
    height: 18px;
    border-radius: 20px;
    background-color: #ffffff;
    transition: 250ms;
  }

  &:checked {
    background-color: #495ef6;
    &::after {
      left: 22px;
      animation: ${CircleAnimation} 250ms cubic-bezier(0, 0, 0.16, 0.99)
        forwards;
    }
  }
`;

const StyledSwitchContent = styled.div``;

// Component
export const Switch = forwardRef(
  (
    { children, label, disabled = false, width = "100%", ...rest },
    ref
  ) => {
    return (
      <StyledSwitchOuterContainer $width={width}>
        {label && <StyledSwitchLabel>{label}</StyledSwitchLabel>}
        <StyledSwitchContainer $disabled={disabled}>
          <StyledSwitch
            ref={ref}
            type="checkbox"
            disabled={disabled}
            {...rest}
          />
          <StyledSwitchContent>{children}</StyledSwitchContent>
        </StyledSwitchContainer>
      </StyledSwitchOuterContainer>
    );
  }
);

Switch.PropTypes = {
  disabled: PropTypes.bool,
  width: PropTypes.string,
};