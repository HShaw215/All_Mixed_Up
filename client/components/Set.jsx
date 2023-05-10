// import React, { Component } from 'react';
// import { render } from "react-dom";
import React, { useState, useEffect } from 'react';
import '../scss/containerStyles.scss'

function Set () {
    
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

export default Set;