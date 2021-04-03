import React, { useState } from 'react';

import Logo from './Logo';
import Nav from './Nav';
import FullscreenNav from './FullscreenNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  console.log(isMenuOpen);
  return (
    <>
      <header className='w-full py-2 fixed top-0 bg-transparent z-50'>
        <div className='container mx-auto px-4 sm:px-8 md:px-12 max-w-screen-xl flex justify-between items-center'>
          <Logo />
          <Nav handleOpenMenu={handleOpenMenu} />
        </div>
      </header>
      <FullscreenNav
        isMenuOpen={isMenuOpen}
        handleCloseMenu={handleCloseMenu}
      />
    </>
  );
};

export default Header;
