import React from "react";
import { PostList } from "../../../constance/main";
import * as S from './styles';

const Section = () => {
    return(
        <S.Section>
        <S.Post>
          <div className="PostHead">
            <span className="Mbti">ENFP</span>
            <span className="Characteristics">: 특징은 이렇고 저렇고 등등</span>
          </div>
          <div className="ListLine" />
          {PostList.map((list, page) => {
            return (
              <div className="List" key={page}>
                <S.List>
                  <span className="title">{list.title}</span>
                  <span className="date">{list.day}</span>
                  <span className="img">{list.img}</span>
                </S.List>
              </div>
            );
          })}
        </S.Post>
        <S.Post>
          <div className="PostHead">
            <span className="Mbti">NEW</span>
            <span className="Characteristics">: 새로운 게시글</span>
          </div>
          <div className="ListLine" />
          {PostList.map((list, page) => {
            return (
              <div className="List" key={page}>
                <S.List>
                  <span className="title">{list.title}</span>
                  <span className="date">{list.day}</span>
                  <span className="img">{list.img}</span>
                </S.List>
              </div>
            );
          })}
        </S.Post>
        <S.Post>
          <div className="PostHead">
            <span className="Mbti">HOT</span>
            <span className="Characteristics">: 인기있는 게시글</span>
          </div>
          <div className="ListLine" />
          {PostList.map((list, page) => {
            return (
              <div className="List" key={page}>
                <S.List>
                  <span className="title">{list.title}</span>
                  <span className="date">{list.day}</span>
                  <span className="img">{list.img}</span>
                </S.List>
              </div>
            );
          })}
        </S.Post>
      </S.Section>
    )
}

export default Section;