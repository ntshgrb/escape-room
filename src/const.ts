import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { QuestData } from './types/quests-data';


export enum AppRoute {
  Root = '/',
  Quest = '/quest',
  Contacts = '/contacts',
  NotFound = '/notfound',
}

export const questsData: QuestData[] = [
  {
    title: 'Все квесты',
    icon: IconAllQuests,
    identifier: 'all',
  },
  {
    title: 'Приключения',
    icon: IconAdventures,
    identifier: 'adventures',
  },
  {
    title: 'Ужасы',
    icon: IconHorrors,
    identifier: 'horrors',
  },
  {
    title: 'Мистика',
    icon: IconMystic,
    identifier: 'mystic',
  },
  {
    title: 'Детектив',
    icon: IconDetective,
    identifier: 'detective',
  },
  {
    title: 'Sci-fi',
    icon: IconScifi,
    identifier: 'scifi',
  },
];
