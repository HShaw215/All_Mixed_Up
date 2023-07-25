import React from 'react';
import '../../scss/containerStyles.scss'
import { useAppDispatch } from '../../store/hooks.js'
import LoginContainer from './LoginContainer.jsx'
function LoginPage() {

    const dispatch = useAppDispatch();
    
    return (
        <div>
            <LoginContainer />
        </div>
    );
}

export default LoginPage;
