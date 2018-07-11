export const getFontSize = ({ fontSize }) => {
  function buildCss(size) {
    return `font-size: ${size}px;`;
  }
  switch (fontSize) {
    case 'xs':
      return buildCss(12);
    case 'sm':
      return buildCss(14);
    case 'md':
      return buildCss(16);
    case 'lg':
      return buildCss(18);
    case 'xl':
      return buildCss(20);
    case undefined:
      return undefined;
    default:
      return buildCss(fontSize);
  }
};
