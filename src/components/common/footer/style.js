import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 385px;
  background-color: #d4d4d4;
  display: flex;
  flex-direction: column;
`;

export const FieldAndPersonWrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-around;
  margin-top: 110px;
  .personList {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    p {
      font-family: "NanumSquare";
      font-size: 20px;
      color: #818181;
      font-weight: 600;
    }
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
  position: relative;

  .footerTitleLogo {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 18px;
    h1 {
      font-weight: 900;
      font-size: 40px;
    }
    span {
      font-size: 600;
      font-size: 20px;
    }
  }

  img {
    position: absolute;
    right: 37px;
    top: 21px;
  }
`;
