import React from "react";
import * as S from "./style";
import { FooterLogoIcon } from "../../../assets/index";
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
      <S.LogoWrapper>
        <div className="footerTitleLogo">
          <h1>MBTI 커뮤니티</h1>
          <span>2022 MBTogether</span>
        </div>
        <img src={FooterLogoIcon} alt="푸터로고 아이콘" />
      </S.LogoWrapper>
    </S.FooterContainer>
  );
};

export default Footer;
