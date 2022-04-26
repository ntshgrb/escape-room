import * as S from './page-subtext.styled';

type PageSubtextProps = {
  children: React.ReactNode,
}

const PageSubtext = ({ children, ...props }: PageSubtextProps) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
