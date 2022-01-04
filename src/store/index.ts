import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface IInitState {
  auth?: boolean;
  user?: any;
  webinarLists?: any;
}

const initialState: IInitState = {
  auth: false,
  user: null,
  webinarLists: null,
};

const totalSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    login(state, action) {
      state.auth = true;
      state.user = action.payload;
    },
    logout(state) {
      state.auth = false;
    },
    setWebinarLists(state, action) {
      state.webinarLists = action.payload;
    },
  },
});

const store = configureStore({
  reducer: totalSlice.reducer,
});

export const totalActions = totalSlice.actions;

export default store;
