import React from "react";
import * as S from "./style";
import { FieldAndPersonData } from "../../../constance/footer/index";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FieldAndPersonWrapper>
        {FieldAndPersonData.map((value, index) => {
          return (
            <div className="personList" key={index}>
              <p>{value.field}</p>
              <p>{value.name}</p>
            </div>
          );
        })}
      </S.FieldAndPersonWrapper>
    </S.FooterContainer>
  );
};

export default Footer;
