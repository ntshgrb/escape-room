import { NameSpaces } from '../../const';
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  message: string,
}

const initialState: InitialState = {
  message: '',
};

export const utility = createSlice({
  name: NameSpaces.Utility,
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = utility.actions;
