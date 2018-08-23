import React from 'react';
import { Redirect, Router } from '@reach/router';
import Modal from 'components/organisms/modal/Modal';
import Signin from './sign/Signin';
import Exchange from './exchange/Exchange';

function asyncRoute(dynamicImport) {
  class AsyncRoute extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        component: null,
      };
    }

    componentWillMount() {
      this.setComponent();
    }

    async setComponent() {
      const { default: component } = await dynamicImport();
      this.setState({ component });
    }

    render() {
      const { component: Page } = this.state;
      if (Page === null) return null;

      return <Page {...this.props} />;
    }
  }

  return AsyncRoute;
}

const routes = [
  {
    path: '/signin',
    Component: Signin,
  },
  {
    path: '/sentEmail',
    Component: asyncRoute(() => import(/* webpackChunkName: "sentEmail" */ './sent-email/SentEmail')),
  },
  {
    path: '/exchange/:code',
    Component: Exchange,
  },
  {
    path: '/',
    Component: asyncRoute(() => import(/* webpackChunkName: "landing" */ './main/Main')),
  },
];

class Pages extends React.Component {
  render() {
    return (
      <Router>
        <Redirect from="/exchange" to="/exchange/IPOS_SYS" />
        {routes.map(({ path , Component }) => (
          <Component key={path} path={path} />
        ))}
        <Modal default />
      </Router>
    );
  }
}

export default Pages;
