import React from 'react';
import ActiveLink from '../ActiveLink';

const FullscreenNav = ({ isMenuOpen, handleCloseMenu }) => {
  const menuContainerClasses = [
    'fullscreen-menu-container flex justify-end',
    isMenuOpen ? 'is-active' : null,
  ];

  const menuClasses = [
    'fullscreen-menu-container__menu flex justify-center items-center z-40',
    isMenuOpen ? 'is-active' : null,
  ];
  return (
    <div className={menuContainerClasses.join(' ')}>
      <div className={menuClasses.join(' ')}>
        <div
          className='fullscreen-menu-container__menu-btn text-2xl transition-all text-secondary-80 fixed top-4 right-4 hover:opacity-50 cursor-pointer'
          onClick={handleCloseMenu}
        >
          <div className='btn-line'></div>
          <div className='btn-line'></div>
        </div>
        <ul className='flex flex-col items-center justify-center'>
          <li className=''>
            <ActiveLink activeClassName='active' href='/'>
              <a className='fullscreen-menu-container__link'>what I do?</a>
            </ActiveLink>
          </li>
          <li className=''>
            <a
              href='https://irensays.blog/'
              className='fullscreen-menu-container__link'
            >
              blog
            </a>
          </li>
          <li>
            <button className='fullscreen-menu-container__link'>contact</button>
          </li>
          <li>
            <a
              href='https://github.com/irensaywhen'
              className='btn btn-default btn-light-social'
            >
              <i className='fab fa-github'></i>
            </a>
            <a
              href='https://twitter.com/IrenSayWhen'
              className='btn btn-sm btn-light-social'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullscreenNav;
