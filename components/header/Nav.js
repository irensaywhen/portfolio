import React, { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(prevState => !prevState);

  const menuClasses = ['menu', isMenuOpen ? 'is-active' : null];

  const menuItems = isMenuOpen ? (
    <ul className='menu-items'>
      <li>
        <a href='#' className='btn btn-sm btn-light'>
          what I do
        </a>
      </li>
      <li>
        <a href='' className='btn btn-sm btn-light'>
          my work
        </a>
      </li>
      <li>
        <button className='btn btn-sm btn-light'>contact</button>
      </li>
    </ul>
  ) : null;
  return (
    <div className={menuClasses.join(' ')}>
      {menuItems}
      <div className='menu-btn' onClick={handleOpenMenu}>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
      </div>
      <nav></nav>
    </div>
  );
};

export default Nav;
