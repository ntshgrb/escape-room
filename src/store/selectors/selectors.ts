import {createSelector} from 'reselect';
import { Quest } from '../../types/quest';
import { State } from '../../types/state';
import { QuestTypes } from '../../const';

export const getQuestByType = (questType: string) => createSelector(
  [() => questType, (state: State) => state.QUESTS.questsList],
  (questType: string, quests: Quest[]) => {
    if (questType === QuestTypes.All) {
      return quests;
    }
    return quests.filter((quest) => quest.type === questType);
  },
);
