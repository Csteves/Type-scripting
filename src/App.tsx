import React, { Component } from 'react';
import Calculator from './Components/Calculator';
import { createGlobalStyle, ThemeProvider, theme } from "./styled-components/styled-components";
import './App.css'

createGlobalStyle`
   * {
     margin: 0;
     padding: 0;
     box-sizing:border-box;
     }
`

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Calculator/>
      </ThemeProvider>
    );
  }
}

export default App;
