const animations = {
  appearY: (active, options = {}) => `
    opacity: ${active ? 1 : 0};
    transform: translate3d(0, ${active ? 0 : '30px'}, 0);
    transition: opacity .8s linear, transform .9s ease-in-out;
    ${active && options.delay && `transition-delay: ${options.delay}`}
  `,
  scaleX: (active, options = {}) => `
    transform: scaleX(${active ? 1 : 0});
    transition: transform 1s ease-in-out;
    ${active && options.delay && `transition-delay: ${options.delay};`}
  `,
  appearFromRight: (active, options = {}) => `
    opacity: ${active ? 1 : 0};
    transform: translate3d(${active ? 0 : '200px'}, 0 , 0);
    transition: opacity .8s linear, transform .9s ease-in-out;
    ${active && options.delay && `transition-delay: ${options.delay}`};
  `,
};

export default animations;
