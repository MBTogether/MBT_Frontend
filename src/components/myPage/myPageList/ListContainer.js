import React from "react";
import * as S from "./style";

const ListContainer = (props) => {
  const { title } = props;

  return (
    <S.MyPageList>
      <h1>{title}</h1>
    </S.MyPageList>
  );
};

export default ListContainer;
