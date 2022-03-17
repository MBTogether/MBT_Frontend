import React from "react";
import * as S from "./styles";
import { MainMBTIData, PostList } from "../../../constance/main/index";

const Section = () => {
  const mbti = "ISFP";
  const characteristic = "따뜻한 감정을 가진 융통성 있는 예술가";
  return (
    <S.Section>
      <S.Post>
        <div className="PostHead">
          {MainMBTIData.map((list) => {
            if (list.mbti === mbti) {
              return (
                <>
                  <S.MBTImg
                    src={require(`../../../assets/image/${list.mbti}.svg`)}
                    alt="listHeaderMBTICharacter"
                  />
                  <span className="Mbti">{mbti}</span>
                  <span className="Characteristics">
                    : {characteristic}
                  </span>
                </>
              );
            }
          })}
        </div>
        <div className="ListLine" />
        {PostList.map((list, page) => {
          return (
            <div className="List" key={page}>
              <S.List>
                <span className="title">{list.title}</span>
                <span className="date">{list.day}</span>
                <img
                  className="img"
                  src={require(`../../../assets/image/${list.img}.svg`)}
                  alt="listImg"
                />
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
                <img
                  className="img"
                  src={require(`../../../assets/image/${list.img}.svg`)}
                  alt="listImg"
                />
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
                <img
                  className="img"
                  src={require(`../../../assets/image/${list.img}.svg`)}
                  alt="listImg"
                />
              </S.List>
            </div>
          );
        })}
      </S.Post>
    </S.Section>
  );
};

export default Section;
