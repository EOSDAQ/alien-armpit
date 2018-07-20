import theme, { colors } from './theme';

export const mixin = {
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
    font-family: ${theme.fontFamily.number};
  `,
};

