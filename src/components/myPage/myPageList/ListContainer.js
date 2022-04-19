import React from "react";
import * as S from "./style";
import { PostList } from "../../../constance/myPage";

const ListContainer = (props) => {
  const { title } = props;

  return (
    <S.MyPageList>
      <h1>{title}</h1>
      <div className="listLine"></div>
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
    </S.MyPageList>
  );
};

export default ListContainer;
