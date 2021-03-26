import Header from './header/Header';

const Layout = ({ children }) => {
  return (
    <div className='bg-secondary-20'>
      <Header />
      <main className='container mx-auto px-4'>{children}</main>
    </div>
  );
};

export default Layout;
