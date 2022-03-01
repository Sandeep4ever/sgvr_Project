import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../src/Pages/LoginPage/Sgvrlogin';

const Loginroutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default Loginroutes;