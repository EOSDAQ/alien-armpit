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
colors.grey130 = '#f7f8f8';
colors.grey140 = '#f6f6f6';
colors.grey170 = '#e9e9e9';
colors.grey180 = '#e6e6e6';
colors.grey270 = '#c4c4c4';
colors.grey330 = '#b6b6b6';
colors.grey390 = '#a4a4a4';
colors.grey510 = '#848b8c';
colors.grey590 = '#6f6f6f';
colors.cyan700 = '#02adca';
colors.black150 = '#efefef';
colors.black220 = '#dfdfdf';
colors.black500 = '#505455';
colors.black650 = '#323838';
colors.black720 = '#202121';
colors.blue120 = '#f5faff';
colors.blue140 = '#f3f7ff';
colors.blue190 = '#e1f0ff';
colors.blue350 = '#2c65ce';
colors.red120 = '#fff7f7';
colors.red130 = '#fff2f2';
colors.red150 = '#f73627';

const theme = {
  // todo. add fontSizes and colors.
  colors,
  fontFamily: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Noto Sans KR", "Malgun Gothic", "Dotum", sans-serif',
    mono: 'consolas, menlo, monospace',
  },
  space: [0, 4, 8, 12],
};

export default theme;
