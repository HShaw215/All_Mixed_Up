import React, { useState } from 'react';
import '../../scss/containerStyles.scss'
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useAppDispatch, useAppSelector } from '../../store/hooks.js'
import { setUserID } from '../../store/appSlice';

function SignUpContainer() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

     // const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userID = useAppSelector((state) => state.app.userID);
    let status = false;

    const signupSubmit = async (username, password) => {
        console.log('sign up form submitting');
        dispatch(setUserID(username));
        await fetch('/api/user/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        }).then(response => status = response)
        // if (status) navigate('/main')
        // else alert('Username already taken')

        console.log(username, password)
        console.log('userID:', userID)

        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    };
    
    return (
        <div>
            <header className='navBar'>
                <p>All Mixed Up</p>
            </header>
            <div className='box'>
                <input className='loginForm' id='username' placeholder='Username' onChange = {e => setUsername(e.target.value)}></input>
                <input className='loginForm' id='password' type='password' placeholder='Password' onChange = {e => setPassword(e.target.value)}></input>
                <button type='submit' id='loginButton' onClick = {() => signupSubmit(username, password)} >Submit</button>
                <Link className="createAccount" to='/' >Login</Link>
            </div>
        </div>
        
    );
}

export default SignUpContainer;
