import React, { useState } from 'react';
import ActiveLink from '../ActiveLink';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(prevState => !prevState);

  const menuClasses = ['menu', isMenuOpen ? 'is-active' : null];

  const menuItems = isMenuOpen ? (
    <ul className='menu-items'>
      <li>
        <ActiveLink activeClassName='active' href='/'>
          <a className='btn btn-sm btn-light'>что я делаю?</a>
        </ActiveLink>
      </li>
      <li>
        <button className='btn btn-sm btn-light'>обсудить проект</button>
      </li>
      <li>
        <a
          href='https://github.com/irensaywhen'
          className='btn btn-sm btn-light-social'
        >
          <i class='fab fa-github'></i>
        </a>
      </li>
      <li>
        <a
          href='https://twitter.com/IrenSayWhen'
          className='btn btn-sm btn-light-social'
        >
          <i class='fab fa-twitter'></i>
        </a>
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
