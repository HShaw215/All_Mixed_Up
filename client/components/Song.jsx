import React from 'react';
import '../scss/containerStyles.scss';
import { useAppDispatch } from '../store/hooks.js'
import { setSetList } from '../store/appSlice.js'

function Song(props) {

    const dispatch = useAppDispatch();

    //declare function deleteSubmit that accepts an input name to be sent in a post request to delete song from the database
    const deleteSubmit = (name) => {
        console.log('handleDelete is running')
            fetch('/api/songs/delete', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name})
        }).then(response => response.json())
        .then(setList => dispatch(setSetList(setList)))
        .catch((err) => console.log(err))  
    }



    return (
        <div className={props.song.key}>
            <p>
                <span className="names">Name: </span>
                <span className="songName">{props.song.name}</span>
            </p>
            <p>
                <span className="keys">Key: </span> 
                <span className="songKey">{props.song.key}</span>
            </p>
            <p>
                <span className="lengths">Length: </span>
                <span className="songLength">{props.song.length}</span>
            </p>
            <button className="delete" onClick={() => deleteSubmit(props.song.name)}>
                X
            </button>
        </div>
    );
}

export default Song;