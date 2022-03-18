import React from 'react';
import { Route, Routes } from "react-router-dom";
import Test from '../components/test/Test';
import Main from '../components/main/main';

const UserRouter = () => {
    return (
        <Routes>
            <Route path="/test" element={<Test/>} />  {/* 컴포넌트 이렇게 이용 해주세요 */}
            <Route path="/" element={<Main/>} />
        </Routes>
    );
};

export default UserRouter;
