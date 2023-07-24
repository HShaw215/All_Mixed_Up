import React from 'react';
import '../../scss/containerStyles.scss'
import { useAppDispatch, useAppSelector } from '../../store/hooks.js'

function LoginContainer() {

    const dispatch = useAppDispatch();
    
    return (
        <div className='box'>
            <input placeholder='Username'></input>
            <input placeholder='Password'></input>
           <button type='submit'></button>
        </div>
    );
}

export default LoginContainer;
