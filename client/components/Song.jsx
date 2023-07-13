// import React, { Component } from 'react';
// import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import '../scss/containerStyles.scss';


function Song(props) {

    return (
        <div class={props.song.key}>
            <p>
                <span class="names">Name: </span>
                <span class="songName">{props.song.name}</span>
            </p>
            <p>
                <span class="keys">Key: </span> 
                <span class="songKey">{props.song.key}</span>
            </p>
            <p>
                <span class="lengths">Length: </span>
                <span class="songLength">{props.song.length}</span>
            </p>
            <button class="delete">
                X
            </button>
        </div>
    );
}








export default Song;