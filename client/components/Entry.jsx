// import React, { Component } from 'react';
import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import '../scss/containerStyles.scss'

function Entry() {

    return (
        <div>
           <form>
            <label>Enter Song Name:
                <input id='song' type="text"></input>
            </label>
            <label>Enter Key:
                <input id='key' type="text"></input>
            </label>
            <label>Enter Length of Song:
                <input id='bpm' type="text"></input>
            </label>
            <button id='add'>Add To Playlist</button>
           </form>
        </div>
        );
    }

//need to pull info from all text boxes when then add button is pressed and put into a request body. That request body then has to be sent
//as a post request to the / route


export default Entry;