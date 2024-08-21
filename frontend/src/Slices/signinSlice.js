import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tried: false,
    error:"",
};

const signinSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        wrongCredential(state){
            state.tried = true;
            state.error = "Wrong Credentials";
        },
        noResponse(state){
            state.tried = true;
            state.error = "Error retrieving info";
        },
        resetSignin(state){
            return initialState;    
        }
        
    },
});

export const {wrongCredential,  resetSignin, noResponse} = signinSlice.actions;
export default signinSlice.reducer;