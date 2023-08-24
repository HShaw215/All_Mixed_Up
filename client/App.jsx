import React from 'react';
import MainContainer from './components/MainContainer.jsx';
import LoginContainer from './components/loginContainer/loginContainer.jsx';
import SignUpContainer from './components/loginContainer/SignUpContainer.jsx'
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from './store/hooks.js';

export default function App(){
    const loggedIn = useAppSelector((state) => state.app.loggedIn);
    
    return loggedIn ? (
        <>
            <Routes>
            <Route path='/main' element={<MainContainer />} />
            </Routes>
        </>
    ) : (
        <>
            <Routes>
            <Route path='/' element={<LoginContainer />} />
            <Route path='/signup' element={<SignUpContainer />} />
            <Route path='/main' element={<MainContainer />} />
            </Routes>
        </>
    );
};

