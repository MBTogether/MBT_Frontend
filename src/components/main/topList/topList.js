import React, { useState } from "react";
import * as S from "./styles";
import { MainMBTIData } from "../../../constance/main/index";

const TopList = () => {
  const [data, setData] = useState(MainMBTIData);
  const [count, setCount] = useState(0);
  const temp = MainMBTIData;

  const onLeftClick = () => {
    console.log("Click left button!");
    count > 0 ? setCount(count - 1) : setCount(0); //
    console.log("count : " + count);
    setData(temp.slice(count, count + 7));
    count === 0 ? console.log("끝에 도달함") : console.log("리스트 이동");
  };

  const onRightClick = () => {
    console.log("Click right button!");
    count < 9 ? setCount(count + 1) : setCount(9); // 9 이상이 되면 9로 값을 고정.
    console.log("count : " + count);
    setData(temp.slice(count, count + 7));
    count === 9 ? console.log("끝에 도달함") : console.log("리스트 이동");
  };

  return (
    <S.ListBackground>
      <S.LeftArrow direction="prev" onClick={onLeftClick}>
        &lt;
      </S.LeftArrow>
      {data.map((value, page) => {
        if (page < 7) {
          return (
            <div className="mbtiList" key={page}>
              <S.MBTIImg
                src={require(`../../../assets/image/${value.mbti}.svg`)}
                alt="MBTICharacter"
              />
              <S.ListTop>
                <span className="mbti">{value.mbti}</span>
                <span className="characteristics">
                  : {value.characteristic}
                </span>
              </S.ListTop>
              <S.ListBottom>
                <span className="introduce">{value.introduce}</span>
              </S.ListBottom>
            </div>
          );
        }
      })}
      <S.RightArrow direction="next" onClick={onRightClick}>
        &gt;
      </S.RightArrow>
    </S.ListBackground>
  );
};

export default TopList;
