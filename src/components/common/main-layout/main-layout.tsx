import { Header, Footer } from 'components/common/common';

type MainLayoutProps = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
