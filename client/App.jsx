import React from 'react';
import MainContainer from './components/MainContainer.jsx';
import LoginContainer from './components/loginContainer/loginContainer.jsx';
import SignUpContainer from './components/loginContainer/SignUpContainer.jsx'
import { Route, Routes } from 'react-router-dom';

const App = () => (
    <Routes>
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/signup' element={<SignUpContainer />} />
        <Route path='/' element={<MainContainer />} />
    </Routes>
);

//reassign path of MainContainer to '/main' once login functionality is complete

export default App;