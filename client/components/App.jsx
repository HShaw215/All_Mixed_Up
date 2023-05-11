// import React, { Component } from 'react';
// import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import Entry from './Entry.jsx';
import Container from './Container.jsx';
import Set from './Set.jsx'
import '../scss/containerStyles.scss'

function App() {

    //idea for render is to have app render the input fields for entering songs into the playlist
    //then have a seperate entry field for song entry that will pull random songs when submitted
    //once component mounts, have container display a box filled with all input songs from database
    const [setList, setSetList] = useState([])

    // //how do we replace component did mount with useEffect for hooks?

    // // //only have pull all songs when set list is an empty array
    // if (setList.length === 0){
    // //  useEffect(() => {
    //      console.log('App mounted')
    //      //send a get request to the songs endpoint to get all the songs in the database
    //      fetch('/songs')
    //        .then(response => response.json())
    //        .then(setList => setSetList(setList))
    //        .catch((err) => console.log(err))
    // //    }, []);
    // }

      //only have pull all songs when set list is an empty array
        if (setList.length === 0){
            //  useEffect(() => {
                 console.log('App mounted')
                 console.log(setList)
                 //send a get request to the songs endpoint to get all the songs in the database
                 fetch('/songs')
                   .then(response => response.json())
                   .then(setList => {
                    console.log('fetched from database', setList)
                    setSetList(setList)
                   })
                   .catch((err) => console.log(err))
            //    }, []);
            }

    // const handleSubmit = (timer) => {
    //         // console.log(timer)
    //             fetch('/time', {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify({timer})
    //         })
    //         .then(response => response.json())
    //         .then(setList => setSetList(setList))
    //         .catch((err) => console.log(err))
    //     };

        const updateState = (newPlaylist) => {
            setSetList(newPlaylist);
        }

    // if (!this.state.setList) return null;
    return (
        <div class="primary">
            <div class="entryBox">
            <Entry />
            </div>
            <div class='setBox'>
            <Set updateState={updateState}/>
            </div>
            <div class='containerBox'>
            <Container setList={setList} updateState={updateState}/>
            </div>
        </div>
        );
}




export default App;
