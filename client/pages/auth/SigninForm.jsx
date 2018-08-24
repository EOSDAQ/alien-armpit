import React from 'react';
import { translate } from 'react-i18next';
import Button from 'components/atom/Button';
import { email as emailValidation } from 'utils/validations';
import {
  SigninInputWrap,
  SigninLabel,
  SigninInput,
  SigninError,
  SigninPolicy,
} from './SigninForm.styled';
import Form from 'components/molecules/Form';
import Input from 'components/atom/Input';

const SigninForm = (props) => {
  const { t, onSubmit } = props;
  const policy = t('signin.policy');
  const test = /(\$\{\w+\})/g;

  const tokens = {
    termsOfService: {
      name: t('signin.policyTerms'),
      link: '/terms_of_service',
    },
    privacyPolicy: {
      name: t('signin.policyPrivacy'),
      link: '/privacy_policy',
    },
    cookieUse: {
      name: t('signin.policyCookie'),
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
          <SigninPolicy>
            {policyArr.map((str, i) => (
              <span key={i}>
                {str}
              </span>
            ))}
          </SigninPolicy>
          <Button type="submit" primary width="373px" justifyContent="center" large>
            {t('signin.register')}
          </Button>
        </React.Fragment>
      )}
    </Form>
  );
};

export default translate('sign')(SigninForm);
