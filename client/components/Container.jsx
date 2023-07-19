import React from 'react';
import '../scss/containerStyles.scss';
import Song from './Song.jsx';
import { useAppSelector } from '../store/hooks.js';

function Container() {

    const setList = useAppSelector((state) => state.app.setList)

    //declare variable songsToDisplay and assign to an empty array
    const songsToDisplay = [];
    //iterate through each song in setList
    for (let i = 0; i < setList.length; i++){
        //push a new Song element for each song to songsToDisplay array
        songsToDisplay.push(<Song key={i} song={setList[i]}/>)
    }

    return (
        <div className="container">
            {songsToDisplay}
        </div>
    );
}


export default Container;