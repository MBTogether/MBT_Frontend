import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from "./GlobalStyle";
import Routing from "./router/UserRouter"

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routing />
    </BrowserRouter>
  );
};

export default App;