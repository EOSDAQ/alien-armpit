import React from 'react';
import styled from 'react-emotion';
import Flex from '../atom/Flex';
import Box from '../atom/Box';

function setBorderStyle(relIdx) {
  switch (relIdx) {
    case -1:
      return `
        border-right: 1px solid #ddd;
        border-bottom-right-radius: 4px;
      `;
    case 0:
      return `
        border-bottom: none;
        pointer-events: none;
        user-select: none;
        color: black;
      `;
    case 1:
      return `
        border-left: 1px solid #ddd;
        border-bottom-left-radius: 4px;
      `;
    default:
      return '';
  }
}

// TODO. set TabItem size prop.
const TabItem = styled(Box)`
  color: #aaa;
  height: 30px;
  line-height: 30px;
  display: flex;
  border: 1px solid transparent;
  border-bottom: 1px solid #ddd;
  ${({ relIdx }) => setBorderStyle(relIdx)}
`;

const Tab = ({ children, selectedIndex }) => {
  const tabsWithEmpty = [...children, null];

  return (
    <Flex>
      {tabsWithEmpty.map((tab, i) => {
        return (
          <TabItem
            key={i}
            flex={!tab && 1}
            relIdx={i - selectedIndex}
            blacklist={['relIdx']}
          >
            {tab}
          </TabItem>
        );
      })}
    </Flex>
  );
}

export default Tab;
