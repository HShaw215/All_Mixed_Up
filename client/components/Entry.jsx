// import React, { Component } from 'react';
import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import '../scss/containerStyles.scss'

function Entry() {
    const [name, setName] = useState('');
    const [key, setKey] = useState('');
    const [length, setLength] = useState('');
 
    // useEffect((entry) => {
    //     console.log(entry)
    //     console.log('Entry submitted')
    //      //send a get request to the songs endpoint to get all the songs in the database
    //      fetch('/', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(entry)
        //  })
    //    })
    const handleSubmit = (name, key, length) => {
        // console.log(name, key, length)
            fetch('/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, key, length})
        });
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
                <input id='lengthInput' type="text" placeholder="3.2" onChange = {e => setLength(e.target.value)}></input>
            </label>
            <button id='add' type="submit" onClick={handleSubmit(name, key, length)}>Add To Playlist</button>
           </form>
        </div>
        );
    }

    // setEntry(songInput.current.value, keyInput.current.value, lengthInput.current.value)}

//need to pull info from all text boxes when then add button is pressed and put into a request body. That request body then has to be sent
//as a post request to the / route


export default Entry;