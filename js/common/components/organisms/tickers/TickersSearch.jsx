import React from 'react';
import Box from '../../atom/Box';
import Icon from '../../atom/Icon';
import { TickersSearchInput } from './TickersSearch.styled';

const TickersSearch = (props) => {
  return (
    <Box
      height={38}
      borderBottom="1px solid #ededed"
    >
      <Icon type="star" width={30} />
      <TickersSearchInput />
      검색
    </Box>
  );
}

export default TickersSearch;
