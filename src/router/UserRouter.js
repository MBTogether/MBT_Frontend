import React from 'react';
import { Route, Routes } from "react-router-dom";
import Test from '../components/test/Test';


const UserRouter = () => {
    return (
        <Routes>
            <Route path="/test" element={<Test/>} />  {/* 컴포넌트 이렇게 이용 해주세요 */}
        </Routes>
    );
};

export default UserRouter;
