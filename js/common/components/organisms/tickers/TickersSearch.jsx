import React from 'react';
import Flex from '../../atom/Flex';
import Icon from '../../atom/Icon';
import { TickersSearchInput } from './TickersSearch.styled';
import Box from '../../atom/Box';

// search onChange 마다 redux store를 업데이트 해야하는가?
// state로 관리해도 괜찮지 않을까?

const TickersSearch = ({ onSearch }) => (
  <Flex
    height={38}
    p={4}
    alignItems="center"
    borderBottom="1px solid #ededed"
  >
    <Icon type="star" width={30} />
    <Box
      flex="1 1"
    >
      <TickersSearchInput
        onChange={(e) => { onSearch(e.target.value); }}
      />
    </Box>
  </Flex>
);

export default TickersSearch;
