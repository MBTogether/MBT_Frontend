import React from "react";
import * as S from "./styles";
import Header from "../common/header/Header";
import { SearchList } from "../../constance/mbti";
import { mbti } from "../../constance/mbti";
import { List } from "../../constance/mbti";

const Mbti = () => {
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
