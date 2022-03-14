import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10%;
`;

export const Post = styled.div`
  width: 30%;
  .PostHead {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .Mbti {
    height: 35px;
    color: #5c5fbf;
    font-size: 35px;
    font-weight: bold;
    line-height: 48px;
    font-style: normal;
    padding-right: 5px;
  }
  .Characteristics {
    height: 20px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #5c5fbf;
    padding-right: 10px;
  }
  .ListLine {
    width: 100%;
    height: 5px;
    background: #5c5fbf;
    margin-bottom: 3px;
  }
  .List {
    display: flex;
    flex-direction: column;
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
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
  }
  .date {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    padding-top: 7px;
  }
`;
