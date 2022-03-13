import styled from "styled-components";

export const SideWrapper = styled.div`
  width: 15%;
  height: 100%;
  background: #f0f2f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  .imgWrapper {
    width: 100px;
    height: 100px;
  }
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

export const Section = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Board = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const Title = styled.span`
  width: auto;
  height: auto;
  padding-left: 20%;
  cursor: pointer;
  font-family: Noto Sans;
  font-style: normal;
  font-size: 36px;
  font-family: Noto Sans;
  line-height: 49px;
  .Mbti {
    font-weight: 600;
    font-size: 50px;
    line-height: 68px;
    color: #b3889d;
  }
  .board {
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    color: #000000;
  }
`;

export const Line = styled.div`
  width: 70%;
  height: 5px;
  background: #5c5fbf;
`;

export const BoardListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardList = styled.div`
  width: 70%;
  height: 50px;
  margin-top: 3px;
  display: flex;
  background: #f0f2f4;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background: #ceddef;
  }
  .title {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
  }
  .day {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
  }
  .img{
      width: 20%;
      height: 20%;
  }
`;

export const TitleDate = styled.div`
    width: 30%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: 5%;
`;