import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import UserRouter from "./router/UserRouter";
import { RecoilRoot } from "recoil";
import "./index.css";
import Header from "./components/common/header/Header";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <UserRouter />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
