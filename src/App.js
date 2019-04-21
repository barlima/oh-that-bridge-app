import React, { Component} from "react";

import AppRouter from './routers/AppRouter';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://0.0.0.0:3000/graphql"}),
  cache: new InMemoryCache(),
});

class App extends Component{
  render(){
    return(
      <ApolloProvider client={client} >
        <ApolloProviderHooks client={client} >
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </ApolloProviderHooks>
      </ApolloProvider>
    );
  }
}

export default App;