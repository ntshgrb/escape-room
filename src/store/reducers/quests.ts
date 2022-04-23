import { Quest } from '../../types/quest';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';


type InitialState = {
  questsList: Quest[],
};

const initialState: InitialState = {
  questsList: [],
}

export const quests = createSlice({
  name: NameSpaces.Quests,
  initialState,
  reducers: {
    loadQuests: (state, action) => {
      state.questsList = action.payload;
    },
  },
});

export const { loadQuests } = quests.actions;
