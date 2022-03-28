import styled from "styled-components";

export const ListBackground = styled.div`
  width: 100%;
  height: 270px;
  background: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 75px;
  .mbtiList {
    cursor: pointer;
    position: relative;
  }
  .listTrack {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const MBTIImg = styled.img`
  width: 90%;
  height: 120%;
  position: absolute;
  right: 40%;
  bottom: 3%;
  -webkit-user-drag: none;
  &:before{
    content: ' ';
  }
  &:after{
    content: 'Broken Image';
    text-align: center;
  }
`;

export const LeftArrow = styled.div`
  width: 41px;
  height: 41px;
  background: #7579e7;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`;

export const RightArrow = styled.div`
  width: 41px;
  height: 41px;
  background: #7579e7;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
`;

export const ListTop = styled.div`
  width: 161.71px;
  height: 37.95px;
  background: #7579e7;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  user-select: none;
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
  user-select: none;
  .introduce {
    width: 55%;
    height: auto;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-align: right;
    color: #8a8a8a;
    margin-right: 5%;
  }
`;
