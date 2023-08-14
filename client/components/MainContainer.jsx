import React from 'react';
import Entry from './Entry.jsx';
import Container from './Container.jsx';
import Set from './Set.jsx'
import '../scss/containerStyles.scss'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks.js'
import { setLoggedIn, setSetList } from '../store/appSlice.js'

function MainContainer() {

    const dispatch = useAppDispatch();
    const setList = useAppSelector((state) => state.app.setList)
    const navigate = useNavigate();

    //For adding login, will have to move this to when main page renders
    //only have pull all songs when set list is an empty array
    if (setList.length === 0){
         console.log('App mounted')
         //send a get request to the songs endpoint to get all the songs in the database
         fetch('/api/songs')
           .then(response => response.json())
           .then(setList => dispatch(setSetList(setList)))
           .catch((err) => console.log(err))
        console.log(setList)
    };

    const logout = async () => {
        await fetch('/api/user/logout');
        dispatch(setLoggedIn(false));
        navigate('/')
    }
    
    return (
        <div className="primary">
            <nav>
                <button onClick={() => logout()}>Logout</button>
            </nav>
            <div>
                <div className="entryBox">
                <Entry />
                </div>
                <div className='setBox'>
                <Set />
                </div>
                <div className='containerBox'>
                <Container />
                </div>
            </div>
           
        </div>
    );
}

export default MainContainer;
