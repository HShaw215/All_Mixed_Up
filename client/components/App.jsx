import React, { Component } from 'react';
import { render } from "react-dom";
import Entry from './Entry.jsx';
import Container from './Container.jsx';
import Set from './Set.jsx'
import '../scss/containerStyles.scss'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            setList : null
        };
    }

    componentDidMount() {
        //send a get request to the songs endpoint to get all the songs in the database
        fetch('/songs')
          .then(response => response.json())
          .then(setList => this.setState({setList}));
      }
       //need to create a loop to check how many items exist in the database, and create an element for each one of those songs

    //idea for render is to have app render the input fields for entering songs into the playlist
    //then have a seperate entry field for song entry that will pull random songs when submitted
    //once component mounts, have container display a box filled with all input songs from database
render() {
    // if (!this.state.setList) return null;
    return (
        <div class="primary">
            <div class="entryBox">
            <Entry />
            </div>
            <div class='setBox'>
            <Set />
            </div>
            <div class='containerBox'>
            {/* <Container setList ={this.state.setList}/> */}
            </div>
        </div>
        );
    }
}




export default App;
