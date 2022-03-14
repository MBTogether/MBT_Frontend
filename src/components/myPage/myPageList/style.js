import styled from "styled-components";

export const MyPageList = styled.div`
  display: flex;
  width: 700px;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  h1 {
    font-size: 30px;
    font-family: "Noto Sans KR", sans-serif;
    color: #5c5fbf;
    font-weight: bold;
  }

  .listLine {
    width: 100%;
    height: 5px;
    background-color: #5c5fbf;
    margin-top: 7px;
  }
  .List {
    width: 100%;
  }
`;

export const List = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  background: #f0f2f4;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ceddef;
  }
  .title {
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
  }
  .date {
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    padding-top: 7px;
  }
`;
