import React from 'react';
// import { keyframes } from 'react-emotion';

const animations = {
  appearY: (active, options = {}) => `
    opacity: ${active ? 1 : 0};
    transform: translate3d(0, ${active ? 0 : '30px'}, 0);
    transition: opacity .8s linear, transform .9s ease-in-out;
    ${options.delay && `transition-delay: ${options.delay}`}
  `,
};

export default animations;
