import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { navigationList } from '../../../const';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            {
              navigationList.map((navItem) => (
                <S.LinkItem key={navItem.title}>
                  <S.Link $isActiveLink={location.pathname === navItem.path} to={navItem.path}>
                    {navItem.title}
                </S.Link>
            </S.LinkItem>
              ))
            }
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  )
};

export default Header;
