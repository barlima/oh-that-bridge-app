import React, { Component, useReducer } from "react";

import AppRouter from './routers/AppRouter';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from "react-apollo-hooks";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import BridgesContext from './contexts/bridges-context';
import bridgesReducer, { INITIAL_STATE } from './reducers/bridges-reducer';

const serverAddress = process.env.SERVER_IP;
const client = new ApolloClient({
  link: new HttpLink({ uri: serverAddress }),
  cache: new InMemoryCache(),
});

const App = () => {
  return(
    <ApolloProvider client={client} >
      <ThemeProvider theme={theme}>
        <BridgesContext.Provider value={useReducer(bridgesReducer, INITIAL_STATE)}>
          <AppRouter />
        </BridgesContext.Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;