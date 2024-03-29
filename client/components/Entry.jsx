import React, { useState } from 'react';
import '../scss/containerStyles.scss'
import { useAppDispatch } from '../store/hooks.js'
import { setSetList } from '../store/appSlice.js'

function Entry() {
    const [name, setName] = useState('');
    const [key, setKey] = useState('');
    const [length, setLength] = useState('');

    const dispatch = useAppDispatch();

    //declare function songSubmit that accepts name, key, and length to send post request for song creation in database
    const songSubmit = (name, key, length) => {
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

        document.getElementById('songInput').value = '';
        document.getElementById('keyInput').value = '';
        document.getElementById('lengthInput').value = '';
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
            <button id='add' type='button' onClick={() => songSubmit(name, key, length)}>Add To Playlist</button>
           </form>
        </div>
        );
    }

export default Entry;