import React from 'react';
import Icon from '../../atom/Icon';
import { PlainButton } from '../../atom/Button';
import Text from '../../atom/Text';

const LanguageSelectedItem = ({ language }) => {
  return (
    <PlainButton color="white">
      <Icon
        width={16}
        height={16}
        fill="#aaa"
        type="language"
      />
      <Text fontSize={13}>
        {language === 'ko' ? '한국어' : 'English'}
      </Text>
    </PlainButton>
  );
}

export default LanguageSelectedItem;
