import React from 'react';
import Icon from '../../atom/Icon';
import { PlainButton } from '../../atom/Button';

const LanguageSelectedItem = ({ language }) => {
  return (
    <PlainButton color="white">
      <Icon
        width={16}
        height={16}
        fill="#aaa"
        type="language"
      />
      {language === 'ko' ? '한국어' : 'English'}
    </PlainButton>
  );
}

export default LanguageSelectedItem;
