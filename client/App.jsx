import React from 'react';
import MainContainer from './components/MainContainer.jsx';
import LoginContainer from './components/loginContainer/loginContainer.jsx'
import { Route, Routes } from 'react-router-dom';

const App = () => (
    <Routes>
        <Route path='/' element={<LoginContainer />} />
        <Route path='/main' element={<MainContainer />} />
    </Routes>
);

export default App;