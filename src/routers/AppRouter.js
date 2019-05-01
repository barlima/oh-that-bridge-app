import React, { useContext, useEffect } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import BridgesContext from '../contexts/bridges-context';
import { BRIDGES_QUERY } from '../graphql/queries/bridges-query';

import LoadingPage from '../componentes/LoadingPage/index';
import LandingPage from '../componentes/LandingPage/index';
import Map from '../componentes/Map/index';

const history = createBrowserHistory();

const AppRouter = () => {
  const { data, loading, errors } = useQuery(BRIDGES_QUERY, { suspend: false });
  const [ _, dispatch ] = useContext(BridgesContext);

  useEffect(() => {
    if (!loading && !errors && data.bridges) {
      dispatch({
        type: 'SET_BRIDGES',
        bridges: data.bridges
      })
    }
  }, [data])

  if(loading) return <LoadingPage />;

  return(
    <Router history={history}>
      <Switch>
        <Route path="/map" component={Map} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  )
}

export default AppRouter;