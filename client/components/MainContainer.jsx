import React from 'react';
import Entry from './Entry.jsx';
import Container from './Container.jsx';
import Set from './Set.jsx'
import '../scss/containerStyles.scss'
import { useAppDispatch, useAppSelector } from '../store/hooks.js'
import { setSetList } from '../store/appSlice.js'

function MainContainer() {

    const dispatch = useAppDispatch();
    const setList = useAppSelector((state) => state.app.setList)

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
    
    return (
        <div className="primary">
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
    );
}

export default MainContainer;
