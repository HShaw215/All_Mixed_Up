import React, { useState } from 'react';
import '../../scss/containerStyles.scss'
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks.js'
import { setUserID } from '../../store/appSlice';

function LoginContainer() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userID = useAppSelector((state) => state.app.userID);
    const status = false;

    const loginSubmit = async (username, password) => {
        console.log('login form submitting');
        // dispatch(setUserID(username));
        // fetch('/api/login', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({username, password})
        // }).then(response => status = response)
        // if (status) navigate('/main')
        // else alert('Invalid Username or Password')

        // console.log(username, password)
        // console.log('userID:', userID)

        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    };
    
    return (
        <div className='box'>
            <input className='loginForm' id='username' placeholder='Username' onChange = {e => setUsername(e.target.value)}></input>
            <input className='loginForm' id='password' type='password' placeholder='Password' onChange = {e => setPassword(e.target.value)}></input>
           <button type='submit' id='loginButton' onClick = {() => loginSubmit(username, password)} >Submit</button>
           <div className="createAccount">
            {/* <Nav.Link as={Link} to="/createAccount">
                Create an account
            </Nav.Link> */}
            </div>
        </div>
    );
}

export default LoginContainer;
