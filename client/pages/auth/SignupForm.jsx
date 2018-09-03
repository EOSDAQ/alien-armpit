import React from 'react';
import { translate } from 'react-i18next';
import Button from 'components/atom/Button';
import { email as emailValidation } from 'utils/validations';
import {
  SignupInputWrap,
  SignupLabel,
  SignupInput,
  SignupError,
  SignupPolicy,
} from './SignupForm.styled';
import Form from 'components/molecules/Form';
import Input from 'components/atom/Input';

const SignupForm = (props) => {
  const { t, onSubmit } = props;
  const policy = t('signup.policy');
  const test = /(\$\{\w+\})/g;

  const tokens = {
    termsOfService: {
      name: t('signup.policyTerms'),
      link: '/terms_of_service',
    },
    privacyPolicy: {
      name: t('signup.policyPrivacy'),
      link: '/privacy_policy',
    },
    cookieUse: {
      name: t('signup.policyCookie'),
      link: '/privacy_option',
    },
  };

  const policyArr = policy.split(test)
    .map((fragment) => {
      const test = /^\$\{(\w+)\}/.exec(fragment);
      if (test === null) {
        return fragment;
      }

      const [_, key] = test;
      const { name, link } = tokens[key];

      return (
        <a className="link" href={link}>
          {name}
        </a>
      )
    });

  return (
    <Form onSubmit={onSubmit}>
      {({ onChange }) => (
        <React.Fragment>
          <Input
            name="email"
            type="email"
            label="Email"
            onChange={onChange}
          />
          <SignupPolicy>
            {policyArr.map((str, i) => (
              <span key={i}>
                {str}
              </span>
            ))}
          </SignupPolicy>
          <Button type="submit" primary width="373px" justifyContent="center" large>
            {t('signup.register')}
          </Button>
        </React.Fragment>
      )}
    </Form>
  );
};

export default translate('sign')(SignupForm);
