import React, { Component } from 'react';
import { render } from "react-dom";
import '../scss/containerStyles.scss'

class Entry extends Component {
    constructor(props){
        super(props)
    }

render() {
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
}




export default Entry;