import React, { Component } from 'react';
import Counter from './Components/Counter';
import { createGlobalStyle, ThemeProvider, theme } from "./styled-components/styled-components";

createGlobalStyle`
   * { margin: 0; padding: 0; }
`

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Counter/>
      </ThemeProvider>
    );
  }
}

export default App;
