import React from "react";
import * as S from "./styles";
import Header from "../common/header/Header";
import SearchList from "./searchList/searchList";
import SearchResult from "../search/searchResult/searchResult";

const Search = () => {
  return (
    <>
      <Header />
      <S.Section>
        <SearchList />
        <SearchResult />
      </S.Section>
    </>
  );
};

export default Search;
