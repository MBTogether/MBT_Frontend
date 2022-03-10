import React from "react";
import * as S from "./style";
import { MBTITypeArray } from "../../../constance/myPage/index";
import {
  INFP,
  ENFP,
  ISFP,
  ESFP,
  ENTJ,
  INTJ,
  ISTJ,
  ESTJ,
  ENFJ,
  INFJ,
  ISFJ,
  ESFJ,
  ENTP,
  INTP,
  ISTP,
  ESTP,
} from "../../../assets/index";

const MBTIProfile = (props) => {
  const { mbti } = props;
  return (
    <>
      {MBTITypeArray.map((value, index) => {
        if (mbti === value.mbti)
          return (
            <S.MbtiProfilWrapper key={index}>
              <img src={ISTP} alt="mbtiCharater" />
              <p style={{ color: `${value.color}` }}>{value.mbti}</p>
            </S.MbtiProfilWrapper>
          );
      })}
    </>
  );
};

export default MBTIProfile;
