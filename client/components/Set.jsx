import React, { Component } from 'react';
import { render } from "react-dom";
import '../scss/containerStyles.scss'

class Set extends Component {
    constructor(props){
        super(props)
    }

render() {
    return (
        <div>
           <form>
            <label>How Long is Your Set?
                <input id='setTimer' type="text"></input>
                <button id='vibes'>Vibes</button>
            </label>
           </form>
        </div>
        );
    }
}

export default Set;