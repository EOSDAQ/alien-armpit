import React from 'react';
import Flex from '../../atom/Flex';
import Icon from '../../atom/Icon';
import { TickersSearchInput } from './TickersSearch.styled';
import Box from '../../atom/Box';
import { IconButton } from '../../atom/Button';

const TickersSearch = ({ onSearch, toggleShowFavorites, showFavorites }) => (
  <Flex
    height={38}
    py={4}
    pr={4}
    alignItems="center"
    borderBottom="1px solid #ededed"
  >
    <IconButton onClick={toggleShowFavorites}>
      <Icon type={showFavorites ? 'starred' : 'star'} />
    </IconButton>
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
