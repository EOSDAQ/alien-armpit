import React from 'react';
import Box from '../atom/Box';
import Flex from '../atom/Flex';
import Text from '../atom/Text';

export const SheetHeading = ({ text }) => (
  <Flex flex={"1"}>
    <Text
      fontSize="md"
      textAlign="center"
      borderLeft="1px solid"
    >
      {text}
    </Text>
  </Flex>
);

export const SheetSingleHeading = ({ text }) => (
  <Text
    fontSize="md"
  >
    {text}
  </Text>
);

export const SheetHeader = ({ headings }) => (
  <Flex
    width={1}
    height={46}
    bg="#c0c0c0"
    alignItems="center"
  >
    { headings.length > 1
      ? headings.map(heading => (
        <SheetHeading text={heading} />
      ))
      : <SheetSingleHeading text={headings} />
    }
  </Flex>
);

export const SheetRow = () => (
  <Text
    Height={32}
  />
);
