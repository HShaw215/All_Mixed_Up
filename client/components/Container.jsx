import React, { Component } from 'react';
import { render } from "react-dom";
import '../scss/containerStyles.scss'

class Container extends Component {
    constructor(props){
        super(props)
    }

    //need to create a loop to check how many items exist in the database, and create an element for each one of those songs
render() {
    return (
        <div class="container">

        </div>
        );
    }
}


export default Container;