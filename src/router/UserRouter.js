import React from "react";
import { Route, Routes } from "react-router-dom";
import Test from "../components/test/Test";
import MyPage from "../components/myPage/MyPage";
import Main from '../components/main/main'
import Admin from "../components/admin/Admin";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />{" "}
      {/* 컴포넌트 이렇게 이용 해주세요 */}
      <Route path="/my-page" element={<MyPage />} />{" "}
      <Route path="/main" element={<Main/>} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
            
      
};

export default UserRouter;
