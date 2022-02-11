import React from "react";
import * as S from "./style";
import { SearchIcon } from "../../../util/assets";

const SearchBar = () => {
  return (
    <S.SearchBarMainWrapper>
      <input type="text" placeholder="검색어를 입력하세요" />
      <img src={SearchIcon} alt="SearchIcon" />
    </S.SearchBarMainWrapper>
  );
};

export default SearchBar;
