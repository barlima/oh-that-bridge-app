import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LandingPage from '../componentes/LandingPage/index';
import Map from '../componentes/Map/index';

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/map" component={Map} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>
)

export default AppRouter;