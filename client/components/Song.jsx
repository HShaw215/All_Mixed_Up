import React, { Component } from 'react';
import { render } from "react-dom";
import '../scss/containerStyles.scss';


class Song extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
              <p>Name: {this.props.song.name}</p>
              <p>Key: {this.props.song.key}</p>
              <p>Length: {this.props.length}</p>
            </div>
            );
        }
}







export default Song;