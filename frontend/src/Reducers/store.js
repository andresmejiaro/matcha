import {configureStore} from "@reduxjs/toolkit";
import authReducer from './authSlice'
import signupReducer from './signupSlice'
import signinReducer from './signinSlice'


export const store = configureStore(
    {reducer:{
        auth: authReducer,
        signup: signupReducer,
        signin: signinReducer,
    }, });



