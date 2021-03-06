import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { QuestData } from './types/quests-data';


export enum AppRoute {
  Root = '/',
  Quest = '/detailed-quest/:id',
  QuestDetalied = '/detailed-quest',
  Contacts = '/contacts',
  NotFound = '/notfound',
}

export enum APIRoute {
  Quests = '/quests',
  Orders = '/orders',
}

export const navigationList = [
  {
    title: 'Квесты',
    path: AppRoute.Root,
  },
  {
    title: 'Новичкам',
    path: '#',
  },
  {
    title: 'Отзывы',
    path: '#',
  },
  {
    title: 'Акции',
    path: '#',
  },
  {
    title: 'Контакты',
    path: AppRoute.Contacts,
  }
];

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
    identifier: 'horror',
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
    identifier: 'sci-fi',
  },
];

export enum NameSpaces {
  Quests = 'QUESTS',
  DetailedQuest = 'DETAILED_QUEST',
  Utility = 'UTILITY',
}

export const DEFAULT_QUEST_TYPE = 'all';

export enum QuestTypes {
  All = 'all',
  Adventures = 'adventures',
  Horrors = 'horrors',
  Mystic = 'mystic',
  Detective = 'detective',
  Scifi = 'scifi',
}

export const questLevel = new Map([
  ['hard', 'сложный'],
  ['medium', 'средний'],
  ['easy', 'легкий'],
]);

export const questDuration = new Map([
  ['60', '60 мин'],
  ['90', '90 мин'],
  ['120', '120 мин'],
]);

export const PHONE_NUMBERS_COUNT = 10;

export const address = {
  name: 'Санкт-Петербург',
  latitude: 59.968137,
  longitude: 30.316272,
  zoom: 16,
}

export const DEFAULT_PIN = 'img/pin.svg';

export const iconSize = {
  Width: 47,
  Height: 61,
};

export const TIMEOUT_SHOW_ERROR = 2000;
