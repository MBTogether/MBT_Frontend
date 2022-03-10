import React from "react";
import * as S from "./style";
import MBTIProfile from "../mbtiProfile/MBTIProfile";

const ProFileWrapper = () => {
  return (
    <S.CenterContainer>
      <S.ProFileMainContainer>
        <MBTIProfile mbti={"ISTP"} />
      </S.ProFileMainContainer>
    </S.CenterContainer>
  );
};

export default ProFileWrapper;
