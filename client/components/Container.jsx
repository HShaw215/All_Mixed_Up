import React from 'react';
import '../scss/containerStyles.scss';
import Song from './Song.jsx';
import { useAppSelector } from '../store/hooks.js';

function Container() {

    const setList = useAppSelector((state) => state.app.setList)

    const songsToDisplay = [];
    for (let i = 0; i < setList.length; i++){
        songsToDisplay.push(<Song key={i} song={setList[i]}/>)
    }

    return (
        <div className="container">
            {songsToDisplay}
        </div>
    );
}


export default Container;