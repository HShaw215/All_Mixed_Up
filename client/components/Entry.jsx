// import React, { Component } from 'react';
import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import '../scss/containerStyles.scss'
import { useAppDispatch, useAppSelector } from '../store/hooks.js'
import { setSetList } from '../store/appSlice.js'

function Entry() {
    const [name, setName] = useState('');
    const [key, setKey] = useState('');
    const [length, setLength] = useState('');

    const dispatch = useAppDispatch();

    const handleSubmit = (name, key, length) => {
        console.log('handle is running')
            fetch('/api/songs', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, key, length})
        }).then(response => response.json())
        .then(setList => dispatch(setSetList(setList)))
        .catch((err) => console.log(err))  
        // console.log(setList)
    }

    return (
        <div>
           <form>
            <label>Enter Song Name:
                <input id='songInput' type="text" placeholder="Best Song" onChange = {e => setName(e.target.value)}></input>
            </label>
            <label>Enter Key:
                <input id='keyInput' type="text" placeholder="1A" onChange = {e => setKey(e.target.value)}></input>
            </label>
            <label>Enter Length of Song:
                <input id='lengthInput' type="text" placeholder="3" onChange = {e => setLength(e.target.value)}></input>
            </label>
            <button id='add' type='button' onClick={() => handleSubmit(name, key, length)}>Add To Playlist</button>
           </form>
        </div>
        );
    }


//need to pull info from all text boxes when then add button is pressed and put into a request body. That request body then has to be sent
//as a post request to the / route


export default Entry;