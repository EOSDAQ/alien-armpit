import React from 'react';
import styled from 'react-emotion';
import Icon from '../../atom/Icon';
import { colors } from '../../../css/theme';

const Option = styled.div`
  border-bottom: 1px solid #eee;
  padding: 8px;
  padding-left: 28px;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  transition: .2s background ease;

  &:hover {
    background: #F7FFFD;
  }

  svg {
    vertical-align: middle;
    display: inline-block;
    margin-left: 8px;
  }
`;

const OptionCheck = styled(Icon)`
  position: absolute;
  left: 0;
`;

const LanguageOption = (props) => {
  const { option, language } = props;

  return (
    <Option
      onClick={props.onClick}
    >
      {language === option && (
        <OptionCheck
          type="check"
          fill="#00C9E0"
          width={12}
        />
      )}
      {option === 'ko' ? '한국어' : ' English'}
    </Option>
  );
}

export default LanguageOption;
