import React from "react";
import * as S from "./styles";
import { SearchList } from "../../../constance/mbti";

const SideWrapper = () => {
  const TestMbti = "ISFP";
  return (
    <S.SideWrapper>
      <S.ListWrapper>
        <S.ImgWrapper>
          <S.MbtiImg
            src={require(`../../../assets/image/${TestMbti}.svg`)}
            alt="MbtiCharacter"
          />
        </S.ImgWrapper>
        {SearchList.map((value, page) => {
          return (
            <S.List key={page}>
              <span className="title">{value.mbti} 게시판</span>
            </S.List>
          );
        })}
      </S.ListWrapper>
    </S.SideWrapper>
  );
};

export default SideWrapper;
