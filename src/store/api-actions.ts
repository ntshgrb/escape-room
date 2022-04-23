import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { Quest } from '../types/quest';
import { loadQuests } from './reducers/quests';
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
