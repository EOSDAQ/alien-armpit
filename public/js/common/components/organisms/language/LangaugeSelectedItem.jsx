import React from 'react';
import Icon from '../../atom/Icon';
import Button from '../../atom/Button';

const LanguageSelectedItem = ({ language }) => {
  return (
    <Button>
      <Icon
        width={16}
        height={16}
        fill="#aaa"
        type="language"
      />
      {language === 'ko' ? '한국어' : 'English'}
    </Button>
  );
}

export default LanguageSelectedItem;
