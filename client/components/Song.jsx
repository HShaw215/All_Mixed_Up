// import React, { Component } from 'react';
// import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import '../scss/containerStyles.scss';


function Song(props) {

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
        </div>
    );
}








export default Song;