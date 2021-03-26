import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='w-100 fixed top-0 bg-transparent'>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
