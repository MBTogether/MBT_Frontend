import React, { useState } from "react";
import * as S from "./styles";
import { MainMBTIData } from "../../../constance/main/index";

const TopList = () => {
  const [page, setPage] = useState(7);
  const { listMbti } = { MainMBTIData };
  return (
    <S.ListBackground>
      <S.LeftArrow direction="prev">&lt;</S.LeftArrow>
      {MainMBTIData.map((value, listPage) => {
        if (listPage < 7) {
          return (
            <div className="mbtiList" key={listPage}>
              <S.ListTop>
                <span className="mbti">{value.mbti}</span>
                <span className="characteristics">
                  : {value.characteristic}
                </span>
              </S.ListTop>
              <S.ListBottom>
                <span className="introduce">{value.introduce}</span>
              </S.ListBottom>
            </div>
          );
        }
      })}
      <S.RightArrow direction="next">&gt;</S.RightArrow>
    </S.ListBackground>
  );
};

export default TopList;
