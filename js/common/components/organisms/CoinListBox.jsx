import React from 'react';
import Box from '../atom/Box';
import { SheetHeader, SheetRow } from '../molecules/Sheet';

const CoinListBox = () => (
  <Box width={482}>
    <SheetHeader headings={['EOS', 'BTS', 'USDT', '보유코인']} />
    <SheetRow />
  </Box>
);

export default CoinListBox;
