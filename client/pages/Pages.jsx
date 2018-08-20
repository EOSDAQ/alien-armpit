import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from 'components/organisms/modal/Modal';

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
    component: asyncRoute(() => import(/* webpackChunkName: "signin" */ './sign/Signin')),
  },
  {
    path: '/sentEmail',
    component: asyncRoute(() => import(/* webpackChunkName: "sentEmail" */ './sent-email/SentEmail')),
  },
  {
    path: '/exchange/:coinCode',
    component: asyncRoute(() => import(/* webpackChunkName: "exchange" */ './exchange/Exchange')),
  },
  {
    path: '/',
    component: asyncRoute(() => import(/* webpackChunkName: "landing" */ './main/Main')),
  },
];

class Pages extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {routes.map(routeProps => (
            <Route
              key={routeProps.path.slice(1)}
              {...routeProps}
            />
          ))}
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default Pages;
