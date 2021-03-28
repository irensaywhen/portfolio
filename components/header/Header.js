import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='w-full px-4 py-2 fixed top-0 bg-transparent'>
      <div className='container relative mx-auto flex justify-between'>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
