import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SearchList = styled.div`
  width: 16%;
  height: 100%;
  background: #f0f2f4;
  .listImg {
    width: 90%;
    height: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .img {
    width: 200px;
    height: 200px;
  }
  .listWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .list {
    width: 90%;
    height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5px;
    background: #ffffff;
    &:hover {
      background: #ceddef;
    }
  }
  .title {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    margin-right: 5px;
  }
`;

export const SearchResult = styled.div`
  width: 84%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .titleWrapper {
    width: 84%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10%;
  }
  .title {
    height: auto;
    font-size: 36px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    color: #000000;
  }
  .semiBold {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    color: #000000;
  }
  .search {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 68px;
    color: #b3889d;
  }
  .listBar {
    width: 70%;
    height: 5px;
    background: #5c5fbf;
    margin-top: 10px;
  }
  .list {
    width: 100%;
    height: 40%;
    background: #f0f2f4;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5px;
    cursor: pointer;
    &:hover {
      background: #ceddef;
    }
  }
  .listWrapper {
    width: 59%;
  }
  .listImg {
    width: 4.6%;
    height: 50%;
    padding-right: 2%;
  }
  .listTitle {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .listDate {
    margin-top: 10px;
  }
  .listTop {
    display: flex;
    margin-left: 3%;
  }
  .listTitleWrapper {
    width: 362px;
    height: 27px;
    display: flex;
    justify-content: space-between;
  }
  .listBottom {
    margin-left: 3%;
  }
  .explanation {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }
`;
