import styled, { keyframes } from "styled-components";

const pulseAnimation = (countColor: string) => keyframes`
  0% {
    box-shadow: 0 0 10px 0 ${countColor};
  }
  50% {
    box-shadow: 0 0 20px 10px ${countColor};
  }
  100% {
    box-shadow: 0 0 10px 0 ${countColor};
  }
`;

export const CardContainer = styled.div<{ countColor: string }>`
  padding: 10px;
  background-color: #ffffcc;
  border: 1px solid #f0f0f0;
  border-radius: 50px;
  display: inline-block;
  animation: ${({ countColor }) => pulseAnimation(countColor)} 4s infinite;
`;

export const Count = styled.div<{ countColor: string }>`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${({ countColor }) => countColor};
`;
