import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from "./GlobalStyle";
import UserRouter from './router/UserRouter';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <UserRouter />
    </BrowserRouter>
  );
};

export default App;