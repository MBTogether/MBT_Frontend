import React from "react";
import * as S from "./style";
import { MBTITypeArray } from "../../../constance/myPage/index";

const MBTIProfile = (props) => {
  const { mbti } = props;
  return (
    <>
      {MBTITypeArray.map((value, index) => {
        if (mbti === value.mbti)
          return (
            <S.MbtiProfilWrapper key={index}>
              <img src={value.mbti === "" ? " " : ""} alt="mbtiCharater" />
              <p style={{ color: `${value.color}` }}>{value.mbti}</p>
            </S.MbtiProfilWrapper>
          );
      })}
    </>
  );
};

export default MBTIProfile;
