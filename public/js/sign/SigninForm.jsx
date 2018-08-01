import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { translate } from 'react-i18next';
import Button from 'common/components/atom/Button';
import { email as emailValidation } from 'common/utils/validations';
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


const replaceToJsxAndBuildArray = (source, condition, replacement) => {
  let result;
  if (typeof source === 'string') {
    result = source.split(condition);
    result.splice(result.length - 1, 0, replacement);
  }

  if (typeof source === 'object') {
    result = source.slice(0);
    const target = result[result.length - 1];
    const splitted = target.split(condition);
    splitted.splice(splitted.length - 1, 0, replacement);
    result.splice(result.length - 1, 1);
    result = result.concat(splitted);
  }

  return result;
};

const SigninForm = (props) => {
  const { t, handleSubmit } = props;

  const policy = t('signin.policy');
  let policyArr = replaceToJsxAndBuildArray(
    policy,
    '${termsOfService}',
    <a className="link" href="/termsOfService">
      {t('signin.policyTerms')}
    </a>,
  );
  policyArr = replaceToJsxAndBuildArray(
    policyArr,
    '${privacyPolicy}',
    <a className="link" href="/privacyPolicy">
      {t('signin.policyPrivacy')}
    </a>,
  );
  policyArr = replaceToJsxAndBuildArray(
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
        {policyArr}
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
  form: 'signinForm',
})(translate('sign')(SigninForm));
