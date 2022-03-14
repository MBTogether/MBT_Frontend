import styled from "styled-components";

export const IntroduceContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 670px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  b {
    font-size: 60px;
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
  }
  p {
    font-size: 60px;
    font-family: "Noto Sans KR", sans-serif;
  }
  img {
    width: 20px;
    height: 20px;
    align-self: flex-end;
    padding-bottom: 13px;
  }
`;

export const IntroduceWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  p {
    font-size: 40px;
    font-family: "Noto Sans KR", sans-serif;
  }
  img {
    width: 20px;
    height: 20px;
    align-self: flex-end;
    padding-bottom: 13px;
    padding-left: 4px;
  }
`;

export const SettingBlock = styled.div`
  display: flex;
  margin-top: 140px;
  height: 50px;
  justify-content: space-between;
  .button {
    height: 100%;
    border-radius: 20px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    background-color: white;
    font-size: 16px;
  }
  .succesButton {
    width: 150px;
    border: 3px solid #5c5fbf;
    color: #5c5fbf;
  }
  .secessionButton {
    width: 100px;
    border: 3px solid #f65555;
    color: #f65555;
  }
  .buttonFlexEnd {
    height: 100%;
    display: flex;
    gap: 20px;
    button:nth-of-type(1) {
      width: 130px;
    }
  }
`;
