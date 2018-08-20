import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 8px;
  background: #f4f4f4;
  overflow: hidden;
`;

export const Loader = styled.div`
  animation: ${loading} 2s 0 both;
  animation-iteration-count: infinite;
  width: 100%;
  height: 100%;
  will-change: transform;
  background: linear-gradient(to right, #f4f4f4 8%, #efefef 40%, #f4f4f4 50%);
`;
