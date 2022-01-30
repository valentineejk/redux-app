import {createSlice} from '@reduxjs/toolkit';


const initialValuest={name: "",email: "",age: 0};

export const userSlice=createSlice({
    name: "user",
    initialState: {value: initialValuest},
    reducers: {
        login: (state,action) => {
            state.value=action.payload;
        },
        logout: (state) => {
            state.value=initialValuest;
        },
    },


})

export const {login,logout}=userSlice.actions;

// const User=() => {
//     return <div></div>;
// };

export default userSlice.reducer;

