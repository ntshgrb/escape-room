import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { Quest } from '../types/quest';
import { loadQuests } from './reducers/quests';
import { loadDetailedQuest } from './reducers/detailed-quest';
import { APIRoute, TIMEOUT_SHOW_ERROR } from 'const';
import { OrderData } from 'types/order-data';
import { setMessage } from './reducers/utility';
import { showMessage } from './services/set-message';

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
      dispatch(loadQuests([]));
      showMessage('Ошибка загрузки');
    }
  }
);

export const fetchDetailedQuestAction = createAsyncThunk<void, {questId: number, setLoadingFailed: (value: boolean) => void}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'detailed-quest/loadDetailedQuest',
  async ({questId, setLoadingFailed}, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Quest>(`${APIRoute.Quests}/${questId}`);
      dispatch(loadDetailedQuest(data));
    } catch (error) {
      setLoadingFailed(true);
    }
  }
);

export const sendOrderAction = createAsyncThunk<void, OrderData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'detailed-quest/sendOrder',
  async ({name, peopleCount, phone, isLegal, onSuccess}, {extra: api}) => {
    try {
      const response = await api.post(APIRoute.Orders, {name, peopleCount, phone, isLegal});
      if (response.status === 201) {
        onSuccess();
        showMessage('Заявка отправлена')
      }
    } catch (error) {
      showMessage(`Заявка не отправлена. Ошибка ${error}`)
    }
  },
);

export const clearMessageAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State
}>(
  'detailed-quest/clearError',
  (_arg, {dispatch}) => {
    setTimeout(
      () => dispatch(setMessage('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
