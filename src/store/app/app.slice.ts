import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';

export interface AppState {
  mode: 'light' | 'dark';
}

export const initialState: AppState = {
  mode: 'light',
};

export const AppSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleTheme} = AppSlice.actions;

export default AppSlice.reducer;
