import React from "react";
import * as S from "./styles";
import Header from '../header/Header';

const Main = () => {
    const mbti = [];
    const Characteristics = [];
    return (
    <>
        <Header />
      <S.ListBackground>
          <div>
              <S.ListTop>
                  <span className="mbti">mbti</span>
                  <span className="characteristics">: 모험을 즐기는 사업가</span>
              </S.ListTop>
            <S.ListBottom>
                <span className="introduce">설명 설명 설명</span>
            </S.ListBottom>
          </div>
      </S.ListBackground>
    </>
  );
};

export default Main;
