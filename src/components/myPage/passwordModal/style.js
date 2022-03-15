import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 120%;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 10;
`;

export const PasswordModalContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  height: 570px;
  z-index: 20;
  border-radius: 30px;
  background-color: #f0f2f4;
  position: absolute;
  top: 13rem;

  & > h1 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 50px;
    font-weight: bold;
    color: #5c5fbf;
    margin-top: 50px;
  }

  & > div > input {
    width: 460px;
    height: 50px;
    border-radius: 30px;
    padding-left: 30px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    color: #7378ff;
    font-size: 20px;
    margin-top: 40px;
  }

  & > div > input::placeholder {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 500;
    color: #7378ffcc;
    font-size: 20px;
  }

  & > div.passwordWrapper {
    position: relative;
  }

  & > div > img {
    width: 28px;
    height: 28px;
    position: absolute;
    bottom: 9px;
    right: 20px;
    cursor: pointer;
  }

  & > input[type="submit"] {
    font-family: "Noto Sans KR", sans-serif;
    width: 490px;
    height: 50px;
    border-radius: 30px;
    margin-top: 40px;
    background-color: #5c5fbf;
    color: #f0f2f4;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding: 0;
  }

  & > img[alt="X-icon"] {
    position: absolute;
    width: 28px;
    height: 28px;
    right: 30px;
    top: 25px;
    cursor: pointer;
  }
`;
