import React from "react";
import * as S from "./styles";
import Header from "../common/header/Header";

const Mbti = () => {
  const SearchList = [
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
  const mbti = "INFP";

  const List = [
    { title: "안녕하세요.", day: "2020.02.28", img: "1" },
    { title: "안녕하세요.1", day: "2020.02.28", img: "1" },
    { title: "안녕하세요.2", day: "2020.02.28", img: "1" },
    { title: "안녕하세요.3", day: "2020.02.28", img: "1" },
    { title: "안녕하세요.4", day: "2020.02.28", img: "1" },
    { title: "안녕하세요.5", day: "2020.02.28", img: "1" },
    { title: "안녕하세요.6", day: "2020.02.28", img: "1" },
  ];

  return (
    <>
      <Header />
      <S.Section>
        <S.SideWrapper>
          <div className="imgWrapper">
            <span className="img">img</span>
          </div>
          <S.ListWrapper>
            {SearchList.map((value, page) => {
              return (
                <S.List key={page}>
                  <span className="title">{value.mbti} 게시판</span>
                </S.List>
              );
            })}
          </S.ListWrapper>
        </S.SideWrapper>
        <S.Board>
          <S.TitleWrapper>
            <S.Title>
              <span className="Mbti">{mbti}</span>{" "}
              <span className="board">게시판</span>입니다.
            </S.Title>
          </S.TitleWrapper>
          <S.Line />
          <S.BoardListWrapper>
            {List.map((value, index) => {
              return (
                <S.BoardList key={index}>
                  <S.TitleDate>
                    <span className="title">{value.title}</span>
                    <span className="day">{value.day}</span>
                  </S.TitleDate>
                  <div className="img">{value.img}</div>
                </S.BoardList>
              );
            })}
          </S.BoardListWrapper>
        </S.Board>
      </S.Section>
    </>
  );
};

export default Mbti;
