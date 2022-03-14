import React from "react";
import * as S from "./styles";
import Header from "../common/header/Header";
import SideWrapper from "./sideWrapper/sideWrapper";
import Board from "./board/board";

const Mbti = () => {
  return (
    <>
      <Header />
      <S.Section>
        <SideWrapper />
        <Board />
      </S.Section>
    </>
  );
};

export default Mbti;
