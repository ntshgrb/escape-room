import { combineReducers } from '@reduxjs/toolkit';
import { quests } from './quests';
import { NameSpaces } from 'const';

const reducer = combineReducers({
  [NameSpaces.quests]: quests.reducer,
});

export { reducer };
