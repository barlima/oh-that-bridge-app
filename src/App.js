import React, { Component} from "react";
import AppRouter from './routers/AppRouter';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes';

class App extends Component{
  render(){
    return(
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    );
  }
}

export default App;