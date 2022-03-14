/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { OpenEyesIcon, CloseEyesIcon } from "../../../assets/index";
import * as S from "./style";
import PasswordInputBox from "./PasswordInputBox";
import { PasswordPlaceholder } from "../../../constance/myPage/index";

const PasswordModal = (props) => {
  const { isOpen } = props;

  const [passwordData, setPasswordData] = useState([
    { password: "" },
    { password: "" },
    { password: "" },
  ]);

  const [passwordType, setPasswordType] = useState([
    {
      id: 0,
      type: "password",
      visible: false,
    },
    {
      id: 1,
      type: "password",
      visible: false,
    },
    {
      id: 2,
      type: "password",
      visible: false,
    },
  ]);

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

  const handlePasswordType = (id) => {
    //매개변수에 id넣어주세요
    let i = 0;
    for (i = 0; i < 3; i++) {
      console.log(id, passwordType[i].id);
      if (passwordType[i].id === id) {
        break;
      }
    }
    let newArr = passwordType.map((item, index) => {
      if (index === i) {
        if (item.visible === true) {
          return { id: i, type: "password", visible: false };
        } else {
          return { id: i, type: "text", visible: true };
        }
      }
      return item;
    });
    setPasswordType(newArr);
  };

  return isOpen ? (
    <S.Container>
      <S.Background />
      <S.PasswordModalContainer onSubmit={onSubmitEvent}>
        <h1>비밀번호 변경</h1>
        {PasswordPlaceholder.map((value, index) => {
          return (
            <PasswordInputBox
              placeholder={value.text}
              index={index}
              handlePasswordType={handlePasswordType}
              visible={passwordType[index].visible}
              type={passwordType[index].type}
            />
          );
        })}
        <input type="submit" value="변경하기" />
      </S.PasswordModalContainer>
    </S.Container>
  ) : (
    ""
  );
};

export default PasswordModal;
