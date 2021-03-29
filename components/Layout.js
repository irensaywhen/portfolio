import Header from './header/Header';

const Layout = ({ children }) => {
  return (
    <div className='bg-secondary-20'>
      <Header />
      <main className='container mx-auto px-4 sm:px-8 md:px-12 max-w-screen-xl'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
