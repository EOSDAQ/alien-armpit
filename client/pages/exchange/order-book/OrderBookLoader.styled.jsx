import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% { transform: translateX(-110%); }
  100% { transform: translateX(110%); }
`;

export const Wrapper = styled.div`
  border: 8px solid white;
  z-index: 1;
`;

export const Loader = styled.div`
  animation: ${loading} 2.4s 0 both;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  will-change: transform;
  background: linear-gradient(to right, #f4f4f4 8%, #eaeaea 20%, #f4f4f4 24%);
`;
