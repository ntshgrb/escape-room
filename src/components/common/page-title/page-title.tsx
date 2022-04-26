import * as S from './page-title.styled';

type PageTitleProps = {
  children: string | React.ReactNode,
}

const PageTitle = ({ children, ...props }: PageTitleProps) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
