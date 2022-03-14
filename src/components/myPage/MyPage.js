import React from "react";
import * as S from "./style";
import Header from "../common/header/Header";
import ProFileWrapper from "./profileWrapper/ProFileWrapper";
import ListConatiner from "./myPageList/ListContainer";
import PasswordModal from "./passwordModal/PasswordModal";

const MyPage = () => {
  return (
    <>
      <PasswordModal isOpen={true} />
      <Header />
      <ProFileWrapper />
      <S.listWrapper>
        <ListConatiner title="좋아요를 단 게시물" />
        <ListConatiner title="내가 작성한 게시물" />
      </S.listWrapper>
    </>
  );
};

export default MyPage;
