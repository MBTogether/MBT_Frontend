import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import UserRouter from "./router/UserRouter";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <UserRouter />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
