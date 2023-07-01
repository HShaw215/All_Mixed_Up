import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userID: 'none',
    setList: [],
    timer: 0,
    songName: 'none',
    songKey: 'none'
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setUserID: (state, action) => {
            state.user = action.payload;
        },
        setSetList: (state, action) => {
            state.user = action.payload;
        },
        setTimer: (state, action) => {
            state.user = action.payload;
        },
        setSongName: (state, action) => {
            state.user = action.payload;
        },
        setSongKey: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const {
    setUserID,
    setSetList,
    setTimer,
    setSongName,
    setSongKey
} = appSlice.actions;

export default appSlice.reducer;