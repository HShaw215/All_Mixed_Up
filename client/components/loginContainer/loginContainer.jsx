import React, { useState } from 'react';
import '../../scss/containerStyles.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks.js'

function LoginContainer() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();
    const userId = useAppSelector((state) => state.app.userId)
    
    return (
        <div className='box'>
            <input class='loginForm'placeholder='Username'  onChange = {e => setUsername(e.target.value)}></input>
            <input class='loginForm' placeholder='Password'  onChange = {e => setPassword(e.target.value)}></input>
           <button type='submit' id='loginButton' onClick = {() => console.log('Logging In', username, password)} >Submit</button>
        </div>
    );
}

export default LoginContainer;
