import React, { useState } from 'react';
import '../../scss/containerStyles.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks.js'

function LoginContainer() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();
    
    return (
        <div className='box'>
            <input placeholder='Username'  onChange = {e => setUsername(e.target.value)}></input>
            <input placeholder='Password'  onChange = {e => setPassword(e.target.value)}></input>
           <button type='submit' id='loginButton' onClick = {() => console.log('Logging In', username, password)} >Submit</button>
        </div>
    );
}

export default LoginContainer;
