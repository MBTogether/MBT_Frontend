import styled from "styled-components";

export const ListBackground = styled.div`
  width: 100%;
  height: 270px;
  background: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 75px;
`;

export const LeftArrow = styled.div``;

export const RightArrow = styled.div``;

export const ListTop = styled.div`
  width: 161.71px;
  height: 37.95px;
  background: #7579e7;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .mbti {
    width: 53.22px;
    height: 26px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: #ffffff;
    margin-right: 5px;
  }
  .characteristics {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 8px;
    line-height: 11px;
    color: #ffffff;
    margin-right: 10px;
    text-align: right;
    margin-bottom: 10px;
  }
`;

export const ListBottom = styled.div`
  width: 161.71px;
  height: 85.38px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 20px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .introduce {
    height: 40px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-align: right;
    color: #8a8a8a;
    margin-right: 10px;
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Post = styled.div`
  width: 582px;
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
  .Line {
    width: 582px;
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
  width: 582px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  background: #f0f2f4;
  align-items: center;
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

