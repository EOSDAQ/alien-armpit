import React from 'react';
import { translate } from 'react-i18next';
import Flex from 'components/atom/Flex';
import {
  OrderBookFooterCell,
  OrderBookFooterCellLeft,
  OrderBookFooterCellRight,
} from './OrderBookFooter.styled';
import { toFixed } from 'utils/format';

const OrderBookFooter = ({ totalAskQuotes, totalBidQuotes, t }) => (
  <Flex>
    <OrderBookFooterCellLeft>
      <div>
        {toFixed(4, totalAskQuotes)}
      </div>
    </OrderBookFooterCellLeft>
    <OrderBookFooterCell>
      <div>
        {t('orderBook.totalAmount')}
      </div>
    </OrderBookFooterCell>
    <OrderBookFooterCellRight>
      <div>
        {toFixed(4, totalBidQuotes)}
      </div>
    </OrderBookFooterCellRight>
  </Flex>
);


export default translate('exchange')(OrderBookFooter);
