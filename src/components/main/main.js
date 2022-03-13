import React from "react";
import * as S from "./styles";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { MainMBTIData } from '../../constance/main/index';
import { PostList } from "../../constance/main/index";
import { useState } from "react";

const Main = () => {
  const [page, setPage] = useState(7);
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleSwipe(direction) {
    setCurrentIndex((currentIndex) => currentIndex + direction);
  }
  let a = 0;
  const onLeft = () => {
    if (a > 0) {
      a--;
      alert(a);
      return;
    } else if (a === 0) {
      a = 16;
      alert(a);
      return;
    } else return;
  };
  const onRight = () => {
    if (a < 16) {
      a++;
      alert(a);
      return;
    } else if (a === 16) {
      a = 0;
      alert(a);
      return;
    } else return;
  };
  const check = (listPage, value) => {
    if (a <= listPage && listPage < page + a) {
      if (a > 0) {
        return (
          <div className="mbtiList" key={listPage}>
            <S.ListTop>
              <span className="mbti">{value.mbti}</span>
              <span className="characteristics">: {value.characteristic}</span>
            </S.ListTop>
            <S.ListBottom>
              <span className="introduce">{value.introduce}</span>
            </S.ListBottom>
          </div>
        );
      }
      return true;
    } else return false;
  };
  return (
    <>
      <Header />
      <S.ListBackground>
        <S.LeftArrow direction="prev" onClick={() => onLeft()}>
          &lt;
        </S.LeftArrow>
        {MainMBTIData.map((value, listPage) => {
          if (listPage < 7) {
            return (
              <div className="mbtiList" key={listPage}>
                <S.ListTop>
                  {/* <img src= {MBTICharacter} alt="ENFP" /> */}
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
        })}
        <S.RightArrow direction="next" onClick={() => onRight()}>
          &gt;
        </S.RightArrow>
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
