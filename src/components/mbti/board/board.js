import React from 'react';
import * as S from './styles';
import { mbti, List } from "../../../constance/mbti/index";

const Board = () => {
    return(
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
    );
}

export default Board;