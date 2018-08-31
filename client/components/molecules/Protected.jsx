import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, Content, Code, Desc } from './Protected.styled';
import Header from '../organisms/header/Header';
import Footer from '../organisms/Footer';

const Unauthorized = () => {
  return (
    <Wrapper>
      <Header />
      <Content>
        <div>
          <Code>
            Unauthorized
          </Code>
          <Desc>
            You are not authorized for this page.
          </Desc>
        </div>
      </Content>
      <Footer />
    </Wrapper>
  )
}

const Protected = (props) => {
  const { viewer } = props;
  if (!viewer) {
    return <Unauthorized />;
  }

  return props.children;
}

const mapStateToProps = (state, props) => {
  const { account } = state;
  return account;
}

export default connect(
  mapStateToProps,
)(Protected);
