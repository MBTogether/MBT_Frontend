import React from "react";
import * as S from './styles';
import { SearchLists } from "../../../constance/search";

function SearchList(){
  return (
    <>
      <S.SearchList>
        <div className="listImg">
          <span className="img">img</span>
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
};

export default SearchList;
