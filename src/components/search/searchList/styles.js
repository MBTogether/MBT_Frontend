import styled from "styled-components";

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

