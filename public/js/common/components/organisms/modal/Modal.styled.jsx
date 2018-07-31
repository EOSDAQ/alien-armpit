import React from 'react';
import styled, { keyframes } from 'styled-components';

const modalAppear = keyframes`
  from {
    opacity: 0;
    transform: scale(.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ModalStyled = styled.div`
  position: fixed;
  overflow: auto;
  text-align: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  z-index: 900;
  display: flex;
  background-color: rgba(46, 46, 46, 0.13);
`;

export const ModalDialogue = styled.div`
  animation: ${modalAppear} 200ms ease-in-out; 
  background: white;
  text-align: left;
  margin-bottom: 32px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,.15);
  width: 450px;
  padding: 32px;
  margin: auto;
`;
