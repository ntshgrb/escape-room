import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { Quest } from '../types/quest';
import { loadQuests } from './reducers/quests';
import { loadDetailedQuest } from './reducers/detailed-quest';
import { APIRoute } from 'const';

export const fetchQuestsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'quests/loadQuests',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Quest[]>(APIRoute.Quests);
      dispatch(loadQuests(data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchDetailedQuestAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'detailed-quest/loadDetailedQuest',
  async (questId, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Quest>(`${APIRoute.Quests}/${questId}`);
      dispatch(loadDetailedQuest(data));
    } catch (error) {
      console.log(error);
    }
  }
);
