import React, { Component } from 'react';
import { render } from "react-dom";
import Entry from './Entry.jsx';
import Container from './Container.jsx';
import Set from './Set.jsx'
import '../scss/containerStyles.scss'

class App extends Component {
    constructor(props){
        super(props)
    }

    //idea for render is to have app render the input fields for entering songs into the playlist
    //then have a seperate entry field for song entry that will pull random songs when submitted
    //once component mounts, have container display a box filled with all input songs from database
render() {
    return (
        <div class="primary">
            <div class="entryBox">
            <Entry />
            </div>
            <div class='setBox'>
            <Set />
            </div>
            <div class='containerBox'>
            <Container />
            </div>
        </div>
        );
    }
}




export default App;
