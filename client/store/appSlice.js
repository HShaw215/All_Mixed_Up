import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userID: 'none',
    setList: [],
    timer: 0,
    songName: 'none',
    songKey: 'none',
    loggedIn = false;
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setUserID: (state, action) => {
            state.userID = action.payload;
        },
        setSetList: (state, action) => {
            state.setList = action.payload;
        },
        setTimer: (state, action) => {
            state.timer = action.payload;
        },
        setSongName: (state, action) => {
            state.songName = action.payload;
        },
        setSongKey: (state, action) => {
            state.songKey = action.payload;
        },
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload;
        }
    },
});

export const {
    setUserID,
    setSetList,
    setTimer,
    setSongName,
    setSongKey,
    setLoggedIn.
} = appSlice.actions;

export default appSlice.reducer;