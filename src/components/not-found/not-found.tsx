import { MainLayout, PageTitle } from '../common/common';
import { AppRoute } from '../../const';
import * as S from './not-found.styled';

function NotFound(): JSX.Element {
  return (
    <MainLayout>
      <S.Main>
        <S.Wrapper>
          <PageTitle>404. Страница не найдена</PageTitle>
          <S.NotFoundLink to={AppRoute.Root}>Вернуться на главную.</S.NotFoundLink>
        </S.Wrapper>
      </S.Main>
    </MainLayout>
  );
}

export default NotFound;
