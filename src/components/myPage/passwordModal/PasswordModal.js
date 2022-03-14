/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import * as S from "./style";

const PasswordModal = (props) => {
  const { isOpen } = props;

  useEffect(() => {
    onScollBlock();
  }, [isOpen]);

  //모달창이 뜨면 스크롤을 막는 함수
  const onScollBlock = () => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const onSubmitEvent = (e) => {
    e.preventDefault();
    alert(`Submit event occurs`);
  };

  return isOpen ? (
    <S.Container>
      <S.Background />
      <S.PasswordModalContainer onSubmit={onSubmitEvent}>
        <h1>비밀번호 변경</h1>
        <input type="password" placeholder="현재 비밀번호를 입력해 주세요." />
        <input type="password" placeholder="변경할 비밀번호를 입력해 주세요." />
        <input
          type="password"
          placeholder="변경할 비밀번호를  다시 한 번 입력해 주세요."
        />
        <input type="submit" value="변경하기" />
      </S.PasswordModalContainer>
    </S.Container>
  ) : (
    ""
  );
};

export default PasswordModal;
