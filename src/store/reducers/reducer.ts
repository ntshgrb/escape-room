import { combineReducers } from '@reduxjs/toolkit';
import { quests } from './quests';
import { detailedQuest } from './detailed-quest';
import { NameSpaces } from 'const';

const reducer = combineReducers({
  [NameSpaces.Quests]: quests.reducer,
  [NameSpaces.DetailedQuest]: detailedQuest.reducer,
});

export { reducer };
