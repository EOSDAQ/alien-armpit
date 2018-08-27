import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'reducer/account/accountReducer';
import { translate } from 'react-i18next';
import { AccountMenu, AccountName, AccountEmail, SectionLabel, AccountIdenticon, Section, SecurityAction, SecurityValue } from './HeaderAccountMenu.styled';
import Flex from '../../atom/Flex';
import Button, { WarningButton } from '../../atom/Button';
import Icon from '../../atom/Icon';
import { colors } from '../../css/theme';
import { navigate } from '@reach/router';
import Box from '../../atom/Box';
import modal from 'reducer/modal/modalReducer';

const HeaderAccountMenu = ({ t, signOut, initOtp, closeDropdown, ...account }) => {
  const {
    name,
    email,
    identicon,
    otpConfirm,
    emailConfirm,
  } = account;

  const security = [
    { 
      name: t('menu.emailConfirm'),
      value: emailConfirm,
      onClick: () => {
        navigate('/sent-email');
      }
    },
    { 
      name: t('menu.connectOTP'), 
      value: otpConfirm,
      onClick: () => closeDropdown() || initOtp(),
    },
  ]

  return (
    <AccountMenu>
      <SectionLabel>
        {t('menu.account')}
      </SectionLabel>
      <Section>
        <Flex alignItems="center">
          <AccountIdenticon 
            dangerouslySetInnerHTML={{ __html: identicon }}
          />
          <Box>
            <AccountName>
              {name}
            </AccountName>
            <AccountEmail>
              {email}
            </AccountEmail>
          </Box>
        </Flex>
      </Section>
      <SectionLabel>
        {t('menu.security')}
      </SectionLabel>
      <Section>
        {security.map((field, i) => (
          <SecurityAction key={i}>
            <div>
              {field.name}
            </div>
            <SecurityValue>
              {field.value ? (
                <Icon type="check" fill={colors.green500} />
              ) : (
                <Button onClick={field.onClick}>
                  <Icon type="next" fill={colors.blue500} />
                </Button>
              )}
            </SecurityValue>
          </SecurityAction>
        ))}
      </Section>
      <WarningButton onClick={signOut}>
        {t('menu.signOut')}
      </WarningButton>
    </AccountMenu>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(actions.forgetScatterIdentity()),
  initOtp: () => dispatch(modal.actions.openModal({
    type: 'OTP_INIT',
  })),
})

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  translate('account'),
)(HeaderAccountMenu);
