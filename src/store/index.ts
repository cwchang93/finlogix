import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface IInitState {
  auth?: boolean;
  user?: object[] | null;
  webinarLists?: object[] | null;
}

export interface IActionTypes {
  login: string;
  logout: string;
  setWebinarLists: string;
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
      state.user = null;
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
