import theme, { colors } from './theme';

const { fontFamily } = theme;

export const mixin = {
  headingLarge: `
    font-size: 30px;
    foht-weight: 700;
    font-family: ${fontFamily.notosans};
    color: ${colors.grey800};
  `,

  textMedium: `
    font-size: 16px;
    line-height: 1.5;
    color: ${colors.grey500};
  `,

  textSmall: `
    font-size: 14px;
    line-height: 1.5;
    color: ${colors.grey500};
  `,

  tradeLabel: `
    font-size: 12px;
    font-weight: 500;
    color: rgba(120, 122, 126, 0.82);
    display: block;
  `,
  
  tradeNum: `
    font-size: 13px;
    font-weight: 500;
    colors: ${colors.black720};
  `,
  tradeTradeUnit: `
    font-size: 13px;
    color: ${colors.grey390};
  `,
  tradeVolumeNum: `
    font-size: 13px;
    letter-spacing: .5px;
    color: ${colors.grey800};
    font-family: ${fontFamily.number};
  `,
};
