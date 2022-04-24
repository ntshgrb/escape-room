import { Quest } from "types/quest"
import { createSlice } from '@reduxjs/toolkit';
import { NameSpaces } from "const";

type InitialState = {
  detailedQuest: Quest | null,
}

const initialState: InitialState = {
  detailedQuest: null,
}

export const detailedQuest = createSlice({
  name: NameSpaces.DetailedQuest,
  initialState,
  reducers: {
    loadDetailedQuest: (state, action) => {
      state.detailedQuest = action.payload;
    },
  },
});

export const { loadDetailedQuest } = detailedQuest.actions;
