import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'reducer/account/accountReducer';
import { translate } from 'react-i18next';
import { AccountMenu, AccountName, MenuAction, SectionLabel, AccountIdenticon, Section, SecurityAction, SecurityValue } from './HeaderAccountMenu.styled';
import Flex from '../../atom/Flex';
import Button, { WarningButton } from '../../atom/Button';
import Icon from '../../atom/Icon';
import { colors } from '../../css/theme';
import { Link } from '@reach/router';

const HeaderAccountMenu = ({ t, name, identicon, signOut, ...props }) => {
  // console.log(props);
  const security = [
    { name: t('menu.emailConfirm'), value: false },
    { name: t('menu.connectOTP'), value: false },
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
          <AccountName>
            {name}
          </AccountName>
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
                <Link to="/signin">
                  <Icon type="next" fill={colors.blue500} />
                </Link>
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
})

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  translate('account'),
)(HeaderAccountMenu);
