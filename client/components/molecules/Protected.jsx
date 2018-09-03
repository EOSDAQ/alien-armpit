import React from 'react';
import { Redirect } from '@reach/router';
import { connect } from 'react-redux';
import { Wrapper, Content, Code, Desc } from './Protected.styled';
import Header from '../organisms/header/Header';
import Footer from '../organisms/Footer';
import { getValueFromStrKey } from 'utils/utils';

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

const ShowWhenHasViewer = (props) => (
  props.account.viewer ? props.children : <Unauthorized />
);

const ShowWhenHasNoViewer = (props) => {
  const {
    showState,
    account,
  } = props;

  if (showState) {
    const keys = Object.keys(showState);
    const value = getValueFromStrKey(props, keys[0]);
    if (value === showState[keys[0]]) {
      return props.children;
    }
  }

  return account.viewer ? <Unauthorized /> : props.children
};

const mapStateToProps = (state, props) => ({
  ...state
});

export const Protected = connect(mapStateToProps)(ShowWhenHasViewer);
export const ReverseProtected = connect(mapStateToProps)(ShowWhenHasNoViewer);
