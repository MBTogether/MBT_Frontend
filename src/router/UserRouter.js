import React from 'react';
import { Route, Routes } from "react-router-dom";
import Test from '../components/test/Test';
import Search from '../components/search/search';


const UserRouter = () => {
    return (
        <Routes>
            <Route path="/test" element={<Test/>} />  {/* 컴포넌트 이렇게 이용 해주세요 */}
            <Route path="/search" element={<Search />} />
        </Routes>
    );
};

export default UserRouter;
