import React from 'react';
import DashboardContainer from './components/DashboardContainer.jsx';
import LoginContainer from './components/loginContainer/LoginContainer.jsx'
import { Route, Routes } from 'react-router-dom';

const App = () => (
    <Routes>
        <Route path='/' element={<LoginContainer />} />
        <Route path='/main' element={<DashboardContainer />} />
    </Routes>
);

export default App;