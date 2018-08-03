import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { translate } from 'react-i18next';
import Button from 'components/atom/Button';
import { email as emailValidation } from 'utils/validations';
import { replaceAndBuildArray } from 'utils/utils';
import {
  SigninInputWrap,
  SigninLabel,
  SigninInput,
  SigninError,
  SigninPolicy,
} from './SigninForm.styled';

const renderInput = ({
  input, label, type, meta: { touched, error },
}) => (
  <SigninInputWrap>
    <SigninLabel>
      {label}
    </SigninLabel>
    <SigninInput
      {...input}
      placeholder={label}
      type={type}
      large
      width="355px"
    />
    {
      (touched && error)
        ? (
          <SigninError>
            {error}
          </SigninError>
        ) : null
    }
  </SigninInputWrap>
);

const SigninForm = (props) => {
  const { t, handleSubmit } = props;

  const policy = t('signin.policy');
  let policyArr = replaceAndBuildArray(
    policy,
    '${termsOfService}',
    <a className="link" href="/termsOfService">
      {t('signin.policyTerms')}
    </a>,
  );
  policyArr = replaceAndBuildArray(
    policyArr,
    '${privacyPolicy}',
    <a className="link" href="/privacyPolicy">
      {t('signin.policyPrivacy')}
    </a>,
  );
  policyArr = replaceAndBuildArray(
    policyArr,
    '${cookieUse}',
    <a className="link" href="/privacyOption">
      {t('signin.policyCookie')}
    </a>,
  );

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="email"
        label="Email"
        validate={emailValidation}
        component={renderInput}
      />
      <SigninPolicy>
        {[...policyArr]}
        &nbsp;·&nbsp;
        <a className="link" href="/privacyOption">
          {t('signin.privacyOptions')}
        </a>
      </SigninPolicy>
      <Button type="submit" primary width="373px" justifyContent="center" large>
        {t('signin.register')}
      </Button>
    </form>
  );
};

export default reduxForm({
  form: 'signin',
})(translate('sign')(SigninForm));
