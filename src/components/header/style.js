import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #5c5fbf;
  position: fix;
  top: 0;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  img {
    width: 120px;
    height: 50px;
    cursor: pointer;
    padding-left: 80px;
  }
`;
