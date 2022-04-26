import styled from 'styled-components';
import contactsBg from 'assets/img/contacts-bg.jpg';
import { Link } from '../common/common';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  background-image: url(${contactsBg});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 10px;
  text-align: center;
  line-height: 36px;
`;

const NotFoundLink = styled(Link)`
  font-size: 30px;
`;

export {
  Main,
  Wrapper,
  NotFoundLink,
};
