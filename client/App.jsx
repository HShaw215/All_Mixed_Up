import React, { Component } from 'react';
import { render } from "react-dom";

class App extends Component {
    constructor(props){
        super(props)
    }

render() {
    return (
        <div>
            <h1>All Mixed Up</h1>
        </div>
        );
    }
}




render(<App />, document.querySelector("#root"));
