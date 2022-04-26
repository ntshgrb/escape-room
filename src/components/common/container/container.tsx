import * as S from './container.styled';

type ContainerPrors = {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerPrors) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
