import styled from "styled-components";

export const SideWrapper = styled.div`
  width: 15%;
  height: 100%;
  background: #f0f2f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  .img {
    width: 20px;
    height: 20px;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MbtiImg = styled.img`
  width: 70%;
  height: 50%;
  margin-right: 30px;
`;

export const List = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #ffffff;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    background: #ceddef;
  }
  .title {
    height: auto;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    margin-right: 8px;
  }
`;
