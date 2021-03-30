import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='w-full py-2 fixed top-0 bg-transparent z-50'>
      <div className='container mx-auto px-4 sm:px-8 md:px-12 max-w-screen-xl flex justify-between'>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
