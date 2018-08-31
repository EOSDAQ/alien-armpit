import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% { transform: translateX(-110%); }
  40% { transform: translateX(110%); }
  100% { transform: translateX(110%); }
`;

const Loader = styled.div`
  animation: ${loading} 4s 0 forwards;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  will-change: transform;
  background: linear-gradient(to right, 
    rgba(0, 0, 0, 0) 0%, 
    rgba(0, 0, 0, .02) 30%, 
    rgba(0, 0, 0, .04) 40%, 
    rgba(0, 0, 0, .02) 50%, 
    rgba(0, 0, 0, 0) 70%
  );
`;

export default Loader;
