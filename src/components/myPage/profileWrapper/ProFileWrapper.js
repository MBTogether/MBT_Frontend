import React from "react";
import * as S from "./style";
import MBTIProfile from "../mbtiProfile/MBTIProfile";

const ProFileWrapper = () => {
  return (
    <S.ProFileMainContainer>
      <MBTIProfile mbti={"ENFP"} />
    </S.ProFileMainContainer>
  );
};

export default ProFileWrapper;
