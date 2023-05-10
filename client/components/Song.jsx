// import React, { Component } from 'react';
// import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import '../scss/containerStyles.scss';


function Song(props) {
    return (
        <div class={props.song.key}>
            <p>Name: {props.song.name}</p>
            <p>Key: {props.song.key}</p>
            <p>Length: {props.song.length}</p>
        </div>
    );
}








export default Song;