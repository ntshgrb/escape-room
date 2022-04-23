import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from './api';
import { reducer } from './reducers/reducer';

const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
