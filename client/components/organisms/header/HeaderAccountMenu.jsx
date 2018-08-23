import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'reducer/account/accountReducer';
import { AccountMenu, AccountName, MenuAction, SectionLabel, AccountIdenticon, Section, SecurityAction, SecurityValue } from './HeaderAccountMenu.styled';
import Flex from '../../atom/Flex';
import Button, { WarningButton } from '../../atom/Button';
import Icon from '../../atom/Icon';
import { colors } from '../../css/theme';

const HeaderAccountMenu = ({ name, identicon, signOut, ...props }) => {
  // console.log(props);
  const security = [
    { name: 'Email confirmation', value: false },
    { name: 'Connect Google OTP', value: false },
  ]

  return (
    <AccountMenu>
      <SectionLabel>
        Account
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
        Security
      </SectionLabel>
      <Section>
        {security.map((field) => (
          <SecurityAction key={field.name}>
            <div>
              {field.name}
            </div>
            <SecurityValue>
              {field.value ? (
                <Icon type="check" fill={colors.green500} />
              ) : (
                <Icon type="next" fill={colors.blue500} />
              )}
            </SecurityValue>
          </SecurityAction>
        ))}
      </Section>
      <WarningButton onClick={signOut}>
        Sign out
      </WarningButton>
    </AccountMenu>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(actions.forgetScatterIdentity()),
})

export default connect(
  null,
  mapDispatchToProps,
)(HeaderAccountMenu);
