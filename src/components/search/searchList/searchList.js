import React from "react";
import * as S from "./styles";
import { SearchLists } from "../../../constance/search";

function SearchList() {
  const mbti = "ISFP";
  return (
    <>
      <S.SearchList>
        <div className="listImg">
          <S.MbtiImg
            src={require(`../../../assets/image/${mbti}.svg`)}
            alt="ListImg"
          />
        </div>
        <div className="listWrapper">
          {SearchLists.map((value, page) => {
            return (
              <div className="list" key={page}>
                <span className="title">{value.mbti} 검색결과</span>
              </div>
            );
          })}
        </div>
      </S.SearchList>
    </>
  );
}

export default SearchList;
