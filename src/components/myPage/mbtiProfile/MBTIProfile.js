import React from "react";
import { MBTITypeArray } from "../../../constance/myPage/index";

const MBTIProfile = (props) => {
  const { mbti } = props;
  return (
    <>
      {MBTITypeArray.map((value, index) => {
        if (mbti === value) return console.log(value, index);
      })}
    </>
  );
};

export default MBTIProfile;
