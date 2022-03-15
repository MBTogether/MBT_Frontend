import React from "react";
import * as S from "./style";
import { ModifyIcon } from "../../../assets/index";
import { useSetRecoilState } from "recoil";
import { PasswordModalIsOpen } from "../../../module/atom/myPage";

const Introduce = () => {
  const setIsOpen = useSetRecoilState(PasswordModalIsOpen);
  return (
    <S.IntroduceContainer>
      <S.TitleWrapper>
        <b>정지원</b>
        <p>님</p>
        <img src={ModifyIcon} alt="modifyIcon" />
      </S.TitleWrapper>
      <S.IntroduceWrapper>
        <p>안녕하세요, 반갑습니다. 친하게 지내요</p>
        <img src={ModifyIcon} alt="modifyIcon" />
      </S.IntroduceWrapper>
      <S.SettingBlock>
        <button className="succesButton button">MBTI 재검사하기</button>
        <div className="buttonFlexEnd">
          <button
            className="succesButton button"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            비밀번호 변경
          </button>
          <button className="secessionButton button">탈퇴하기</button>
        </div>
      </S.SettingBlock>
    </S.IntroduceContainer>
  );
};

export default Introduce;
