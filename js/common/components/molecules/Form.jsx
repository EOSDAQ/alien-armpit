import React from 'react';
import Text from '../atom/Text';

export const Input = (props) => {
  const Component = Text.withComponent('input');
  return <Component {...props} />;
};

const Form = (props) => {
  const Component = Text.withComponent('form');
  return <Component {...props} />;
};

export default Form;
