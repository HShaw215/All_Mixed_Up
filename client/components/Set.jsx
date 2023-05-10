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

//idea is that when the vibes button is pressed, it will send a request to the database to essentially sort the database based on the
    //passed in time and criteria I have to define, then update the container. I think the invocation of the button here will have to
    //send a call to an effect in the main app so that the container can be updated after a new setList is rendered