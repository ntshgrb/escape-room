import { useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchDetailedQuestAction } from '../../store/api-actions';
import { useAppSelector } from 'hooks';
import { questLevel, questsData, questDuration, AppRoute } from '../../const';
import { Redirect } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';


const DetailedQuest = () => {
  type useParamsParams = {
    id: string;
  };

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const [loadingFailed, setLoadingFailed] = useState(false);

  const dispatch = useAppDispatch();
  const param = useParams<useParamsParams>();
  const { detailedQuest } = useAppSelector((state) => state.DETAILED_QUEST);
  const questId = +param.id;

  useEffect(() => {
    if (param.id)
    dispatch(fetchDetailedQuestAction({questId, setLoadingFailed}));
  }, [dispatch, param, questId]);

  if (loadingFailed) {
    return <Redirect to={AppRoute.NotFound} />
  }

  if (detailedQuest === null || detailedQuest.id !== questId) {
    return null;
  }

  const { coverImg, description, duration, level, peopleCount, title, type } = detailedQuest;

  const questTypeData = questsData.find((questData) => questData.identifier === type);
  const questType = questTypeData?.title ? questTypeData.title.toLowerCase() : '';

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onCloseBtnClick = () => {
    setIsBookingModalOpened(false);
  };

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{questType}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{questDuration.get(String(duration))}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{peopleCount[0]}–{peopleCount[1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{questLevel.get(level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onCloseBtnClick={onCloseBtnClick} peopleCount={peopleCount} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
