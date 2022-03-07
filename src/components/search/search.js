import React from "react";
import * as S from "./styles";
import Header from "../header/Header";

const Search = () => {
  const SearchList = [
    { mbti: "모든" },
    { mbti: "ISTJ" },
    { mbti: "ISFJ" },
    { mbti: "INFJ" },
    { mbti: "INTJ" },
    { mbti: "ISTP" },
    { mbti: "ISFP" },
    { mbti: "INFP" },
    { mbti: "INTP" },
    { mbti: "ESTP" },
    { mbti: "ESFP" },
    { mbti: "ENFP" },
    { mbti: "ENTP" },
    { mbti: "ESTJ" },
    { mbti: "ESFJ" },
    { mbti: "ENFJ" },
    { mbti: "ENTJ" },
  ];
  const SearchResult = [
    {
      img: "img1",
      title: "제목1",
      date: "2022.01.01",
      explanation: "설명설명설명",
    },
    {
      img: "img2",
      title: "제목2",
      date: "2022.01.02",
      explanation: "설명설명설명",
    },
    {
      img: "img3",
      title: "제목3",
      date: "2022.01.03",
      explanation: "설명설명설명",
    },
    {
      img: "img4",
      title: "제목4",
      date: "2022.01.04",
      explanation: "설명설명설명",
    },
    {
      img: "img5",
      title: "제목5",
      date: "2022.01.05",
      explanation: "설명설명설명",
    },
  ];
  return (
    <>
      <Header />
      <S.Section>
        <S.SearchList>
          <div className="listImg">
            <span className="img">img</span>
          </div>
          <div className="listWrapper">
            {SearchList.map((value, page) => {
              return (
                <div className="list" key={page}>
                  <span className="title">{value.mbti} 검색결과</span>
                </div>
              );
            })}
          </div>
        </S.SearchList>
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
            {SearchResult.map((value, page) => {
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
      </S.Section>
    </>
  );
};

export default Search;
