import React from 'react';
import styled from 'styled-components';
import Icon from '../../atom/Icon';
import { SelectOption } from '../../molecules/Select.styled';
import Box from '../../atom/Box';

const OptionCheck = styled(Icon)`
  position: absolute;
  left: 0;
`;

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
