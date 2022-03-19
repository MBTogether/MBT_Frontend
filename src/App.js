import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyle";
import UserRouter from './router/UserRouter';
import Header from './components/common/header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header />
      <UserRouter />
    </BrowserRouter>
  );
};

export default App;