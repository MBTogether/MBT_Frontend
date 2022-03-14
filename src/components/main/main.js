import React, { useState } from "react";
import * as S from "./styles";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { MainMBTIData, PostList } from "../../constance/main/index";

const Main = () => {
  const [page, setPage] = useState(7);
  const { listMbti } = { MainMBTIData };
  return (
    <>
      <Header />
      <S.ListBackground>
        <S.LeftArrow direction="prev">&lt;</S.LeftArrow>
        {MainMBTIData.map((value, listPage) => {
          if (listPage < 7) {
            if (value.mbti === listMbti) {
              return (
                <div className="mbtiList" key={listPage}>
                  <S.ListTop>
                    <span className="mbti">{value.mbti}</span>
                    <span className="characteristics">
                      : {value.characteristic}
                    </span>
                  </S.ListTop>
                  <S.ListBottom>
                    <span className="introduce">{value.introduce}</span>
                  </S.ListBottom>
                </div>
              );
            }
          }
        })}
        <S.RightArrow direction="next">&gt;</S.RightArrow>
      </S.ListBackground>
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
      <Footer />
    </>
  );
};

export default Main;
