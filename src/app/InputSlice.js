import { createSlice } from '@reduxjs/toolkit'

export interface InputState {
  value: string
}

const initialState: InputState = {
  names: [],
}

export const inputState = createSlice({
  name: 'names',
  initialState,
  reducers: {
    addText: (state, action) => {
      state.names.push(action.payload);
    },
  },
})

export const { addText } = inputState.actions;

export default inputState.reducer;