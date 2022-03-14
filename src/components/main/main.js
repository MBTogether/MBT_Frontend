import React from "react";
import Header from "../common/header/Header";
import TopList from "./topList/topList";
import Footer from "../common/footer/Footer";
import Section from "./section/section";

const Main = () => {
  return (
    <>
      <Header />
      <TopList />
      <Section />
      <Footer />
    </>
  );
};

export default Main;
