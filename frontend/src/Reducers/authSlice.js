import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    session: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
            state.user = "Juan";
        },
        init(state){
            state.session = 1;
        },
        logout(state){
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const {login, logout, init} = authSlice.actions;
export default authSlice.reducer;