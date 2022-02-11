import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderLoginWrapper = () => {
  return (
    <LoginWrapper>
      <Link to="">
        <span>회원가입</span>
      </Link>
      <Link to="">
        <button>로그인</button>
      </Link>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  a > span {
    font-family: "NanumSquare";
    font-size: 22px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    padding-right: 18px;
  }

  a:nth-of-type(2) {
    padding-right: 80px;
  }

  a > button {
    width: 90px;
    cursor: pointer;
    height: 42px;
    background-color: transparent;
    border: solid white 1px;
    border-radius: 8px;
    font-family: "NanumSquare";
    font-size: 22px;
    font-weight: bold;
    color: white;
  }
`;

export default HeaderLoginWrapper;
