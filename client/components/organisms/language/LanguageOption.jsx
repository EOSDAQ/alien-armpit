import React from 'react';
import { SelectOption } from '../../molecules/Select.styled';

const LanguageOption = (props) => {
  const { option, language, onClick } = props;

  return (
    <SelectOption
      selected={language === option}
      onClick={onClick}
    >
      {option === 'ko' ? '한국어' : ' English'}
    </SelectOption>
  );
}

export default LanguageOption;
