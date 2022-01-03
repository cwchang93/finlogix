import { createSlice, configureStore } from '@reduxjs/toolkit';

export interface IInitState {
    initRender?: boolean;
    auth?: boolean;
    user?: any;
}


const initialState: IInitState = {
    initRender: false,
    auth: false,
    user: null,
    // webnarList:null
}

const totalSlice = createSlice({
    name: 'total',
    initialState,
    reducers: {
        init(state) {
            state.initRender = true;
        },
        login(state, action) {
            state.auth = true;
            state.user = action.payload;
        },
        logout(state) {
            state.auth = false;
        },
    }
});

const store = configureStore({
    reducer: totalSlice.reducer

});

export const totalActions = totalSlice.actions;

export default store;