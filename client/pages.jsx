import React from 'react';

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

const pages = [
  {
    path: '/signin',
    component: asyncRoute(() => import(/* webpackChunkName: "signin" */ './pages/sign/Signin')),
  },
  {
    path: '/exchange',
    component: asyncRoute(() => import(/* webpackChunkName: "exchange" */ './pages/exchange/Exchange')),
  },
  {
    path: '/',
    component: asyncRoute(() => import(/* webpackChunkName: "landing" */ './pages/main/Main')),
  },
];

export default pages;
