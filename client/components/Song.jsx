// import React, { Component } from 'react';
// import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import '../scss/containerStyles.scss';


function Song() {
    return (
        <div>
            <p>Name: {this.props.song.name}</p>
            <p>Key: {this.props.song.key}</p>
            <p>Length: {this.props.length}</p>
        </div>
    );
}








export default Song;