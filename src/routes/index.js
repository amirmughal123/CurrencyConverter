import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import CurrencyConverter from '../pages/CurrencyConverter';

export const renderRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={ props => <AppRoute Component={CurrencyConverter} props={props} authenticated={false} /> } />
      </Switch>
    </Router>
  )
}

const AppRoute = ({ Component, Layout, props }) => {
  if (Layout) {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  } else if (!Component) {
    return <Layout {...props} />;
  } else {
    return <Component {...props} />;
  }
};
