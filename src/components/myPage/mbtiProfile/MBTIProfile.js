/* eslint-disable array-callback-return */
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
              <img
                src={require(`../../../assets/image/${value.mbti}.svg`)}
                alt="mbtiCharacter"
              />
              <p style={{ color: `${value.color}` }}>{value.mbti}</p>
            </S.MbtiProfilWrapper>
          );
      })}
    </>
  );
};

export default MBTIProfile;
