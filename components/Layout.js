import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className='container mx-auto'>{children}</main>
    </>
  );
};

export default Layout;
