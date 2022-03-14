import React from 'react';
import * as S from './styles';
import {SearchResults} from '../../../constance/search/index';

function SearchResult (){
    return (
        <S.SearchResult>
        <div className="titleWrapper">
          <span className="title">
            <span className="semiBold">{SearchResult.length}건</span>의{" "}
            <span className="search">검색어</span>
            <span className="semiBold">검색결과</span>입니다
          </span>
          <div className="listBar" />
        </div>
        <div className="listWrapper">
          {SearchResults.map((value, page) => {
            return (
              <div className="list" key={page}>
                <div className="listTop">
                  <span className="listImg">{value.img}</span>
                  <div className="listTitleWrapper">
                    <span className="listTitle">{value.title}</span>
                    <span className="listDate">{value.date}</span>
                  </div>
                </div>
                <div className="listBottom">
                  <span className="explanation">{value.explanation}</span>
                </div>
              </div>
            );
          })}
        </div>
      </S.SearchResult>
    );
}

export default SearchResult;