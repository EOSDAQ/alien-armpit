import React from 'react';
import { Router } from '@reach/router';
import Modal from 'components/organisms/modal/Modal';
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
    path: '/exchange/:code',
    Component: Exchange,
  },
  {
    path: '*',
    Component: asyncRoute(() => import(/* webpackChunkName: "auth" */ './auth/AuthRouter')),
  },
  {
    path: '/',
    Component: asyncRoute(() => import(/* webpackChunkName: "landing" */ './main/Main')),
  },
];

class Pages extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          {routes.map(({ path , Component }) => (
            <Component key={path} path={path} />
          ))}
        </Router>
        <Modal default />
      </React.Fragment>
    );
  }
}

export default Pages;
