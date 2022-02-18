import React from "react";
import * as S from "./style";
import SearchBar from "./searchBar/SearchBar";
import HeaderLoginWrapper from "./headerLoginWrapper/HeaderLoginWrapper";
import { MBTMainLogo } from "../../../assets/index";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.Container>
        <img src={MBTMainLogo} alt="MBTMainLogo" />
        <SearchBar />
        <HeaderLoginWrapper />
      </S.Container>
    </S.HeaderWrapper>
  );
};

export default Header;
