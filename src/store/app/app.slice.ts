import {createSlice} from '@reduxjs/toolkit';
// import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  mode: 'light' | 'dark';
}

const initialState: CounterState = {
  mode: 'light',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleTheme} = counterSlice.actions;

export default counterSlice.reducer;
