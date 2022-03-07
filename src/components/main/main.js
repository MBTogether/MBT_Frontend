import React from "react";
import * as S from "./styles";
import Header from "../header/Header";
import { useState } from "react";

const Main = () => {
  const [page, setPage] = useState(7);
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleSwipe(direction) {
    setCurrentIndex((currentIndex) => currentIndex + direction);
  }
  const List = [
    {
      mbti: "ISTJ",
      characteristic: "청렴결백한 논리주의자",
      introduce: "한번 시작한 일은 끝까지 해내는 사람",
    },
    {
      mbti: "ISFJ",
      characteristic: "용감한 수호자",
      introduce: "성실하고 온화하며 협조를 잘하는 사람",
    },
    {
      mbti: "INFJ",
      characteristic: "선의의 옹호자",
      introduce: "사람과 관련된 뛰어난 통찰력을 가지고 있는 사람",
    },
    {
      mbti: "INTJ",
      characteristic: "용의주도한 전략가",
      introduce: "직관력이 뛰어나며 철두철미한 계획을 세우는 전략가",
    },
    {
      mbti: "ISTP",
      characteristic: "만능 재능꾼",
      introduce: "논리적으로 뛰어난 상황 적응력을 가지고 있는 사람",
    },
    {
      mbti: "ISFP",
      characteristic: "호기심 많은 예술가",
      introduce: "따뜻한 감정을 가진 융통성 있는 예술가",
    },
    {
      mbti: "INFP",
      characteristic: "열정적인 중재자",
      introduce: "이상적인 세상을 만들어 가는 사람",
    },
    {
      mbti: "INTP",
      characteristic: "논리적인 사색가",
      introduce: "끊임없이 지식에 목말라하는 사색가",
    },
    {
      mbti: "ESTP",
      characteristic: "모혐을 즐기는 사업가",
      introduce: "친구, 운동, 음식 등 다양한 활동을 선호하는 사람",
    },
    {
      mbti: "ESFP",
      characteristic: "자유로운 영혼의 연예인",
      introduce: "분위기를 고조시키는 우호적 사람",
    },
    {
      mbti: "ENFP",
      characteristic: "재기발랄한 활동가",
      introduce: "열정적으로 새로운 관계를 만드는 사람",
    },
    {
      mbti: "ENTP",
      characteristic: "뜨거운 논쟁을 즐기는 변론가",
      introduce: "풍부한 상상력을 가지고 새로운 것에 도전하는 사람",
    },
    {
      mbti: "ESTJ",
      characteristic: "엄격한 관리자",
      introduce: "사무적, 실용적, 현실적으로 일을 많이하는 사람",
    },
    {
      mbti: "ESFJ",
      characteristic: "사교적인 외교관",
      introduce: "친절과 현실감을 바탕으로 타인에게 봉사하는 사람",
    },
    {
      mbti: "ENFJ",
      characteristic: "정의로운 사회운동가",
      introduce: "타인의 성장을 도모하고 협동하는 사람",
    },
    {
      mbti: "ENTJ",
      characteristic: "대당한 통솔자",
      introduce: "비전을 가지고 사람들을 활력적으로 이끌어가는 사람",
    },
  ]; // dummy data

  const PostList = [
    { title: "제목1", day: "2022.02.27", img: "img1" },
    { title: "제목2", day: "2022.02.26", img: "img2" },
    { title: "제목3", day: "2022.02.25", img: "img3" },
    { title: "제목4", day: "2022.02.24", img: "img4" },
    { title: "제목5", day: "2022.02.23", img: "img5" },
    { title: "제목6", day: "2022.02.22", img: "img6" },
    { title: "제목7", day: "2022.02.21", img: "img7" },
  ];
  let a = 0;
  const onLeft = () => {
    if (a > 0) {
      a--;
      alert(a);
      return;
    } else if (a === 0) {
      a = 16;
      alert(a);
      return;
    } else return;
  };
  const onRight = () => {
    if (a < 16) {
      a++;
      alert(a);
      return;
    } else if (a === 16) {
      a = 0;
      alert(a);
      return;
    } else return;
  };
  const check = (listPage, value) => {
    if (a <= listPage && listPage < page + a) {
      if (a > 0) {
        return (
          <div className="mbtiList" key={listPage}>
            <S.ListTop>
              <span className="mbti">{value.mbti}</span>
              <span className="characteristics">: {value.characteristic}</span>
            </S.ListTop>
            <S.ListBottom>
              <span className="introduce">{value.introduce}</span>
            </S.ListBottom>
          </div>
        );
      }
      return true;
    } else return false;
  };
  return (
    <>
      <Header />
      <S.ListBackground>
        <S.LeftArrow direction="prev" onClick={() => onLeft()}>
          &lt;
        </S.LeftArrow>
        {List.map((value, listPage) => {
            if (listPage < 7) {
              return (
                <div className="mbtiList" key={listPage}>
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
        <S.RightArrow direction="next" onClick={() => onRight()}>
          &gt;
        </S.RightArrow>
      </S.ListBackground>
      <S.Section>
        <S.Post>
          <div className="PostHead">
            <span className="Mbti">ENFP</span>
            <span className="Characteristics">: 특징은 이렇고 저렇고 등등</span>
          </div>
          <div className="ListLine" />
          {PostList.map((list, page) => {
            return (
              <div className="List" key={page}>
                <S.List>
                  <span className="title">{list.title}</span>
                  <span className="date">{list.day}</span>
                  <span className="img">{list.img}</span>
                </S.List>
              </div>
            );
          })}
        </S.Post>
        <S.Post>
          <div className="PostHead">
            <span className="Mbti">NEW</span>
            <span className="Characteristics">: 새로운 게시글</span>
          </div>
          <div className="ListLine" />
          {PostList.map((list, page) => {
            return (
              <div className="List" key={page}>
                <S.List>
                  <span className="title">{list.title}</span>
                  <span className="date">{list.day}</span>
                  <span className="img">{list.img}</span>
                </S.List>
              </div>
            );
          })}
        </S.Post>
        <S.Post>
          <div className="PostHead">
            <span className="Mbti">HOT</span>
            <span className="Characteristics">: 인기있는 게시글</span>
          </div>
          <div className="ListLine" />
          {PostList.map((list, page) => {
            return (
              <div className="List" key={page}>
                <S.List>
                  <span className="title">{list.title}</span>
                  <span className="date">{list.day}</span>
                  <span className="img">{list.img}</span>
                </S.List>
              </div>
            );
          })}
        </S.Post>
      </S.Section>
    </>
  );
};

export default Main;
