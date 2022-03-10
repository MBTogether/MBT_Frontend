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
            <p key={index} style={{ color: `${value.color}` }}>
              {value.mbti}
            </p>
          );
      })}
    </>
  );
};

export default MBTIProfile;
