import chroma from 'chroma-js';

function buildColors() {
  const palette = {
    primary: ['#E7FAFC', '#00C9E0', '#005C66'],
    grey: ['#fafafa', '#212121'],
  };

  const rules = Array(9).fill();

  return Object.keys(palette).reduce((res, key) => {
    const colors = chroma
      .scale(palette[key])
      .correctLightness()
      .colors(rules.length);

    /* eslint-disable-next-line */
    res[key] = colors[4];

    rules.forEach((_, i) => {
      res[`${key}${(i + 1) * 100}`] = colors[i];
    });

    return res;
  }, {});
}

export const colors = buildColors();

const theme = {
  // todo. add fontSizes and colors.
  colors,
  fontFamily: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Dotum", sans-serif',
    mono: 'consolas, menlo, monospace',
  },
  space: [0, 4, 8, 12],
};

export default theme;
