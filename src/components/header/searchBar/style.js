import styled from "styled-components";

export const SearchBarMainWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & input {
    width: 400px;
    height: 35px;
    border-radius: 50px;
    border: none;
    padding-left: 20px;
    font-size: 15px;
    font-family: "NanumSquare";
  }

  & input::placeholder {
    color: #acaeb2;
    font-size: 15px;
    font-family: "NanumSquare";
  }

  & img {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 12px;
  }
`;
