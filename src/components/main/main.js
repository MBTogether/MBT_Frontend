import React from "react";
import * as S from "./styles";
import Header from "../header/Header";

const Main = () => {
  const mbti = [];
  const Characteristics = [];
  return (
    <>
      <Header />
      <S.ListBackground>
        <div>
          <S.ListTop>
            <span className="mbti">mbti</span>
            <span className="characteristics">: 모험을 즐기는 사업가</span>
          </S.ListTop>
          <S.ListBottom>
            <span className="introduce">설명 설명 설명</span>
          </S.ListBottom>
        </div>
      </S.ListBackground>
      <S.Section>
      <S.Post>
        <div className="PostHead">
          <span className="Mbti" path="/search">ENFP</span>
          <span className="Characteristics">: 특징은 이렇고 저렇고 등등</span>
        </div>
        <div className="Line" />
        <div className="List">
          <S.List>
            <span className="title">안녕하세요 반갑습니다.</span>
            <span className="date">2022.02.15</span>
            <span className="img">img</span>
          </S.List>
        </div>
      </S.Post>
      </S.Section>
    </>
  );
};

export default Main;
