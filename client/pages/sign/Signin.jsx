import React from 'react';
import { translate } from 'react-i18next';
import Footer from 'common/components/organisms/Footer';
import Header from 'common/components/organisms/header/Header';
import Flex from 'common/components/atom/Flex';
import Icon from 'common/components/atom/Icon';
import {
  SigninWrapper,
  SigninHeader,
  SigninDesc,
} from './Signin.styled';
import SigninForm from './SigninForm';

class Signin extends React.Component {
  onSubmit() {
    console.log('onSubmit');
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <Header />
        <Flex alignItems="center" justifyContent="center" pt={85} pb={85}>
          <SigninWrapper>
            <Icon type="logoText" width={130} />
            <SigninHeader>
              {t('signin.title')}
            </SigninHeader>
            <SigninDesc dangerouslySetInnerHTML={{ __html: t('signin.desc') }} />
            <SigninForm onSubmit={this.onSubmit} />
          </SigninWrapper>
        </Flex>
        <Footer />
      </div>
    );
  }
}

export default translate('sign')(Signin);
