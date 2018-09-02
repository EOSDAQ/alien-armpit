import React from 'react';
import { Redirect } from '@reach/router';
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

const HasNoAuth = (props) => {
  const { viewer } = props;
  if (!viewer) {
    return <Unauthorized />;
  }

  return props.children;
}

const HasAuth = (props) => {
  const { viewer } = props;
  if (viewer) {
    return <Redirect to="/" noThrow />;
  }
  return props.children;
}

const mapStateToProps = (state, props) => {
  const { account } = state;
  return account;
}

export const ReverseProtected = connect(mapStateToProps)(HasAuth);
export const Protected = connect(mapStateToProps)(HasNoAuth);
