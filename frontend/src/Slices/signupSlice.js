import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tried: false,
    success:false,
    passwordsDontMatch: false,
    couldNotCreate: false,
    couldNotCreateReason: ""
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        checkcreationmail(state){
            state.tried = true;
            state.success = true;
        },
        couldNotCreate(state,action){
            state.tried = true;
            state.couldNotCreate = true;
            state.couldNotCreateReason = action.payload;
        },
        resetSignup(state){
            return initialState;    
        }
        
    },
});

export const {checkcreationmail, couldNotCreate, resetSignup} = signupSlice.actions;
export default signupSlice.reducer;