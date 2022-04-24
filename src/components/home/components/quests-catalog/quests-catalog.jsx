import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { questsData, QuestTypes, questLevel, AppRoute } from '../../../../const';
import { useState } from 'react';
import { useAppSelector } from 'hooks';
import { getQuestByType } from '../../../../store/selectors/selectors';

const QuestsCatalog = () => {
  const [activeQuestType, setActiveQuestType] = useState(QuestTypes.All);
  const questsList = useAppSelector(getQuestByType(activeQuestType));

  const onButtonClick = (evt) => {
    setActiveQuestType(evt.currentTarget.dataset.identifier);
  }

  return (
    <>
      <S.Tabs>
        {
          questsData.map( (questItem) => (
            <S.TabItem key={questItem.identifier}>
            <S.TabBtn
              isActive={activeQuestType === questItem.identifier}
              data-identifier={questItem.identifier}
              onClick={onButtonClick}
            >
              <questItem.icon />
              <S.TabTitle>{questItem.title}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
          ))
        }
      </S.Tabs>

      <S.QuestsList>
        {
          questsList.map((quest) => (
            <S.QuestItem key={quest.id}>
              <S.QuestItemLink to={`${AppRoute.QuestDetalied}/${quest.id}`}>
                <S.Quest>
                  <S.QuestImage
                    src={quest.previewImg}
                    width="344"
                    height="232"
                    alt={`квест ${quest.title}`}
                  />

                  <S.QuestContent>
                    <S.QuestTitle>{quest.title}</S.QuestTitle>

                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson />
                        {`${quest.peopleCount[0]}–${quest.peopleCount[1]} чел`}
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle />
                        {questLevel[quest.level]}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
          ))
        }
      </S.QuestsList>
    </>
  );
}

export default QuestsCatalog;
