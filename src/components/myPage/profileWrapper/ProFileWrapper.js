import React from "react";
import * as S from "./style";
import MBTIProfile from "../mbtiProfile/MBTIProfile";
import Introduce from "../Introduce/Introduce";

const ProFileWrapper = () => {
  return (
    <S.CenterContainer>
      <S.ProFileMainContainer>
        <MBTIProfile mbti={"ESTP"} />
        <Introduce />
      </S.ProFileMainContainer>
    </S.CenterContainer>
  );
};

export default ProFileWrapper;
