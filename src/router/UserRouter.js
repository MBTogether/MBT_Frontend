import React from 'react';
import { Route, Routes } from "react-router-dom";
import Test from '../components/test/Test';
import Main from '../components/main/main'
import Search from '../components/search/search';
import Mbti from '../components/mbti/mbti';

const UserRouter = () => {
    return (
        <Routes>
            <Route path="/test" element={<Test/>} />  {/* 컴포넌트 이렇게 이용 해주세요 */}
            <Route path="/main" element={<Main/>} />
        </Routes>
    );
};

export default UserRouter;
